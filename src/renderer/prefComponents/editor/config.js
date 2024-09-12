import { ENCODING_NAME_MAP } from 'common/encoding'
import { i18n } from '../../../lang'

export const tabSizeOptions = [{
  label: '1',
  value: 1
}, {
  label: '2',
  value: 2
}, {
  label: '3',
  value: 3
}, {
  label: '4',
  value: 4
}]

export function getEndOfLineOptions () {
  return [{
    label: i18n.t('prefComponents.editor.END_OF_LINE_OPTIONS.DEFAULT'),
    value: 'default'
  }, {
    label: i18n.t('prefComponents.editor.END_OF_LINE_OPTIONS.CRLF'),
    value: 'crlf'
  }, {
    label: i18n.t('prefComponents.editor.END_OF_LINE_OPTIONS.LF'),
    value: 'lf'
  }]
}

export function getTrimTrailingNewlineOptions () {
  return [{
    label: i18n.t('prefComponents.editor.TRIM_TRAILING_NEW_LINE_OPTIONS.TRIM_ALL_TRAILING'),
    value: 0
  }, {
    label: i18n.t('prefComponents.editor.TRIM_TRAILING_NEW_LINE_OPTIONS.ENSURE_EXACTLY_ONE_TRAILING'),
    value: 1
  }, {
    label: i18n.t('prefComponents.editor.TRIM_TRAILING_NEW_LINE_OPTIONS.PRESERVE_STYLE_OF_ORIGINAL_DOCUMENT'),
    value: 2
  }, {
    label: i18n.t('prefComponents.editor.TRIM_TRAILING_NEW_LINE_OPTIONS.DO_NOTHING'),
    value: 3
  }]
}

export function getTextDirectionOptions () {
  return [{
    label: i18n.t('prefComponents.editor.TEXT_DIRECTION_OPTIONS.LTR'),
    value: 'ltr'
  }, {
    label: i18n.t('prefComponents.editor.TEXT_DIRECTION_OPTIONS.RTL'),
    value: 'rtl'
  }]
}

let defaultEncodingOptions = null
export const getDefaultEncodingOptions = () => {
  if (defaultEncodingOptions) {
    return defaultEncodingOptions
  }

  defaultEncodingOptions = []
  for (const [value, label] of Object.entries(ENCODING_NAME_MAP)) {
    defaultEncodingOptions.push({ label, value })
  }
  return defaultEncodingOptions
}
