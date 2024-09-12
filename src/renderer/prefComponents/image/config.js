import { i18n } from '../../../lang'

export function getImageActions () {
  return [{
    label: i18n.t('prefComponents.image.IMAGE_ACTIONS.UPLOAD'),
    value: 'upload'
  }, {
    label: i18n.t('prefComponents.image.IMAGE_ACTIONS.FOLDER'),
    value: 'folder'
  }, {
    label: i18n.t('prefComponents.image.IMAGE_ACTIONS.PATH'),
    value: 'path'
  }]
}
