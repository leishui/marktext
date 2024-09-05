import { Menu } from 'electron'
import { minimizeWindow, toggleAlwaysOnTop, toggleFullScreen } from '../actions/window'
import { zoomIn, zoomOut } from '../../windows/utils'
import { isOsx } from '../../config'
import { i18n } from '../../../lang'

export default function (keybindings) {
  const menu = {
    label: i18n.t('menu.templates.window.WINDOW'),
    role: 'window',
    submenu: [{
      label: i18n.t('menu.templates.window.WINDOW_MINIMIZE'),
      accelerator: keybindings.getAccelerator('window.minimize'),
      click (menuItem, browserWindow) {
        minimizeWindow(browserWindow)
      }
    }, {
      id: 'alwaysOnTopMenuItem',
      label: i18n.t('menu.templates.window.WINDOW_ALWAYS_ON_TOP'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('window.toggle-always-on-top'),
      click (menuItem, browserWindow) {
        toggleAlwaysOnTop(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.window.WINDOW_ZOOM_IN'),
      accelerator: keybindings.getAccelerator('window.zoom-in'),
      click (menuItem, browserWindow) {
        zoomIn(browserWindow)
      }
    }, {
      label: i18n.t('menu.templates.window.WINDOW_ZOOM_OUT'),
      accelerator: keybindings.getAccelerator('window.zoom-out'),
      click (menuItem, browserWindow) {
        zoomOut(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.window.WINDOW_SHOW_IN_FULL_SCREEN'),
      accelerator: keybindings.getAccelerator('window.toggle-full-screen'),
      click (item, browserWindow) {
        if (browserWindow) {
          toggleFullScreen(browserWindow)
        }
      }
    }]
  }

  if (isOsx) {
    menu.submenu.push({
      label: i18n.t('menu.templates.window.WINDOW_BRING_ALL_TO_FRONT'),
      click () {
        Menu.sendActionToFirstResponder('arrangeInFront:')
      }
    })
  }
  return menu
}
