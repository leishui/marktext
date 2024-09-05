import path from 'path'
import { shell } from 'electron'
import { isFile } from 'common/filesystem'
import * as actions from '../actions/help'
import { checkUpdates } from '../actions/marktext'
import { i18n } from '../../../lang'

/// Check whether the package is updatable at runtime.
const isUpdatable = () => {
  // TODO: If not updatable, allow to check whether there is a new version available.

  const resFile = isFile(path.join(process.resourcesPath, 'app-update.yml'))
  if (!resFile) {
    // No update resource file available.
    return false
  } else if (process.env.APPIMAGE) {
    // We are running as AppImage.
    return true
  } else if (process.platform === 'win32' && isFile(path.join(process.resourcesPath, 'md.ico'))) {
    // Windows is a little but tricky. The update resource file is always available and
    // there is no way to check the target type at runtime (electron-builder#4119).
    // As workaround we check whether "md.ico" exists that is only included in the setup.
    return true
  }

  // Otherwise assume that we cannot perform an auto update (standalone binary, archives,
  // packed for package manager).
  return false
}

export default function () {
  const helpMenu = {
    label: i18n.t('menu.templates.help.HELP'),
    role: 'help',
    submenu: [{
      label: i18n.t('menu.templates.help.HELP_QUICK_START'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/README.md')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_MARKDOWN_REFERENCE'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/MARKDOWN_SYNTAX.md')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_CHANGE_LOG'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/.github/CHANGELOG.md')
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.help.HELP_DONATE_VIA_OPEN_COLLECTIVE'),
      click (item, win) {
        shell.openExternal('https://opencollective.com/marktext')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_FEEDBACK_VIA_TWITTER'),
      click (item, win) {
        actions.showTweetDialog(win, 'twitter')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_REPORT_ISSUE_OR_REQUEST_FEATURE'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext/issues')
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.help.HELP_WEBSITE'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_WATCH_ON_GITHUB'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_FOLLOW_US_ON_GITHUB'),
      click () {
        shell.openExternal('https://github.com/Jocs')
      }
    }, {
      label: i18n.t('menu.templates.help.HELP_FOLLOW_US_ON_TWITTER'),
      click () {
        shell.openExternal('https://twitter.com/marktextapp')
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.help.HELP_LICENSE'),
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/LICENSE')
      }
    }]
  }

  if (isUpdatable()) {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.help.HELP_CHECK_FOR_UPDATES'),
      click (menuItem, browserWindow) {
        checkUpdates(browserWindow)
      }
    })
  }

  if (process.platform !== 'darwin') {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.help.HELP_ABOUT'),
      click (menuItem, browserWindow) {
        actions.showAboutDialog(browserWindow)
      }
    })
  }
  return helpMenu
}
