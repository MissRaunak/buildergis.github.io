import {
  AbstractMessageAction, MessageType, Message, getAppStore, DataRecordSetChangeMessage, RecordSetChangeType, DataSourceFilterChangeMessage,
  DataRecordsSelectionChangeMessage, ExtentChangeMessage, FeatureDataRecord as FeatureQueryDataRecord, MutableStoreManager, DataSourceManager, MessageDescription,
  DataSourcesChangeMessage, DataSourcesChangeType
} from 'jimu-core'
import { FeatureDataRecord as FeatureLayerDataRecord, loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'
import { IMConfig } from './pan-to-action-setting'
import { getDsByWidgetId } from './action-utils'

export default class PanToAction extends AbstractMessageAction {
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
    //const config = getAppStore().getState().appStateInBuilder ? getAppStore().getState().appStateInBuilder.appConfig : getAppStore().getState().appConfig
    //const messageWidgetJson = config.widgets[messageWidgetId]
    if (messageType === MessageType.DataRecordsSelectionChange ||
          messageType === MessageType.DataSourceFilterChange) {
      return 'message-actions/pan-to-action-setting'
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
            let panToValue = {}
            const geometries = []
            dataRecordSetChangeMessage.dataRecordSets.forEach(dataRecordSet => {
              if (dataRecordSet && dataRecordSet.records) {
                for (let i = 0; i < dataRecordSet.records.length; i++) {
                  const dataRecordFeature = (dataRecordSet.records[i] as
                    (FeatureQueryDataRecord | FeatureLayerDataRecord)).feature
                  if (dataRecordFeature) {
                    geometries.push(handleFeature(dataRecordFeature, Graphic).geometry)
                  }
                }
              }
            })
            panToValue = {
              geometries: geometries
            }
            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue)
          }
          break
        case MessageType.DataRecordsSelectionChange:
          const config = getAppStore().getState().appConfig
          const messageWidgetJson = config.widgets[message.widgetId]
          const messageWidgetLabel = messageWidgetJson.manifest.label
          const dataRecordsSelectionChangeMessage = message as DataRecordsSelectionChangeMessage

          let panToValue = {}
          const geometries = []
          if (dataRecordsSelectionChangeMessage.records) {
            if (dataRecordsSelectionChangeMessage.records[0]) {
              //if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
              //  break
              //}
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
              const dataRecordFeature = (dataRecordsSelectionChangeMessage.records[i] as
                (FeatureQueryDataRecord | FeatureLayerDataRecord)).feature
              if (dataRecordFeature) {
                geometries.push(handleFeature(dataRecordFeature, Graphic).geometry)
              }
            }
          }

          panToValue = {
            geometries: geometries
          }

          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue)
          break
        case MessageType.ExtentChange:
          const extentChangeMessage = message as ExtentChangeMessage

          if (extentChangeMessage.getRelatedWidgetIds().includes(this.widgetId)) {
            break
          }

          const extentValue = {
            geometries: [extentChangeMessage.extent]
          }

          const panToFeatureActionValue = {
            value: extentValue,
            relatedWidgets: extentChangeMessage.getRelatedWidgetIds()
          }
          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue', panToFeatureActionValue)
          break
        case MessageType.DataSourceFilterChange:
          const filterChangeMessage = message as DataSourceFilterChangeMessage
          // support view.
          if (!actionConfig.useDataSources.some(useDataSource => filterChangeMessage.dataSourceIds.some(dataSourceId => useDataSource?.dataSourceId === dataSourceId))) {
            break
          }
          const filterChangeActionValue = {
            dataSourceIds: filterChangeMessage.dataSourceIds,
            useDataSources: actionConfig.useDataSources || [],
            type: 'pan-to-query-params'
          }

          MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', filterChangeActionValue)
          break
        case MessageType.DataSourcesChange:
          const dataSourcesChangeMessage = message as DataSourcesChangeMessage
          if (dataSourcesChangeMessage.changeType === DataSourcesChangeType.Create) {
            const dataSourceIds = []
            dataSourcesChangeMessage.dataSources.forEach(dataSource => {
              dataSourceIds.push(dataSource.id)
            })
            const panToFeatureActionValueForLayers = {
              dataSourceIds: dataSourceIds,
              type: 'pan-to-layers'
            }
            MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToFeatureActionValueForLayers)
          }
          break
      }
      return true
    })
  }
}
