/** @jsx jsx */
/* eslint-disable prefer-const */
import { React, css, jsx, Immutable, polished, IMThemeSliderVariant, IMThemeVariables } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow, DirectionSelector } from 'jimu-ui/advanced/setting-components'
import { IMConfig, ViewType, IMViewNavigationData } from '../config'
import { NavigationVariant, MultiSelect, Select, Radio, Label, Switch, TextInput, NumericInput, hooks, Tooltip, Button, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'

import { getSectionLabel, useViewNavigationVariant, getViewNavigationVariant, getViewSelectItems, useContainerSections, useSectionViews, useIconCustomLabels } from './utils'
import { SliderStyleSetting } from './slider-style-setting'
import { IMViewNavigationDisplay } from '../runtime/components/view-navigation'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import { IconPicker } from 'jimu-ui/advanced/resource-selector'
import { ComponentState, NavStyleSettingByState, NavIconPicker, InputUnit, TextAlignment } from 'jimu-ui/advanced/style-setting-components'
import defaultMessages from './translations/default'
import { useTheme2 } from 'jimu-theme'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'

type SettingProps = AllWidgetSettingProps<IMConfig>

const useStyle = (theme: IMThemeVariables) => {
  const dark600 = theme?.colors?.palette.dark[600]
  return React.useMemo(() => {
    return css`
        .jimu-multi-select {
          width: 100%;
          > .jimu-dropdown {
            width: 100%;
          }
          > .jimu-menu-item {
            width: 100%;
            height: ${polished.rem(26)};
          }
        }
        .radio-container {
          display: flex;
          width: 100%;
          margin-top: 0.5rem;
          > span.jimu-radio {
            flex-shrink: 0;
            margin-top: 0.1rem;
          }
          > label {
            margin-bottom: 0;
          }
        }
        .list-guide-tip-button {
          svg {
            margin-top: ${polished.rem(-2)};
          }
        }
        .title-1 {
          > label {
            font-size: ${polished.rem(14)} !important;
            color: ${dark600} !important;
          }
        }
      `
  }, [dark600])
}
const Setting = (props: SettingProps) => {
  const appTheme = useTheme2()
  const translate = hooks.useTranslate(jimuiDefaultMessage, defaultMessages)
  const { config, id, onSettingChange, theme } = props
  const data = config?.data ?? Immutable({}) as IMViewNavigationData
  const display = config?.display ?? Immutable({}) as IMViewNavigationDisplay
  const { section, type: viewType, views: cfView } = data
  const { vertical, type, navStyle, variant: cfVariant, advanced, standard } = display
  const { showIcon, showText, showTitle, alternateIcon, activedIcon, previousText, previousIcon, nextText, nextIcon, hideThumb, step = 1, textAlign, gap } = standard || {}
  const variant = useViewNavigationVariant(type, navStyle, advanced, cfVariant)
  const background = variant?.root?.bg
  const sections = useContainerSections(id)
  const views = useSectionViews(section)
  const style = useStyle(theme)

  const [newPreviousText, setNewPreviousText] = React.useState(previousText)
  const [newNextText, setNewNextText] = React.useState(nextText)

  const [alternateIconCustomLabel, activedIconCustomLabel, previousIconCustomLabel, nextIconCustomLabel] = useIconCustomLabels(translate, standard)

  React.useEffect(() => {
    newPreviousText !== previousText && setNewPreviousText(previousText)
    newNextText !== nextText && setNewNextText(previousText)
    // eslint-disable-next-line
  }, [previousText, nextText])

  const onSettingConfigChange = (key: string | string[], value: any) => {
    onSettingChange({
      id,
      config: Array.isArray(key) ? config.setIn(key, value) : config.set(key, value)
    })
  }

  const renderSelectText = (values: string[]) => {
    const viewNumber = values ? values.length : 0
    return translate('viewsSelected', { viewNumber })
  }

  const onViewsSelectClick = (_, __, vs: string[]) => {
    //sort views by section.views
    vs.sort((a, b) => {
      return views?.indexOf(a) - views?.indexOf(b)
    })
    onSettingConfigChange(['data', 'views'], vs)
  }

  const onAdvancedChange = () => {
    const advanced = !config?.display.advanced

    let display = config.display.set('advanced', advanced)
    if (advanced) {
      const variant = getViewNavigationVariant(type, navStyle)
      display = display.set('variant', variant)
    } else {
      display = display.set('variant', undefined)
    }

    onSettingConfigChange('display', display)
  }

  const handleVariantItemChange = (state: ComponentState, key: string, value: any) => {
    onSettingConfigChange(['display', 'variant', 'item', state, key], value)
  }

  const handlePreviousTextChange = (e) => {
    const value = e.target.value
    setNewPreviousText(value)
  }

  const handleNextTextChange = (e) => {
    const value = e.target.value
    setNewNextText(value)
  }

  return <div className="widget-setting-navigator jimu-widget-setting" css={style}>
    <SettingSection>
      <SettingRow flow="wrap" label={translate('linkTo')} role='group' aria-label={translate('linkTo')}>
        <Select size='sm' value={section} onChange={e => onSettingConfigChange(['data', 'section'], e.target.value)}>
          {sections.map((sid, index) => <option key={index} value={sid}>{getSectionLabel(sid)}</option>)}
        </Select>
      </SettingRow>

      {section && <React.Fragment>

        {type === 'nav' && <SettingRow label={translate('views')} role='group' aria-label={translate('views')} flow="wrap">
          <div className="radio-container">
            <Radio id="view-type-auto" style={{ cursor: 'pointer' }} aria-label={translate('auto')}
              name="view-type" onChange={e => onSettingConfigChange(['data', 'type'], ViewType.Auto)} checked={viewType === ViewType.Auto} />
            <Label style={{ cursor: 'pointer' }} for="view-type-auto" className="ml-2">{translate('auto')}</Label>
          </div>

          <div className="radio-container">
            <Radio id="view-type-custom" style={{ cursor: 'pointer' }} aria-label={translate('custom')}
              name="view-type" onChange={e => onSettingConfigChange(['data', 'type'], ViewType.Custom)} checked={viewType === ViewType.Custom} />
            <Label style={{ cursor: 'pointer' }} for="view-type-custom" className="ml-2">{translate('custom')}</Label>
          </div>
        </SettingRow>}

        {viewType === ViewType.Custom && <SettingRow flow="wrap">
          <MultiSelect aria-label={cfView} values={cfView} items={getViewSelectItems(views)} onClickItem={onViewsSelectClick} displayByValues={renderSelectText} ></MultiSelect>
        </SettingRow>}

        {type !== 'slider' && <SettingRow flow="no-wrap" label={translate('direction')} aria-label={translate('direction')}>
          <DirectionSelector vertical={vertical} onChange={(vertical) => onSettingConfigChange(['display', 'vertical'], vertical)}></DirectionSelector>
        </SettingRow>}

        {type === 'nav' && <SettingRow label={translate('space')} aria-label={translate('space')} flow="no-wrap">
          <InputUnit size='sm' className="w-50" value={gap} onChange={(value) => onSettingConfigChange(['display', 'standard', 'gap'], `${value.distance}${value.unit}`)} />
        </SettingRow>}

        {type === 'nav' && <SettingRow flow="no-wrap" label={translate('alignment')} aria-label={translate('alignment')}>
          <TextAlignment textAlign={textAlign} onChange={(value) => onSettingConfigChange(['display', 'standard', 'textAlign'], value)} />
        </SettingRow>}

        {
          (type === 'nav' && showIcon && !showText) && <SettingRow flow="no-wrap" label={translate('tooltip')} aria-label={translate('tooltip')}>
            <Switch checked={showTitle} onChange={() => onSettingConfigChange(['display', 'standard', 'showTitle'], !showTitle)}></Switch>
          </SettingRow>
        }

        {(type === 'nav' && showIcon) && <React.Fragment>
          <SettingRow flow="no-wrap" label={translate('symbol')} aria-label={translate('symbol')} className="title-1" ></SettingRow>
          <SettingRow flow="no-wrap" label={translate('currentView')} aria-label={translate('currentView')}>
            <NavIconPicker configurableOption={'none'} hideRemove size={8} icon={activedIcon as any} customLabel={activedIconCustomLabel} onChange={(icon) => onSettingConfigChange(['display', 'standard', 'activedIcon'], icon)}></NavIconPicker>
          </SettingRow>
          <SettingRow flow="no-wrap" label={translate('others')} aria-label={translate('others')}>
            <NavIconPicker configurableOption={'none'} hideRemove size={8} icon={alternateIcon as any} customLabel={alternateIconCustomLabel} onChange={(icon) => onSettingConfigChange(['display', 'standard', 'alternateIcon'], icon)}></NavIconPicker>
          </SettingRow>
        </React.Fragment>
        }

        {
          type === 'navButtonGroup' && <SettingRow flow="no-wrap" role='group' aria-label={translate('step')} label={(<div>
            {translate('step')}
            <Tooltip title={translate('stepTips')} showArrow={false} placement='bottom'>
              <Button className='list-guide-tip-button' type='tertiary' aria-label={translate('stepTips')}>
                <InfoOutlined size='s'/>
              </Button>
            </Tooltip>
          </div>)} >
            <NumericInput size="sm" aria-label={`${step}`} value={step} style={{ width: '27%' }} showHandlers={false}
              min={0.1} max={1} onAcceptValue={value => onSettingConfigChange(['display', 'standard', 'step'], +value)} />
          </SettingRow>
        }

        {
          type === 'navButtonGroup' && <React.Fragment>
            <SettingRow flow="wrap" label={translate('previous')} role='group' aria-label={translate('previous')} className="justify-content-between">
              <TextInput size="sm" style={{ width: '61%' }} aria-label={newPreviousText} value={newPreviousText} onChange={handlePreviousTextChange} onAcceptValue={(value) => onSettingConfigChange(['display', 'standard', 'previousText'], value)} />
              <IconPicker configurableOption={'none'} icon={previousIcon as any} customLabel={previousIconCustomLabel} onChange={(icon) => onSettingConfigChange(['display', 'standard', 'previousIcon'], icon)} setButtonUseColor={false}></IconPicker>
            </SettingRow>

            <SettingRow flow="wrap" label={translate('next')} role='group' aria-label={translate('next')} className="justify-content-between">
              <TextInput size="sm" style={{ width: '61%' }} aria-label={newNextText} value={newNextText} onChange={handleNextTextChange} onAcceptValue={(value) => onSettingConfigChange(['display', 'standard', 'nextText'], value)} />
              <IconPicker configurableOption={'none'} icon={nextIcon as any} customLabel={nextIconCustomLabel} onChange={(icon) => onSettingConfigChange(['display', 'standard', 'nextIcon'], icon)} setButtonUseColor={false}></IconPicker>
            </SettingRow>

          </React.Fragment>
        }

        {type === 'slider' && <SettingRow label={translate('thumbHandle')} aria-label={translate('thumbHandle')} flow="no-wrap">
          <Switch aria-label={translate('thumbHandle')} checked={!hideThumb} onChange={() => onSettingConfigChange(['display', 'standard', 'hideThumb'], !hideThumb)}></Switch>
        </SettingRow>}

      </React.Fragment>}

    </SettingSection>

    {section && <SettingSection>
      <SettingRow flow="no-wrap" label={translate('advance')} aria-label={translate('advance')}>
        <Switch aria-label={translate('advance')} checked={advanced} onChange={onAdvancedChange}></Switch>
      </SettingRow>
      {advanced && <React.Fragment>

        <SettingRow label={translate('background')} aria-label={translate('background')} flow="no-wrap">
          <ThemeColorPicker specificTheme={appTheme} value={background} onChange={(value) => onSettingConfigChange(['display', 'variant', 'root', 'bg'], value)} />
        </SettingRow>

        {type === 'nav' && !showIcon && <SettingRow label={translate('tabStyle')} aria-label={translate('tabStyle')} flow="no-wrap"></SettingRow>}
        {type === 'navButtonGroup' && <SettingRow label={translate('navBtnStyle')} aria-label={translate('navBtnStyle')} flow="no-wrap"></SettingRow>}

        {type === 'nav' && <NavStyleSettingByState
          variant={variant as NavigationVariant}
          onlyBorderColor={navStyle === 'underline'}
          text={showText}
          icon={showIcon}
          onChange={handleVariantItemChange} />}
        {type === 'slider' && <SliderStyleSetting hideThumb={hideThumb} variant={variant as IMThemeSliderVariant} onChange={onSettingConfigChange} />}
        {type === 'navButtonGroup' && <NavStyleSettingByState
          variant={variant as NavigationVariant}
          states={['default', 'hover', 'disabled']}
          onlyBorderColor={false}
          text={true}
          icon={false}
          iconInText={true}
          onChange={handleVariantItemChange} />}
      </React.Fragment>}
    </SettingSection>}

  </div >
}

export default Setting
