/** @jsx jsx */
import {
  React,
  IMAppConfig,
  IMState,
  jsx,
  IMThemeVariables,
  Immutable,
  UseDataSource,
  WidgetJson,
  expressionUtils,
  AllDataSourceTypes,
  css,
  getAppStore
} from 'jimu-core'
import { AllWidgetSettingProps, builderAppSync } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import {
  TextInput,
  TextArea,
  Switch,
  NumericInput,
  defaultMessages as jimuUiMessages,
  AdvancedButtonGroup,
  Button,
  richTextUtils,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Checkbox
} from 'jimu-ui'
import defaultMessages from './translations/default'
import { IMConfig, EmbedType } from '../config'
import { getStyle } from './style'
import {
  DataSourceSelector
} from 'jimu-ui/advanced/data-source-selector'
import { DynamicUrlEditor } from 'jimu-ui/advanced/dynamic-url-editor'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { getExpressionParts } from './utils'
const MAX_CODE_LEN = 8192
const BLOG_URL = 'https://www.esri.com/arcgis-blog/products/experience-builder/announcements/compliance-requirements-on-embedded-content-by-code-in-arcgis-experience-builder/'
const trialsAccount = ['Trial', 'Trial Developer', 'HUP Online Entitlements', 'Trial Press', 'Personal Use', 'Developer Subscription']
const developerAccount = ['Developer', 'Trial Developer', 'Developer Subscription']

interface ExtraProps {
  appConfig: IMAppConfig
  selectWidgets: WidgetJson[]
}

interface CustomeProps {
  theme: IMThemeVariables
}

interface State {
  showUrlError: boolean
  urlError: string
  isExpPopupOpen: boolean
  showCodeError: boolean
  confirmDialogOpen: boolean
  notShowAgainChecked: boolean
  buttonShowDialog: boolean
}

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig> & ExtraProps & CustomeProps,
State
> {
  supportedDsTypes = Immutable([
    AllDataSourceTypes.FeatureLayer,
    AllDataSourceTypes.SceneLayer
  ])

  attributePlaceHolder: string
  expressionPlaceHolder: string
  checkBoxRef: HTMLInputElement
  readonly accountType: string
  readonly cacheKey: string
  constructor (props) {
    super(props)

    const appState = getAppStore().getState()
    this.accountType = appState?.portalSelf?.subscriptionInfo?.type
    this.cacheKey = `exb-${appState?.appStateInBuilder?.appId}-embed-alert`
    this.state = {
      showUrlError: false,
      urlError: '',
      isExpPopupOpen: false,
      showCodeError: false,
      confirmDialogOpen: true,
      notShowAgainChecked: false,
      buttonShowDialog: false
    }
  }

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetSettingProps<IMConfig>
  ) => {
    const widgets = state && state.appStateInBuilder?.appConfig?.widgets
    const selectWidgets = []
    if (widgets) {
      for (const name in widgets) {
        const item = widgets[name]
        if (item.uri === 'widgets/common/embed/' && item.id !== props.id) {
          selectWidgets.push(item)
        }
      }
    }
    return {
      appConfig:
        state && state.appStateInBuilder && state.appStateInBuilder.appConfig,
      selectWidgets
    }
  }

  componentWillUnmount () {
    builderAppSync.publishChangeWidgetStatePropToApp({ widgetId: this.props.id, propKey: 'codeLimitExceeded', value: false })
  }

  embedTypeChange = (type: EmbedType) => {
    const { config } = this.props
    if (type === EmbedType.Url) {
      this.setState({ showCodeError: false })
    }
    if (config.embedType !== type) {
      this.props.onSettingChange({
        id: this.props.id,
        config: config.set('embedType', type)
      })
    }
  }

  checkURL = (str: string): boolean => {
    if (!str || str === '') {
      this.setState({ urlError: '' })
      return true
    }
    const httpsRex = '^(([h][t]{2}[p][s])?://)'
    const re = new RegExp(httpsRex)
    if (!re.test(str)) {
      this.setState({
        urlError: this.formatMessage('httpsUrlMessage')
      })
      return false
    }
    // url of localhost works without '.'
    // eslint-disable-next-line
    const httpsLocalRex = new RegExp('^(([h][t]{2}[p][s])?://localhost)')
    if (httpsLocalRex.test(str)) {
      this.setState({ urlError: '' })
      return true
    }
    const index = str.indexOf('.')
    if (index < 0 || index === str.length - 1) {
      this.setState({
        urlError: this.formatMessage('invalidUrlMessage')
      })
      return false
    }
    this.setState({ urlError: '' })
    return true
  }

  embedCodeChangeRightAway = value => {
    const { config, id } = this.props
    const contentLength = value?.length
    if (contentLength > MAX_CODE_LEN) {
      this.setState({ showCodeError: true })
      builderAppSync.publishChangeWidgetStatePropToApp({ widgetId: id, propKey: 'codeLimitExceeded', value: true })
      return
    }
    this.setState({ showCodeError: false })
    builderAppSync.publishChangeWidgetStatePropToApp({ widgetId: id, propKey: 'codeLimitExceeded', value: false })
    this.props.onSettingChange({
      config: config.set('embedCode', value),
      id: id
    })
  }

  formatMessage = (id: string, values?: { [key: string]: any }) => {
    const messages = Object.assign({}, defaultMessages, jimuUiMessages)
    return this.props.intl.formatMessage({ id, defaultMessage: messages[id] }, values)
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

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    })
  }

  onSwitchChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  handleAutoInterval = (valueInt: number) => {
    const { config, id } = this.props
    this.props.onSettingChange({
      id,
      config: config.set('autoInterval', valueInt)
    })
  }

  labelChange = event => {
    const { config, id } = this.props
    const value = event?.target?.value
    this.props.onSettingChange({
      id,
      config: config.set('label', value)
    })
  }

  webAddressExpressionChange = (expression: string) => {
    const { config, onSettingChange, id, useDataSourcesEnabled, useDataSources } = this.props
    const { embedType } = config
    const UINF_TAG_REGEXP = /\<urlsearch((?!\<urlsearch).)+\<\/urlsearch\>/gmi
    const EXP_TAG_REGEXP = /\<exp((?!\<exp).)+\<\/exp\>/gmi
    const haveUrlsearch = expression?.match(UINF_TAG_REGEXP)
    const haveExp = expression?.match(EXP_TAG_REGEXP)
    const expressionStr = expression && expression.replace(/<[^>]+>/g, '').replace(/(^\s*|\s*$)/g, '')
    if ((haveUrlsearch || haveExp) && expressionStr.indexOf('{') === 0) {
      // show expression in runtime
      this.setState({ showUrlError: false })
    } else {
      if (this.checkURL(expressionStr)) {
        this.setState({ showUrlError: false })
      } else {
        this.setState({ showUrlError: true })
      }
    }
    // When expression changed, put the fields in `useDataSources`
    const embedExpressions = richTextUtils.getAllExpressions(expression)
    const parts = getExpressionParts(embedExpressions)
    let udsWithFields
    udsWithFields = expressionUtils.getUseDataSourceFromExpParts(parts, useDataSources) as any
    const udsWithoutFields = expressionUtils.getUseDataSourcesWithoutFields(useDataSources)
    udsWithFields = expressionUtils.mergeUseDataSources(udsWithoutFields, udsWithFields)

    const hasExpressionTag = expression?.match(EXP_TAG_REGEXP)
    const useLabel = embedType === EmbedType.Url && useDataSourcesEnabled && useDataSources?.length > 0 && hasExpressionTag
    if (expression) {
      if (!useLabel) {
        onSettingChange({
          id,
          config: config.set('expression', expression).set('enableLabel', false),
          useDataSources: udsWithFields
        })
      } else {
        onSettingChange({
          id,
          config: config.set('expression', expression),
          useDataSources: udsWithFields
        })
      }
    }
  }

  isUsedDataSource = () => {
    const { useDataSources, useDataSourcesEnabled } = this.props
    return useDataSourcesEnabled && useDataSources && useDataSources.length > 0
  }

  hasExpressionTag = (expression: string) => {
    const EXP_TAG_REGEXP = /\<exp((?!\<exp).)+\<\/exp\>/gmi
    return expression?.match(EXP_TAG_REGEXP)
  }

  handleOk = () => {
    if (this.checkBoxRef) {
      const checked = this.checkBoxRef.checked
      localStorage.setItem(this.cacheKey, checked?.toString())
    }
    this.setState({ confirmDialogOpen: false })
  }

  showDialog = () => {
    this.setState({ confirmDialogOpen: true, buttonShowDialog: true })
  }

  onCheckBoxChange = (evt) => {
    const value = evt.currentTarget.checked
    this.setState({ notShowAgainChecked: value })
  }

  getModalStyle = () => {
    return css`
      .modal-body{
        overflow-y: auto;
        max-height: 360px;
        padding: 0;
      }
      .modal-content{
        width: auto;
        background: var(--white);
        padding: 30px;
        border: none;
      }
      .modal-footer{
        padding: 0;
        margin-top: 30px;
        .btn {
          min-width: 80px;
          + .btn {
            margin-left: 10px;
          }
        }
      }
      &.modal-dialog{
        width: auto;
      }

      .title-icon {
        padding: 0 6px;
      }
      .title-label {
        font-size: 1rem;
        color: var(--black);
      }

      .message {
        margin-left: 36px;
        margin-top: 1rem;
      }
    `
  }

  render () {
    const { showUrlError, urlError, showCodeError, confirmDialogOpen, notShowAgainChecked, buttonShowDialog } = this.state
    const { theme, useDataSources, config, useDataSourcesEnabled, id, selectWidgets } = this.props
    const { embedType, enableLabel, label } = config
    const useLabel = embedType === EmbedType.Url && useDataSourcesEnabled && useDataSources?.length > 0 && this.hasExpressionTag(config.expression)
    const disableByCode = trialsAccount.includes(this.accountType) || developerAccount.includes(this.accountType)
    // eslint-disable-next-line no-unneeded-ternary
    const withOutAlert = localStorage.getItem(this.cacheKey) === 'true' ? true : false
    const dialogOpen = embedType === EmbedType.Code && confirmDialogOpen && (!withOutAlert || buttonShowDialog)
    const blogHtmlString = `<a target="_blank" style="text-decoration: none !important;" href=${BLOG_URL}>$1</a>`
    const restrictWarningTips = this.formatMessage('restrictWarningTips', { restrictBlogLinkTag: '<restrictBlogLinkTag>' }).replace(/\<restrictBlogLinkTag\>(.+)\<restrictBlogLinkTag\>/, blogHtmlString)

    return (
      <div css={getStyle(this.props.theme)}>
        <div className='widget-iframe jimu-widget'>
          <div>
            <SettingSection>
              <SettingRow label={this.formatMessage('embedBy')} />
              <SettingRow>
                <AdvancedButtonGroup className='w-100'>
                  <Button
                    className='w-50'
                    aria-label={`${this.formatMessage('embedBy')} ${this.formatMessage('url')}`}
                    active={embedType === EmbedType.Url}
                    onClick={() => this.embedTypeChange(EmbedType.Url)}
                  >
                    {this.formatMessage('url')}
                  </Button>
                  <Button
                    className='w-50'
                    aria-label={`${this.formatMessage('embedBy')} ${this.formatMessage('code')}`}
                    active={embedType === EmbedType.Code}
                    onClick={() => this.embedTypeChange(EmbedType.Code)}
                    disabled={disableByCode}
                  >
                    {this.formatMessage('code')}
                  </Button>
                </AdvancedButtonGroup>
              </SettingRow>
              {embedType === EmbedType.Url && (
                <SettingRow>
                  <div className='choose-ds w-100'>
                    <DataSourceSelector
                      types={this.supportedDsTypes}
                      useDataSources={this.props.useDataSources}
                      useDataSourcesEnabled={useDataSourcesEnabled}
                      onToggleUseDataEnabled={this.onToggleUseDataEnabled}
                      onChange={this.onDataSourceChange}
                      widgetId={this.props.id}
                    />
                  </div>
                </SettingRow>
              )}
              <SettingRow>
                {embedType === EmbedType.Url
                  ? (
                    <div className='d-flex flex-column w-100 embed-dynamic-con'>
                      <DynamicUrlEditor
                        widgetId={id}
                        useDataSourcesEnabled={useDataSourcesEnabled}
                        useDataSources={useDataSources}
                        selectWidgets={selectWidgets}
                        onChange={this.webAddressExpressionChange}
                        value={config.expression}
                      />
                      {showUrlError && (
                        <div
                          className='d-flex w-100 align-items-center justify-content-between'
                          style={{ marginTop: '5px' }}
                        >
                          <WarningOutlined color={theme.colors.danger} />
                          <div
                            style={{
                              width: 'calc(100% - 20px)',
                              margin: '0 4px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              color: theme.colors.danger
                            }}
                          >
                            {urlError}
                          </div>
                        </div>
                      )}
                    </div>
                    )
                  : (
                    <div className='d-flex flex-column w-100'>
                      <TextArea
                        height={300}
                        className='w-100'
                        spellCheck={false}
                        placeholder={this.formatMessage('codePlaceholder')}
                        defaultValue={config.embedCode || ''}
                        onAcceptValue={this.embedCodeChangeRightAway}
                      />
                      {showCodeError &&
                        <div
                          className='d-flex w-100 align-items-center justify-content-between'
                          style={{ marginTop: '5px' }}
                        >
                          <WarningOutlined color={theme.colors.danger} />
                          <div
                            style={{
                              width: 'calc(100% - 20px)',
                              margin: '0 4px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              color: theme.colors.danger
                            }}
                          >
                            {this.formatMessage('maxLimit')}
                          </div>
                        </div>
                      }
                    </div>
                    )}
              </SettingRow>
              {useLabel &&
                <React.Fragment>
                  <SettingRow>
                    <div className='d-flex justify-content-between w-100'>
                      <label className='w-75 text-truncate d-inline-block font-dark-600'>
                        {this.formatMessage('label')}
                      </label>
                      <Switch
                        className='can-x-switch'
                        checked={enableLabel || false}
                        data-key='enableLabel'
                        onChange={evt => {
                          this.onSwitchChanged(evt.target.checked, 'enableLabel')
                        }}
                        aria-label={this.formatMessage('label')}
                      />
                    </div>
                  </SettingRow>
                  {enableLabel &&
                    <SettingRow>
                      <TextInput
                        type='text'
                        className='w-100'
                        value={label || ''}
                        onChange={this.labelChange}
                      />
                    </SettingRow>
                  }
                </React.Fragment>
              }
              {embedType === EmbedType.Code &&
                <Button
                  icon
                  className='mt-2 mb-1'
                  type='default'
                  onClick={this.showDialog}
                >
                  <WarningOutlined size='l' color={'var(--warning-600)'} />
                </Button>
              }
              <SettingRow>
                <div className='d-flex justify-content-between w-100'>
                  <label className='w-75 text-truncate d-inline-block font-dark-600'>
                    {this.formatMessage('autoRefresh')}
                  </label>
                  <Switch
                    className='can-x-switch'
                    checked={
                      (this.props.config && this.props.config.autoRefresh) ||
                      false
                    }
                    data-key='autoRefresh'
                    onChange={evt => {
                      this.onSwitchChanged(evt.target.checked, 'autoRefresh')
                    }}
                    aria-label={this.formatMessage('autoRefresh')}
                  />
                </div>
              </SettingRow>
              {config.autoRefresh && (
                <SettingRow
                  flow='wrap'
                  label={`${this.formatMessage(
                    'autoInterval'
                  )} (${this.formatMessage('autoUnit')})`}
                >
                  <NumericInput
                    size='sm'
                    style={{ width: '100%' }}
                    value={config.autoInterval || 1}
                    precision={2}
                    min={0.2}
                    max={1440}
                    onChange={this.handleAutoInterval}
                    aria-label={`${this.formatMessage(
                      'autoInterval'
                    )} (${this.formatMessage('autoUnit')})`}
                  />
                </SettingRow>
              )}
            </SettingSection>
            {dialogOpen &&
              <Modal isOpen centered css={this.getModalStyle()}>
                <ModalBody>
                  <div className='d-flex align-items-start'>
                    <div className='title-icon'>
                      <WarningOutlined size='l' color={'var(--warning-600)'} />
                    </div>
                    <div className='title-label'>
                      {this.formatMessage('restrictWarningTitle')}
                    </div>
                  </div>
                  <div className='message'>
                    <div
                      className='font-body2'
                      css={css`
                        color: var(--dark-800);
                      `}
                      dangerouslySetInnerHTML={{ __html: restrictWarningTips }}
                    />
                    {!buttonShowDialog &&
                      <div css={css`margin-top: 1.5rem;`}>
                        <Label
                          check
                          className='justify-content-start align-items-start'
                          css={css`
                            color: var(--black);
                          `}
                        >
                          <Checkbox
                            className='cursor-pointer mr-2'
                            checked={notShowAgainChecked}
                            onChange={this.onCheckBoxChange}
                            ref={ref => (this.checkBoxRef = ref)}
                          />
                          {this.formatMessage('dialogPreventDisplayAgainDefaultText')}
                        </Label>
                      </div>
                    }
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button type={'primary'} onClick={this.handleOk}>{this.formatMessage('ok')}</Button>
                </ModalFooter>
              </Modal>
            }
          </div>
        </div>
      </div>
    )
  }
}
