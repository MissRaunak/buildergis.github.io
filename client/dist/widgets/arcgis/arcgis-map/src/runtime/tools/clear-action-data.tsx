/** @jsx jsx */
import { css, jsx, MutableStoreManager, getAppStore, ImmutableObject, JimuMapViewInfo } from 'jimu-core'
import { ShowOnMapDatas, AddToMapDatas, ActionType, DataChangeType } from 'jimu-arcgis'
import { Icon, Dropdown, DropdownMenu, DropdownButton, DropdownItem, defaultMessages } from 'jimu-ui'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { MultiSourceMapContext } from '../components/multisourcemap-context'

interface State {
  isOpen: boolean
}

export default class ClearActionData extends BaseTool<BaseToolProps, State> {
  toolName = 'ClearActionData'

  constructor (props) {
    super(props)
    this.state = { isOpen: false }
  }

  static getIsNeedSetting () {
    return false
  }

  getStyle () {
    return css`
      .jimu-dropdown {
        display: flex;
        .icon-btn {
          padding: 7px;
          border-radius: 0;
        }
      }
    `
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'clearResults', defaultMessage: defaultMessages.clearResults })
  }

  getIcon (): IconType {
    return {
      icon: require('jimu-icons/svg/outlined/editor/trash.svg'),
      onIconClick: () => {
        this.onIconClick()
      }
    }
  }

  createActionDataItem (actionDataId: string, actionDataTitle: string, mapWidgetId: string, key: number) {
    return (
      <DropdownItem
        key={key}
        header={false}
        onClick={e => this.onActionItemClick(e, actionDataId, mapWidgetId)}
      >
        {actionDataTitle}
      </DropdownItem>
    )
  }

  getAddOrShowOnMapDatas (mapWidgetId: string) {
    const showOnMapDatas: ShowOnMapDatas = MutableStoreManager.getInstance().getStateValue([mapWidgetId])?.showOnMapDatas || {}
    const addToMapDatas: AddToMapDatas = MutableStoreManager.getInstance().getStateValue([mapWidgetId])?.addToMapDatas || {}
    const showOnMapDataInfos = Object.entries(showOnMapDatas).map(entry => {
      return {
        id: entry[0],
        title: entry[1].title,
        jimuMapViewId: entry[1].jimuMapViewId,
        mapWidgetId: entry[1].mapWidgetId,
        needToRemove: true,
        type: entry[1].type
      }
    })
    const addToMapDataInfos = Object.entries(addToMapDatas).map(entry => {
      return {
        id: entry[0],
        title: entry[1].title,
        jimuMapViewId: entry[1].jimuMapViewId,
        mapWidgetId: entry[1].mapWidgetId,
        needToRemove: entry[1].dataChangeType === DataChangeType.Created,
        type: entry[1].type
      }
    })

    return showOnMapDataInfos.concat(addToMapDataInfos).filter(dataInfo => {
      // There is no jimuMapViewId while generating the action data if the map widget hasn't been loaded in the another page/view,
      // use a default jimuMapViewId to show data.
      let jimuMapViewId = dataInfo.jimuMapViewId
      if (!jimuMapViewId && dataInfo.mapWidgetId === mapWidgetId) {
        const jimuMapViewsInfo: ImmutableObject<{ [jimuMapViewId: string]: JimuMapViewInfo }> = getAppStore().getState().jimuMapViewsInfo
        jimuMapViewId = Object.keys(jimuMapViewsInfo || {}).find(viewId => jimuMapViewsInfo[viewId].mapWidgetId === mapWidgetId)
      }

      return (jimuMapViewId === this.props.jimuMapView.id && dataInfo.type === ActionType.DataAction && dataInfo.needToRemove)
    })
  }

  onIconClick = () => {}

  onDropDownToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onActionItemClick = (evt, actionDataId: string, mapWidgetId: string) => {
    this.setState({ isOpen: false })
    const showOnMapDatas = MutableStoreManager.getInstance().getStateValue([mapWidgetId])?.showOnMapDatas
    const addToMapDatas = MutableStoreManager.getInstance().getStateValue([mapWidgetId])?.addToMapDatas
    if (showOnMapDatas) {
      delete showOnMapDatas[actionDataId]
      MutableStoreManager.getInstance().updateStateValue(mapWidgetId, 'showOnMapDatas', showOnMapDatas)
    }
    if (addToMapDatas && addToMapDatas[actionDataId]?.dataChangeType === DataChangeType.Created) {
      MutableStoreManager.getInstance().updateStateValue(mapWidgetId, `addToMapDatas.${actionDataId}.dataChangeType`, DataChangeType.Remove)
    }
  }

  getExpandPanel (): JSX.Element {
    // return (
    //  <div className='exbmap-ui-tool esri-widget--button'>
    //    <Icon width={16} height={16} className='exbmap-ui-tool-icon' icon={this.getIcon().icon} />
    //  </div>
    // )
    return (
      <MultiSourceMapContext.Consumer>
        {({ isShowClearShowOnMapDataBtn, mapWidgetId }) => (
          this.getContent(isShowClearShowOnMapDataBtn, mapWidgetId)
        )}
      </MultiSourceMapContext.Consumer>

    )
  }

  getContent = (isShowClearShowOnMapDataBtn: boolean, mapWidgetId: string) => {
    if (isShowClearShowOnMapDataBtn) {
      return (
        <div css={this.getStyle()} title={this.getTitle()}>
          <Dropdown
            direction='down'
            size='sm'
            toggle={this.onDropDownToggle}
            isOpen={this.state.isOpen}
          >
            <DropdownButton icon arrow={false} size='sm' type='default'>
              <Icon size={16} className='exbmap-ui-tool-icon' icon={this.getIcon().icon} />
            </DropdownButton>
            <DropdownMenu>
              {this.getAddOrShowOnMapDatas(mapWidgetId).map((dataInfo, index) => this.createActionDataItem(dataInfo.id, dataInfo.title, mapWidgetId, index))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )
    } else {
      return null
    }
  }
}
