/** @jsx jsx */
import { Icon, Switch, Button, hooks } from 'jimu-ui'
import defaultMessages from '../translations/default'
import {
  JimuLayerViewSelector,
  SettingRow,
  SettingSection,
  SidePopper
} from 'jimu-ui/advanced/setting-components'
import React, { useCallback, useState } from 'react'
import { getStyleForLI } from '../lib/style'
import { jsx, defaultMessages as jimuCoreDefaultMessages } from 'jimu-core'
import { WidgetSettingProps } from '../setting'
import { JimuMapView } from 'jimu-arcgis'

const iconClose = require('jimu-icons/svg/outlined/editor/close.svg')

interface Props {
  mapView: JimuMapView
  title: string
  isCustomizeEnabled: boolean
  onToggle: () => void
  onClose: () => void
  trigger: HTMLElement | HTMLElement[]
  settingProps: WidgetSettingProps
}

export default function CustomizeLayerPopper (props: Props) {
  const {
    mapView,
    isCustomizeEnabled,
    onToggle,
    onClose,
    trigger,
    title,
    settingProps
  } = props
  const translate = hooks.useTranslate(defaultMessages, jimuCoreDefaultMessages)

  const getAllTreeItemKeys = (mapView: JimuMapView) => {
    const keys = []
    for (const key of Object.keys(mapView.jimuLayerViews)) {
      keys.push(key)
    }
    return keys
  }

  const getInitialSelected = useCallback(() => {
    const keys = getAllTreeItemKeys(mapView)
    const hiddenSet = new Set(settingProps.config?.customizeLayerOptions?.[mapView.id]?.hiddenJimuLayerViewIds)
    return keys.filter(key => {
      return !hiddenSet.has(key)
    })
  }, [mapView, settingProps.config?.customizeLayerOptions])

  const defaultSelectedValues = getInitialSelected()
  const [selectedValues, setSelectedValues] = useState(defaultSelectedValues)

  const onCustomizeLayerChange = (hiddenJimuLayerViewIds: string[], jimuLayerViewIds: string[]) => {
    const newConfig = settingProps.config.set('selectedJimuLayerIds', jimuLayerViewIds)
      .setIn(['customizeLayerOptions', mapView.id, 'hiddenJimuLayerViewIds'], hiddenJimuLayerViewIds)

    settingProps.onSettingChange({
      id: settingProps.id,
      config: newConfig
    })
  }

  const onToggleCustomizeLayer = (mapViewId: string, isEnabled: boolean) => {
    const keys = getAllTreeItemKeys(mapView)
    const allKeysSet = new Set(keys)

    if (isEnabled) {
      const newSelectedValues = Array.from(allKeysSet)
      setSelectedValues(newSelectedValues)
    } else {
      // Restore the layer's listMode
      const selectedSet = new Set(selectedValues)
      const hiddenValues = keys.filter(key => !selectedSet.has(key))
      for (const hiddenLayerViewId of hiddenValues) {
        const layerObj = mapView.jimuLayerViews?.[hiddenLayerViewId].layer
        layerObj.listMode = 'show'
      }
      setSelectedValues([])
    }

    // No matter it's on/off, clean up the ids array
    settingProps.onSettingChange({
      id: settingProps.id,
      config: settingProps.config.setIn(['customizeLayerOptions', mapViewId], {
        isEnabled: isEnabled,
        hiddenJimuLayerViewIds: []
      })
    })
  }

  const onLayerViewChange = (jimuLayerViewIds: string[]) => {
    const layerViewIds = getAllTreeItemKeys(mapView)
    const displayedIdSet = new Set(jimuLayerViewIds)
    const hiddenJimuLayerViewIds = []
    for (const id of layerViewIds) {
      if (!displayedIdSet.has(id)) {
        hiddenJimuLayerViewIds.push(id)
      }
    }

    setSelectedValues(jimuLayerViewIds)
    onCustomizeLayerChange(hiddenJimuLayerViewIds, jimuLayerViewIds)
  }

  return (
    <SidePopper
      isOpen={true}
      position="right"
      toggle={onToggle}
      trigger={trigger}
    >
      <div className="w-100 h-100" css={getStyleForLI(settingProps.theme)}>
        <div className="w-100 h-100 layer-item-panel">
          <div
            className={
              'w-100 d-flex align-items-center justify-content-between setting-header setting-title'
            }
          >
            <h5 title={title} className={'text-truncate layer-item-label mt-2'}>
              {title}
            </h5>
            <Button
              role={'button'}
              title={translate('close')}
              aria-label={translate('close')}
              className={'ml-2'}
              icon
              type={'tertiary'}
              size={'sm'}
              onClick={onClose}
            >
              <Icon icon={iconClose} />
            </Button>
          </div>
          <div className="setting-container">
            <SettingSection>
              <SettingRow label={translate('enableCustomizeLayers')}>
                <Switch
                  className="can-x-switch"
                  checked={isCustomizeEnabled}
                  data-key="enableCustomizeLayers"
                  onChange={(event) => {
                    onToggleCustomizeLayer(mapView.id, event.target.checked)
                  }}
                  aria-label={translate('enableCustomizeLayers')}
                />
              </SettingRow>
              {isCustomizeEnabled && (
                <SettingRow>
                  <JimuLayerViewSelector
                    // Use key attribute to force create new component instance
                    key={mapView.id}
                    jimuMapViewId={mapView.id}
                    onChange={onLayerViewChange}
                    isMultiSelection
                    defaultSelectedValues={defaultSelectedValues}
                  ></JimuLayerViewSelector>
                </SettingRow>
              )}
            </SettingSection>
          </div>
        </div>
      </div>
    </SidePopper>
  )
}
