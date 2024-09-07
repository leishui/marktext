import GeneralIcon from '@/assets/icons/pref_general.svg'
import EditorIcon from '@/assets/icons/pref_editor.svg'
import MarkdownIcon from '@/assets/icons/pref_markdown.svg'
import ThemeIcon from '@/assets/icons/pref_theme.svg'
import ImageIcon from '@/assets/icons/pref_image.svg'
import SpellIcon from '@/assets/icons/pref_spellcheck.svg'
import KeyBindingIcon from '@/assets/icons/pref_key_binding.svg'

import preferences from '../../../main/preferences/schema'
import { i18n } from '../../../lang'

export function getCategory () {
  return [{
    name: i18n.t('prefComponents.sideBar.GENERAL'),
    label: 'general',
    icon: GeneralIcon,
    path: '/preference/general'
  }, {
    name: i18n.t('prefComponents.sideBar.EDITOR'),
    label: 'editor',
    icon: EditorIcon,
    path: '/preference/editor'
  }, {
    name: i18n.t('prefComponents.sideBar.MARKDOWN'),
    label: 'markdown',
    icon: MarkdownIcon,
    path: '/preference/markdown'
  }, {
    name: i18n.t('prefComponents.sideBar.SPELLING'),
    label: 'spelling',
    icon: SpellIcon,
    path: '/preference/spelling'
  }, {
    name: i18n.t('prefComponents.sideBar.THEME'),
    label: 'theme',
    icon: ThemeIcon,
    path: '/preference/theme'
  }, {
    name: i18n.t('prefComponents.sideBar.IMAGE'),
    label: 'image',
    icon: ImageIcon,
    path: '/preference/image'
  }, {
    name: i18n.t('prefComponents.sideBar.KEY_BINDING'),
    label: 'keybindings',
    icon: KeyBindingIcon,
    path: '/preference/keybindings'
  }]
}

export const searchContent = Object.keys(preferences).map(k => {
  const { description, enum: emums } = preferences[k]
  let [category, preference] = description.split('--')
  if (Array.isArray(emums)) {
    preference += ` optional values: ${emums.join(', ')}`
  }
  return {
    category,
    preference
  }
})
  .filter(({ category: ca }) => getCategory().some(c => c.label === ca.toLowerCase()))
