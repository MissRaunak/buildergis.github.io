/** @jsx jsx */
import { jsx, React, css } from 'jimu-core'
import { hooks, defaultMessages as jimuUIMessages, Switch, TextInput } from 'jimu-ui'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'

import defaultMessages from './translations/default'
import { IMConfig } from '../config'
import { IndexedDBCache } from '../indexed-db-cache'

const { useEffect, useRef } = React
const { useTranslate } = hooks

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { onSettingChange: propsOnSettingChange, id, config } = props
  const translate = useTranslate(jimuUIMessages, defaultMessages)
  const cache = useRef<IndexedDBCache>(null)

  useEffect(() => {
    // Init indexed DB.
    cache.current = new IndexedDBCache(id)
    cache.current.init().catch(err => {
      console.error('Failed to read cache.', err)
    })

    return () => { cache.current.close() }
  }, [id])

  const onSettingChange: typeof propsOnSettingChange = (...args) => {
    propsOnSettingChange(...args)
    // Clear cache on setting change.
    cache.current.initialized() && cache.current.clear()
  }

  const onAddWayChange = e => {
    const key = e.target.value
    const prevValue = config[key]
    if (prevValue === true) {
      onSettingChange({
        id,
        config: {
          ...config.without(key)
        }
      })
    } else {
      onSettingChange({
        id,
        config: {
          ...config,
          [key]: true
        }
      })
    }
  }

  const onPlaceholderTextChange = (value: string) => {
    onSettingChange({
      id,
      config: {
        ...config,
        placeholderText: value
      }
    })
  }

  return (
    <div className='widget-setting-add-data jimu-widget-setting' css={style}>
      <SettingSection className='border-0' role='group' title={translate('wayOfAddingData')}>
        <SettingRow label={translate('selectFromAccount')}>
          <Switch className='mr-2' onChange={onAddWayChange} value='disableAddBySearch' checked={!config.disableAddBySearch} />
        </SettingRow>
        <SettingRow label={translate('inputUrl')}>
          <Switch className='mr-2' onChange={onAddWayChange} value='disableAddByUrl' checked={!config.disableAddByUrl} />
        </SettingRow>
        <SettingRow label={translate('uploadFiles')}>
          <Switch className='mr-2' onChange={onAddWayChange} value='disableAddByFile' checked={!config.disableAddByFile} />
        </SettingRow>
      </SettingSection>

      <SettingSection className='border-0 pt-0' role='group' title={translate('emptyListMessage')}>
        <TextInput size='sm' defaultValue={config.placeholderText} placeholder={translate('defaultPlaceholderText')} onAcceptValue={onPlaceholderTextChange} />
      </SettingSection>
    </div>
  )
}

export default Setting

const style = css`

`
