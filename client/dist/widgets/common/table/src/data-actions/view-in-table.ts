import { AbstractDataAction, DataRecordSet, utils, getAppStore, appActions, MutableStoreManager, DataSourceTypes, UseDataSource, DataSourceStatus } from 'jimu-core'
import { LayersConfig, SelectionModeType } from '../config'

export default class ViewInTable extends AbstractDataAction {
  async isSupported (dataSet: DataRecordSet): Promise<boolean> {
    let isActionSupported = true
    const dataSource = dataSet?.dataSource
    const typeIsLayer = dataSource.type === DataSourceTypes.FeatureLayer || dataSource.type === DataSourceTypes.SceneLayer
    if (!dataSource.isInAppConfig() && !typeIsLayer) {
      isActionSupported = false
    }
    return isActionSupported && dataSource.getStatus() !== DataSourceStatus.NotReady
  }

  getDataActionRuntimeUuid = (widgetId) => {
    const runtimeUuid = utils.getLocalStorageAppKey()
    return `${runtimeUuid}-${widgetId}-DaTableArray`
  }

  deepClone = (obj: any): any => {
    const isArray = Array.isArray(obj)
    const cloneObj = isArray ? [] : {}
    for (const key in obj) {
      const isObject = (typeof obj[key] === 'object' || typeof obj[key] === 'function') && obj[key] !== null
      cloneObj[key] = isObject ? this.deepClone(obj[key]) : obj[key]
    }
    return cloneObj
  }

  async onExecute (dataSet: DataRecordSet, actionConfig?: any): Promise<boolean> {
    const { dataSource, records } = dataSet
    const allFields = dataSource && dataSource.getSchema()
    const isRuntimeData = !dataSource.isInAppConfig()
    const defaultInvisible = [
      'CreationDate',
      'Creator',
      'EditDate',
      'Editor',
      'GlobalID'
    ]
    const allFieldsDetails = Object.values(allFields?.fields)
    const initTableFields = allFieldsDetails.filter(
      item => !defaultInvisible.includes(item.jimuName)
    ).map(ele => {
      return { ...ele, visible: true }
    })
    const newItemId = `DaTable-${utils.getUUID()}`
    const name = dataSet.name || dataSource.getLabel() || dataSource.getDataSourceJson()?.sourceLabel
    const useDataSource = {
      dataSourceId: dataSource.id,
      mainDataSourceId: dataSource.getMainDataSource()?.id,
      dataViewId: dataSource.dataViewId,
      rootDataSourceId: dataSource.getRootDataSource()?.id
    } as UseDataSource
    const daLayerItem: LayersConfig = {
      id: newItemId,
      name: name,
      allFields: allFieldsDetails,
      tableFields: initTableFields,
      enableAttachements: false,
      enableEdit: false,
      allowCsv: false,
      enableSearch: false,
      searchFields: '',
      enableRefresh: false,
      enableSelect: false,
      selectMode: SelectionModeType.Single,
      dataActionObject: true,
      ...(isRuntimeData ? { dataActionDataSource: dataSource } : { useDataSource })
    }
    const viewInTableObj = MutableStoreManager.getInstance().getStateValue([this.widgetId])?.viewInTableObj || {}
    const copyRecords = []
    records.forEach(record => {
      copyRecords.push(record.clone(true))
    })
    viewInTableObj[newItemId] = { daLayerItem, records: copyRecords }
    MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'viewInTableObj', viewInTableObj)

    getAppStore().dispatch(
      appActions.widgetStatePropChange(this.widgetId, 'dataActionActiveObj', { activeTabId: newItemId, dataActionTable: true })
    )
    return true
  }
}
