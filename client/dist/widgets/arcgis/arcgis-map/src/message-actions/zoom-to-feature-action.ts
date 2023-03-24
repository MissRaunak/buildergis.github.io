import {
  AbstractMessageAction, MessageType, Message, DataRecordSetChangeMessage, RecordSetChangeType, getAppStore, DataSourceManager,
  DataRecordsSelectionChangeMessage, FeatureDataRecord, ExtentChangeMessage, MutableStoreManager, DataSourceFilterChangeMessage, MessageDescription,
  DataSourcesChangeMessage, DataSourcesChangeType
} from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'
import { IMConfig } from './zoom-to-feature-action-setting'
import { getDsByWidgetId } from './action-utils'

export default class ZoomToFeatureAction extends AbstractMessageAction {
  NoLockTriggerLayerWidgets = ['Map']

  filterMessageDescription (messageDescription: MessageDescription): boolean {
    if (messageDescription.messageType === MessageType.ExtentChange) {
      return true
    } else if (messageDescription.messageType === MessageType.DataSourcesChange) {
      return true
    } else if (messageDescription.messageType !== MessageType.DataRecordSetChange &&
        messageDescription.messageType !== MessageType.DataRecordsSelectionChange &&
        messageDescription.messageType !== MessageType.DataSourceFilterChange) {
      return false
    } else {
      const dataSourceManager = DataSourceManager.getInstance()
      const messageWidgetUseDataSources = getDsByWidgetId(messageDescription.widgetId, messageDescription.messageType)
      return messageWidgetUseDataSources.some(useDataSource => {
        const ds = dataSourceManager.getDataSource(useDataSource.dataSourceId)
        if (ds.type === 'WEB_MAP' || ds.type === 'WEB_SCENE') {
          return true
        } else {
          return !!ds.getDataSourceJson()?.geometryType
        }
      })
    }
  }

  filterMessage (message: Message): boolean {
    return true
  }

  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    if (messageType === MessageType.DataRecordsSelectionChange ||
          messageType === MessageType.DataRecordSetChange ||
          messageType === MessageType.DataSourceFilterChange) {
      return 'message-actions/zoom-to-feature-action-setting'
    } else {
      return null
    }
  }

  onExecute (message: Message, actionConfig?: IMConfig): Promise<boolean> | boolean {
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules

      switch (message.type) {
        case MessageType.DataRecordSetChange:
          const dataRecordSetChangeMessage = message as DataRecordSetChangeMessage
          if (dataRecordSetChangeMessage.changeType === RecordSetChangeType.CreateUpdate) {
            let zoomToValue = {}
            const arrayFeatures = []
            dataRecordSetChangeMessage.dataRecordSets.forEach(dataRecordSet => {
              if (dataRecordSet && dataRecordSet.records) {
                const features = []
                for (let i = 0; i < dataRecordSet.records.length; i++) {
                  if ((dataRecordSet.records[i] as FeatureDataRecord).feature) {
                    features.push(handleFeature((dataRecordSet.records[i] as
                      FeatureDataRecord).feature, Graphic))
                  }
                }
                if (features.length > 0) {
                  arrayFeatures.push(features)
                }
              }
            })
            zoomToValue = {
              arrayFeatures: arrayFeatures,
              zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
              type: 'zoom-to-array-graphics'
            }
            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', zoomToValue)
          }
          break
        case MessageType.DataRecordsSelectionChange:
          const config = getAppStore().getState().appConfig
          const messageWidgetJson = config.widgets[message.widgetId]
          const messageWidgetLabel = messageWidgetJson.manifest.label
          const dataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage

          let selectionFeatureSet = {}
          const selectFeatures = []

          let dataSourceId = null
          if (dataRecordsSelectionChangeMessage.records) {
            if (dataRecordsSelectionChangeMessage.records[0]) {
              if (dataRecordsSelectionChangeMessage.records[0].dataSource) {
                dataSourceId = (dataRecordsSelectionChangeMessage.records[0].dataSource).id
              }

              if (this.NoLockTriggerLayerWidgets.includes(messageWidgetLabel)) {
                const mainDataSourceOfSelection = dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource()
                if (!actionConfig?.useDataSources?.some(useDataSource => useDataSource?.mainDataSourceId === mainDataSourceOfSelection.id)) {
                  break
                }
              } else {
                const selectionChangeDS = dataRecordsSelectionChangeMessage.records[0].dataSource
                const selectionChangeMainDS = selectionChangeDS?.getMainDataSource()
                // check dsId of mainDS currently, will support view in the future.
                if (!actionConfig.useDataSources.some(useDataSource => useDataSource?.mainDataSourceId === selectionChangeMainDS.id)) {
                  break
                }
              }
            }

            for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
              if ((dataRecordsSelectionChangeMessage.records[i] as FeatureDataRecord).feature) {
                selectFeatures.push(handleFeature((dataRecordsSelectionChangeMessage.records[i] as
                  FeatureDataRecord).feature, Graphic))
              }
            }
          }

          selectionFeatureSet = {
            features: selectFeatures,
            dataSourceId: dataSourceId,
            zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
            type: 'zoom-to-graphics'
          }

          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', selectionFeatureSet)
          break
        case MessageType.ExtentChange:
          const extentChangeMessage = message as ExtentChangeMessage
          if (extentChangeMessage.getRelatedWidgetIds().includes(this.widgetId)) {
            break
          }

          const extentValue = {
            features: [extentChangeMessage.extent],
            type: 'zoom-to-extent'
          }

          const zoomToFeatureActionValue = {
            value: extentValue,
            relatedWidgets: extentChangeMessage.getRelatedWidgetIds()
          }
          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue', zoomToFeatureActionValue)
          break
        case MessageType.DataSourceFilterChange:
          const filterChangeMessage = message as DataSourceFilterChangeMessage
          // support data view.
          if (!actionConfig.useDataSources.some(useDataSource => filterChangeMessage.dataSourceIds.some(dataSourceId => useDataSource?.dataSourceId === dataSourceId))) {
            break
          }
          const filterChangeActionValue = {
            dataSourceIds: filterChangeMessage.dataSourceIds,
            zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
            useDataSources: actionConfig.useDataSources || [],
            type: 'zoom-to-query-params'
          }

          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', filterChangeActionValue)
          break
        case MessageType.DataSourcesChange:
          const dataSourcesChangeMessage = message as DataSourcesChangeMessage
          if (dataSourcesChangeMessage.changeType === DataSourcesChangeType.Create) {
            const dataSourceIds = []
            dataSourcesChangeMessage.dataSources.forEach(dataSource => {
              dataSourceIds.push(dataSource.id)
            })
            const zoomToFeatureActionValueForLayers = {
              dataSourceIds: dataSourceIds,
              zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
              type: 'zoom-to-layers'
            }
            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', zoomToFeatureActionValueForLayers)
          }
          break
      }

      return true
    })
  }
}
