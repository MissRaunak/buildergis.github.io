/** @jsx jsx */
import {
  React,
  Immutable,
  ImmutableObject,
  DataSourceJson,
  IMState,
  FormattedMessage,
  jsx,
  getAppStore,
  UseDataSource,
  AllDataSourceTypes,
  DataSourceManager
} from 'jimu-core'
import { Switch, Radio, Label, Alert } from 'jimu-ui'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { AllWidgetSettingProps, getAppConfigAction } from 'jimu-for-builder'
import { IMConfig } from '../config'
import defaultMessages from './translations/default'
import MapThumb from './components/map-thumb'
import { getStyle } from './lib/style'
import { JimuMapView, JimuMapViewComponent, MapViewManager } from 'jimu-arcgis'
import { List, TreeActionDataType, _TreeItem } from 'jimu-ui/basic/list-tree'
import CustomizeLayerPopper from './components/customize-layer-popper'
import { createRef } from 'react'

interface ExtraProps {
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson }>
}

export interface WidgetSettingState {
  useMapWidget: boolean
  viewIdsFromMapWidget: string[]
  dataSourceLabels: string[]
  mapViews: { [viewId: string]: JimuMapView }
  showCustomizeLayerPanel: boolean
  isViewLoaded: boolean
  currentCustomizeLayerTitle: string
  activeCustomizeView: JimuMapView
}

export type WidgetSettingProps = AllWidgetSettingProps<IMConfig> & ExtraProps

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig> & ExtraProps,
WidgetSettingState
> {
  supportedDsTypes = Immutable([
    AllDataSourceTypes.WebMap,
    AllDataSourceTypes.WebScene
  ])

  customizeLayersRef: HTMLDivElement
  customizeLayersTrigger = createRef<HTMLDivElement>()
  activeDataSourceKey: string = ''

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      mapViews: null,
      useMapWidget: this.props.config.useMapWidget || false,
      viewIdsFromMapWidget: null,
      dataSourceLabels: null,
      showCustomizeLayerPanel: false,
      isViewLoaded: false,
      currentCustomizeLayerTitle: '',
      activeCustomizeView: null
    }
  }

  isCustomizeOptionValid = (): boolean => {
    const usedMapWidgetId = this.props.useMapWidgetIds?.[0]
    const appConfig = getAppConfigAction().appConfig
    for (const widgetId of Object.keys(appConfig.widgets)) {
      const widget = appConfig.widgets[widgetId]
      if (
        widget.manifest.name === 'map-layers' &&
        widget.id !== this.props.widgetId &&
        widget.useMapWidgetIds?.[0] === usedMapWidgetId
      ) {
        return false
      }
    }
    return true
  }

  getPortUrl = (): string => {
    const portUrl = getAppStore().getState().portalUrl
    return portUrl
  }

  shouldShowCustomizeLayerOptions = () => {
    return this.props.useMapWidgetIds?.length > 0
  }

  shouldShowLayerList = () => {
    return !this.isDataSourceEmpty()
  }

  isCustomizeOptionEmpty = () => {
    return this.isDataSourceEmpty() && !this.shouldShowCustomizeWarning()
  }

  onRadioChange = (useMapWidget) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('useMapWidget', useMapWidget)
    })

    this.setState({
      useMapWidget: useMapWidget
    })
  }

  onToolsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onOptionsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    })
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    })
  }

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    // Update mapViews when connect to another widget
    const mapViews = MapViewManager.getInstance().getJimuMapViewGroup(useMapWidgetIds[0])?.jimuMapViews || {}
    this.setState({
      mapViews: mapViews
    })

    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })

    // Restore the layer's listMode when selecting another map widget
    const prevMapViews = MapViewManager.getInstance().getJimuMapViewGroup(this.props.useMapWidgetIds?.[0])?.jimuMapViews || {}
    if (this.props.useMapWidgetIds?.length > 0 && prevMapViews) {
      const prevMapView = Object.values(prevMapViews)?.[0]
      const prevConfig = this.props.config?.customizeLayerOptions?.[prevMapView?.id]

      // Only restore the layer when it's enabled & hidden
      if (prevConfig?.isEnabled) {
        const hiddenJimuLayerViewIdSet = new Set(prevConfig?.hiddenJimuLayerViewIds)
        for (const layerViewId of Object.keys(prevMapView?.jimuLayerViews)) {
          const currentLayer = prevMapView?.jimuLayerViews[layerViewId]?.layer
          if (hiddenJimuLayerViewIdSet.has(layerViewId)) {
            currentLayer.listMode = 'show'
          }
        }
      }
    }
  }

  onToggleCustomizeLayer = (mapViewId: string, isEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.setIn(['customizeLayerOptions', mapViewId, 'isEnabled'], isEnabled)
    })
  }

  onViewsCreate = (views: { [viewId: string]: JimuMapView }) => {
    const viewIdsFromMapWidget = Object.keys(views)
    const labels = viewIdsFromMapWidget.map((id) => {
      return this.getDataSourceLabel(views[id].dataSourceId)
    })
    this.setState({
      mapViews: views,
      viewIdsFromMapWidget,
      dataSourceLabels: labels,
      isViewLoaded: true
    })
  }

  onListItemBodyClick = (
    actionData: TreeActionDataType,
    refComponent: _TreeItem
  ) => {
    const { itemJsons } = refComponent.props
    const currentItemJson = itemJsons[0]
    // return for disabled item
    if (currentItemJson.itemStateDisabled) {
      return
    }

    // Same click, previous item active
    if (currentItemJson.itemKey === this.activeDataSourceKey) {
      this.activeDataSourceKey = ''
      this.setState({
        showCustomizeLayerPanel: false,
        activeCustomizeView: null
      })
    } else {
      // Different click, update active key
      if (this.activeDataSourceKey === '') {
        this.setState({
          showCustomizeLayerPanel: true,
          currentCustomizeLayerTitle: currentItemJson?.itemStateTitle,
          activeCustomizeView: this.state.mapViews[currentItemJson.itemKey]
        })
      } else {
        this.setState({
          currentCustomizeLayerTitle: currentItemJson?.itemStateTitle,
          activeCustomizeView: this.state.mapViews[currentItemJson.itemKey]
        })
      }
      this.activeDataSourceKey = currentItemJson.itemKey
    }
  }

  onCloseCustomizePanel = () => {
    this.activeDataSourceKey = ''
    this.setState({
      showCustomizeLayerPanel: false,
      activeCustomizeView: null
    }, () => {
      // Make the list tab-able, so the focus ring stays on the setting panel
      this.customizeLayersRef.tabIndex = 0
      this.customizeLayersRef.focus()
    })
  }

  getActiveCustomizeStatus = () => {
    return this.props.config?.customizeLayerOptions?.[this.state.activeCustomizeView.id]?.isEnabled || false
  }

  getDataSourceLabel = (dataSourceId: string): string => {
    if (!dataSourceId) {
      return ''
    }
    const dsObj = DataSourceManager.getInstance().getDataSource(dataSourceId)
    const label = dsObj.getLabel()
    return label || dsObj?.getDataSourceJson().sourceLabel || dataSourceId
  }

  getCustomizeLayerList = (disabled: boolean = false) => {
    if (!this.state.isViewLoaded) {
      return this.getSkeletonList()
    } else {
      return (
        <div ref={this.customizeLayersTrigger} className='w-100'>
          <List
          forwardRef={(ref: HTMLDivElement) => {
            this.customizeLayersRef = ref
          }}
          itemsJson={Object.keys(this.state.mapViews)?.map((key, index) => {
            const currentView: JimuMapView = this.state.mapViews[key]
            return {
              itemStateTitle: this.getDataSourceLabel(currentView.dataSourceId),
              itemStateChecked: this.state?.activeCustomizeView?.id === currentView.id,
              itemStateDisabled: disabled,
              itemKey: `${currentView.id}`
            }
          })}
          dndEnabled={false}
          handleClickItemBody={this.onListItemBodyClick}
          />
        </div>
      )
    }
  }

  getSkeletonList = () => {
    const SKELETON_NUM = 2
    const skeletonItems = []
    for (let i = 0; i < SKELETON_NUM; i++) {
      skeletonItems.push({
        itemKey: i.toString(),
        itemStateCommands: [{
          iconProps: () => ({ icon: null, size: 12, style: { opacity: 0 } })
        }]
      })
    }
    return <List
      className='w-100'
      forwardRef={(ref: HTMLDivElement) => {
        this.customizeLayersRef = ref
      }}
      itemsJson={skeletonItems}
      dndEnabled={false}
      handleClickItemBody={() => {}}
      />
  }

  getCustomizeSettingContent = () => {
    return (
      this.shouldShowCustomizeLayerOptions() && (
        <React.Fragment>
          <SettingRow
            label={this.props.intl.formatMessage({
              id: 'customizeLayers',
              defaultMessage: defaultMessages.customizeLayers
            })}
          >
            {!this.isCustomizeOptionValid() && (
              <Alert
                text="Map widgets connected with more than one Map Layers widget cannot be customized."
                form="tooltip"
                buttonType="tertiary"
                type="warning"
                placement="right"
                size="small"
                className='warning-tooltip'
              ></Alert>
            )}
          </SettingRow>

          <SettingRow
            aria-label={this.props.intl.formatMessage({
              id: 'customizeLayers',
              defaultMessage: defaultMessages.customizeLayers
            })}
            className={this.isCustomizeOptionEmpty() ? 'empty-customize-layer-list' : 'customize-layer-list'}
          >
            {this.shouldShowCustomizeWarning() &&
              <Alert
                tabIndex={0}
                className={'warningMsg'}
                open
                text={this.props.intl.formatMessage({
                  id: 'customizeLayerWarnings',
                  defaultMessage: defaultMessages.customizeLayerWarnings
                })}
                type={'warning'}
              />
            }
            {
              this.shouldShowLayerList() && this.getCustomizeLayerList(!this.isCustomizeOptionValid())
            }
          </SettingRow>

          {this.activeDataSourceKey !== '' && (
            <CustomizeLayerPopper
              mapView={this.state.activeCustomizeView}
              title={this.state.currentCustomizeLayerTitle}
              isCustomizeEnabled={this.getActiveCustomizeStatus()}
              onToggle={this.onCloseCustomizePanel}
              onClose={this.onCloseCustomizePanel}
              trigger={this.customizeLayersTrigger.current}
              settingProps={this.props}
            />
          )}
        </React.Fragment>
      )
    )
  }

  shouldShowCustomizeWarning = (): boolean => {
    // When multiple map-layers connected to the same map, don't show this
    if (!this.isCustomizeOptionValid()) {
      return false
    }
    // Not connecting to a map widget
    if (!this.state.useMapWidget) {
      return true
    } else {
      return this.isDataSourceEmpty()
    }
  }

  isDataSourceEmpty = (): boolean => {
    const mapViews = MapViewManager.getInstance().getJimuMapViewGroup(this.props.useMapWidgetIds[0])?.jimuMapViews || {}
    // The connected widget only have ONE map view & have no data source
    if (Object.keys(mapViews).length === 1 && Object.values(mapViews)?.[0]?.dataSourceId === null) {
      return true
    } else {
      return false
    }
  }

  render () {
    const portalUrl = this.getPortUrl()

    let setDataContent = null
    let dataSourceSelectorContent = null
    let mapSelectorContent = null
    let actionsContent = null
    let optionsContent = null

    dataSourceSelectorContent = (
      <div className="data-selector-section">
        <SettingRow>
          <DataSourceSelector
            types={this.supportedDsTypes}
            useDataSources={this.props.useDataSources}
            useDataSourcesEnabled
            mustUseDataSource
            onChange={this.onDataSourceChange}
            widgetId={this.props.id}
          />
        </SettingRow>
        {portalUrl &&
          this.props.dsJsons &&
          this.props.useDataSources &&
          this.props.useDataSources.length === 1 && (
            <SettingRow>
              <div className="w-100">
                <div
                  className="webmap-thumbnail"
                  title={
                    this.props.dsJsons[
                      this.props.useDataSources[0].dataSourceId
                    ]?.label
                  }
                >
                  <MapThumb
                    mapItemId={
                      this.props.dsJsons[
                        this.props.useDataSources[0].dataSourceId
                      ]
                        ? this.props.dsJsons[
                          this.props.useDataSources[0].dataSourceId
                        ].itemId
                        : null
                    }
                    portUrl={
                      this.props.dsJsons[
                        this.props.useDataSources[0].dataSourceId
                      ]
                        ? this.props.dsJsons[
                          this.props.useDataSources[0].dataSourceId
                        ].portalUrl
                        : null
                    }
                  />
                </div>
              </div>
            </SettingRow>
        )}
      </div>
    )

    mapSelectorContent = (
      <div className="map-selector-section">
        <SettingRow>
          <MapWidgetSelector
            onSelect={this.onMapWidgetSelected}
            useMapWidgetIds={this.props.useMapWidgetIds}
          />
        </SettingRow>
        <JimuMapViewComponent
          useMapWidgetId={this.props.useMapWidgetIds?.[0]}
          onViewsCreate={this.onViewsCreate}
        />
        {this.getCustomizeSettingContent()}
      </div>
    )

    if (this.state.useMapWidget) {
      setDataContent = mapSelectorContent

      actionsContent = (
        <React.Fragment>
          <SettingRow
            label={
              <FormattedMessage
                id="goto"
                defaultMessage={defaultMessages.goto}
              />
            }
          >
            <Switch
              className="can-x-switch"
              checked={(this.props.config && this.props.config.goto) || false}
              data-key="goto"
              onChange={(evt) => {
                this.onToolsChanged(evt.target.checked, 'goto')
              }}
              aria-label={this.props.intl.formatMessage({
                id: 'goto',
                defaultMessage: defaultMessages.goto
              })}
            />
          </SettingRow>
          <SettingRow
            label={
              <FormattedMessage
                id="showOrHideLabels"
                defaultMessage={defaultMessages.showOrHideLabels}
              />
            }
          >
            <Switch
              className="can-x-switch"
              checked={(this.props.config && this.props.config.label) || false}
              data-key="goto"
              onChange={(evt) => {
                this.onToolsChanged(evt.target.checked, 'label')
              }}
              aria-label={this.props.intl.formatMessage({
                id: 'showOrHideLabels',
                defaultMessage: defaultMessages.showOrHideLabels
              })}
            />
          </SettingRow>
          <SettingRow
            label={
              <FormattedMessage
                id="transparency"
                defaultMessage={defaultMessages.layerTransparency}
              />
            }
          >
            <Switch
              className="can-x-switch"
              checked={
                (this.props.config && this.props.config.opacity) || false
              }
              data-key="opacity"
              onChange={(evt) => {
                this.onToolsChanged(evt.target.checked, 'opacity')
              }}
              aria-label={this.props.intl.formatMessage({
                id: 'transparency',
                defaultMessage: defaultMessages.layerTransparency
              })}
            />
          </SettingRow>
        </React.Fragment>
      )

      optionsContent = (
        <SettingRow
          label={
            <FormattedMessage
              id="setVisibility"
              defaultMessage={defaultMessages.setVisibility}
            />
          }
        >
          <Switch
            className="can-x-switch"
            checked={
              (this.props.config && this.props.config.setVisibility) || false
            }
            data-key="setVisibility"
            onChange={(evt) => {
              this.onOptionsChanged(evt.target.checked, 'setVisibility')
            }}
            aria-label={this.props.intl.formatMessage({
              id: 'setVisibility',
              defaultMessage: defaultMessages.setVisibility
            })}
          />
        </SettingRow>
      )
    } else {
      setDataContent = dataSourceSelectorContent
    }

    return (
      <div css={getStyle(this.props.theme)}>
        <div className="widget-setting-layerlist">
          <SettingSection
            title={this.props.intl.formatMessage({
              id: 'sourceLabel',
              defaultMessage: defaultMessages.sourceLabel
            })}
            role="group"
            aria-label={this.props.intl.formatMessage({
              id: 'sourceLabel',
              defaultMessage: defaultMessages.sourceLabel
            })}
          >
            <SettingRow>
              <div className="layerlist-tools w-100">
                <div className="w-100">
                  <div className="layerlist-tools-item radio">
                    <Radio
                      id="map-data"
                      style={{ cursor: 'pointer' }}
                      name="source-option"
                      onChange={(e) => this.onRadioChange(false)}
                      checked={!this.state.useMapWidget}
                    />
                    <Label
                      style={{ cursor: 'pointer' }}
                      for="map-data"
                      className="ml-1"
                    >
                      {this.props.intl.formatMessage({
                        id: 'showLayerForMap',
                        defaultMessage: defaultMessages.showLayerForMap
                      })}
                    </Label>
                  </div>
                </div>
                <div className="w-100">
                  <div className="layerlist-tools-item radio">
                    <Radio
                      id="map-view"
                      style={{ cursor: 'pointer' }}
                      name="source-option"
                      onChange={(e) => this.onRadioChange(true)}
                      checked={this.state.useMapWidget}
                    />
                    <Label
                      style={{ cursor: 'pointer' }}
                      for="map-view"
                      className="ml-1"
                    >
                      {this.props.intl.formatMessage({
                        id: 'interactWithMap',
                        defaultMessage: defaultMessages.interactWithMap
                      })}
                    </Label>
                  </div>
                </div>
              </div>
            </SettingRow>
            {setDataContent}
          </SettingSection>

          <SettingSection
            title={this.props.intl.formatMessage({
              id: 'options',
              defaultMessage: defaultMessages.options
            })}
            role="group"
            aria-label={this.props.intl.formatMessage({
              id: 'options',
              defaultMessage: defaultMessages.options
            })}
          >
            {actionsContent}
            <SettingRow
              label={
                <FormattedMessage
                  id="information"
                  defaultMessage={defaultMessages.information}
                />
              }
            >
              <Switch
                className="can-x-switch"
                checked={
                  (this.props.config && this.props.config.information) || false
                }
                data-key="information"
                onChange={(evt) => {
                  this.onToolsChanged(evt.target.checked, 'information')
                }}
                aria-label={this.props.intl.formatMessage({
                  id: 'information',
                  defaultMessage: defaultMessages.information
                })}
              />
            </SettingRow>
            {optionsContent}
          </SettingSection>
        </div>
      </div>
    )
  }
}
