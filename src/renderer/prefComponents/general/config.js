import { i18n } from '../../../lang'

export function getTitleBarStyleOptions () {
  return [{
    label: i18n.t('prefComponents.general.TITLE_BAR_STYLE_OPTIONS.CUSTOM'),
    value: 'custom'
  }, {
    label: i18n.t('prefComponents.general.TITLE_BAR_STYLE_OPTIONS.NATIVE'),
    value: 'native'
  }]
}

export const zoomOptions = [{
  label: '50.0%',
  value: 0.5
}, {
  label: '62.5%',
  value: 0.625
}, {
  label: '75.0%',
  value: 0.75
}, {
  label: '87.5%',
  value: 0.875
}, {
  label: '100.0%',
  value: 1.0
}, {
  label: '112.5%',
  value: 1.125
}, {
  label: '125.0%',
  value: 1.25
}, {
  label: '137.5%',
  value: 1.375
}, {
  label: '150.0%',
  value: 1.5
}, {
  label: '162.5%',
  value: 1.625
}, {
  label: '175.0%',
  value: 1.75
}, {
  label: '187.5%',
  value: 1.875
}, {
  label: '200.0%',
  value: 2.0
}]

export function getFileSortByOptions () {
  return [{
    label: i18n.t('prefComponents.general.FILE_SORT_BY_OPTIONS.CREATE_TIME'),
    value: 'created'
  }, {
    label: i18n.t('prefComponents.general.FILE_SORT_BY_OPTIONS.MODIFICATION_TIME'),
    value: 'modified'
  }, {
    label: i18n.t('prefComponents.general.FILE_SORT_BY_OPTIONS.TITLE'),
    value: 'title'
  }]
}
