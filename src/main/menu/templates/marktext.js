import { app } from 'electron'
import { showAboutDialog } from '../actions/help'
import * as actions from '../actions/marktext'
import { i18n } from '../../../lang'

// macOS only menu.

export default function (keybindings) {
  return {
    label: 'MarkText',
    submenu: [{
      label: i18n.t('menu.templates.marktext.MARKTEXT_ABOUT'),
      click (menuItem, focusedWindow) {
        showAboutDialog(focusedWindow)
      }
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_CHECK_FOR_UPDATES'),
      click (menuItem, focusedWindow) {
        actions.checkUpdates(focusedWindow)
      }
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_PREFERENCES'),
      accelerator: keybindings.getAccelerator('file.preferences'),
      click () {
        actions.userSetting()
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_SERVICES'),
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_HIDE'),
      accelerator: keybindings.getAccelerator('mt.hide'),
      click () {
        actions.osxHide()
      }
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_HIDE_OTHERS'),
      accelerator: keybindings.getAccelerator('mt.hide-others'),
      click () {
        actions.osxHideAll()
      }
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_SHOW_ALL'),
      click () {
        actions.osxShowAll()
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.marktext.MARKTEXT_QUIT'),
      accelerator: keybindings.getAccelerator('file.quit'),
      click: app.quit
    }]
  }
}
