import { AbstractDataAction, DataRecordSet, DataSourceStatus, MutableStoreManager, FeatureDataRecord, DataSource, JSAPILayerMixin } from 'jimu-core'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { handleFeature } from '../runtime/utils'

export default class ZoomTo extends AbstractDataAction {
  async isSupported (dataSet: DataRecordSet): Promise<boolean> {
    const { records } = dataSet
    const dataSource = dataSet.dataSource as DataSource & JSAPILayerMixin
    if (!dataSource || dataSource.getStatus() === DataSourceStatus.NotReady) {
      return false
    }
    if (records.length > 0 && dataSource?.supportSpatialInfo && dataSource?.supportSpatialInfo()) {
      // zoom to graphics
      return true
    } else if (dataSet.records?.length === 0 &&
               !!dataSource?.createJSAPILayerByDataSource &&
                dataSource?.supportSpatialInfo && dataSource?.supportSpatialInfo()) {
      // zoom to layer
      return true
    } else {
      return false
    }
  }

  async onExecute (dataSet: DataRecordSet): Promise<boolean> {
    return loadArcGISJSAPIModules(['esri/Graphic']).then(modules => {
      let Graphic: __esri.GraphicConstructor = null;
      [Graphic] = modules
      const featureSet = {
        features: dataSet.records.map(record => handleFeature((record as FeatureDataRecord).feature, Graphic)),
        dataSourceId: dataSet.dataSource?.id || null,
        zoomToOption: {},
        type: 'zoom-to-graphics'
      }
      MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureSet)
      return true
    })
  }
}
