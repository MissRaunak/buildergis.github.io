/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { Button, hooks } from 'jimu-ui'
import { ClearFormatOutlined } from 'jimu-icons/outlined/editor/clear-format'
import { Editor, RichSelection, Sources, richTextEditorUtils, RichTextFormatKeys, FormatType, useEditorSelectionFormats } from 'jimu-ui/advanced/rich-text-editor'

interface RichFormatClearProps {
  editor: Editor
  className?: string
  style?: any
  formats?: { [x: string]: any }
  onChange: (text: string) => void
}

const style = css`
  > * {
    user-select: none;
  }
`

const getAllSelection = (editor): RichSelection => {
  let length = editor.getLength()
  length = length > 0 ? length - 1 : length
  return { index: 0, length }
}

export const RichFormatClear = (props: RichFormatClearProps): React.ReactElement => {
  const { editor, onChange, ...others } = props
  const [, _selection] = useEditorSelectionFormats(editor, true)

  const enabled = editor?.isEnabled()
  const translate = hooks.useTranslate()

  const selection = React.useMemo(() => {
    if (!enabled) return getAllSelection(editor)
    return _selection
  }, [enabled, _selection, editor])

  const handleClick = (): void => {
    const source = enabled ? 'user' : 'api' as Sources

    const formatValue = {
      type: FormatType.INLINE,
      key: RichTextFormatKeys.Clear,
      value: null
    }

    richTextEditorUtils.formatText(editor, selection, formatValue, source)
    onChange?.(editor?.root.innerHTML)
  }

  return (
    <Button
      css={style}
      {...others}
      icon
      type='tertiary'
      size='sm'
      onClick={handleClick}
      title={translate('clearAllFormats')}
      aria-label={translate('clearAllFormats')}
    >
      <ClearFormatOutlined />
    </Button>
  )
}
