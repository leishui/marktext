import { i18n } from '../../../lang'

export const bulletListMarkerOptions = [{
  label: '*',
  value: '*'
}, {
  label: '-',
  value: '-'
}, {
  label: '+',
  value: '+'
}]

export const orderListDelimiterOptions = [{
  label: '.',
  value: '.'
}, {
  label: ')',
  value: ')'
}]

export function getPreferHeadingStyleOptions () {
  return [{
    label: i18n.t('prefComponents.markdown.PREFER_HEADING_STYLE_OPTIONS.ATX'),
    value: 'atx'
  }, {
    label: i18n.t('prefComponents.markdown.PREFER_HEADING_STYLE_OPTIONS.SETEXT'),
    value: 'setext'
  }]
}

export function getListIndentationOptions () {
  return [{
    label: i18n.t('prefComponents.markdown.LIST_INDENTATION_OPTIONS.DFM'),
    value: 'dfm'
  }, {
    label: i18n.t('prefComponents.markdown.LIST_INDENTATION_OPTIONS.TAB'),
    value: 'tab'
  }, {
    label: i18n.t('prefComponents.markdown.LIST_INDENTATION_OPTIONS.SINGLE'),
    value: 1
  }, {
    label: i18n.t('prefComponents.markdown.LIST_INDENTATION_OPTIONS.TWO'),
    value: 2
  }, {
    label: i18n.t('prefComponents.markdown.LIST_INDENTATION_OPTIONS.THREE'),
    value: 3
  }, {
    label: i18n.t('prefComponents.markdown.LIST_INDENTATION_OPTIONS.FOUR'),
    value: 4
  }]
}

export const frontmatterTypeOptions = [{
  label: 'YAML',
  value: '-'
}, {
  label: 'TOML',
  value: '+'
}, {
  label: 'JSON (;;;)',
  value: ';'
}, {
  label: 'JSON ({})',
  value: '{'
}]

export function getSequenceThemeOptions () {
  return [{
    label: i18n.t('prefComponents.markdown.SEQUENCE_THEME_OPTIONS.HAND_DRAWN'),
    value: 'hand'
  }, {
    label: i18n.t('prefComponents.markdown.SEQUENCE_THEME_OPTIONS.SIMPLE'),
    value: 'simple'
  }]
}
