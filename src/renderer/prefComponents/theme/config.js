import { i18n } from '../../../lang'

export const themes = [
  {
    name: 'light'
  },
  {
    name: 'dark'
  },
  {
    name: 'graphite'
  },
  {
    name: 'material-dark'
  },
  {
    name: 'ulysses'
  },
  {
    name: 'one-dark'
  }
]

export function getAutoSwitchThemeOptions () {
  return [{
    label: i18n.t('prefComponents.theme.AUTO_SWITCH_THEME_OPTIONS.ADJUST_THEME_AT_STARTUP'), // Always
    value: 0
  }, /* {
  label: 'Only at runtime',
  value: 1
}, */ {
    label: i18n.t('prefComponents.theme.AUTO_SWITCH_THEME_OPTIONS.NEVER'),
    value: 2
  }]
}
