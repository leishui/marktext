import * as actions from '../actions/format'
import { i18n } from '../../../lang'

export default function (keybindings) {
  return {
    id: 'formatMenuItem',
    label: i18n.t('menu.templates.format.FORMAT'),
    submenu: [{
      id: 'strongMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_BOLD'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strong'),
      click (menuItem, focusedWindow) {
        actions.strong(focusedWindow)
      }
    }, {
      id: 'emphasisMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_ITALIC'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.emphasis'),
      click (menuItem, focusedWindow) {
        actions.emphasis(focusedWindow)
      }
    }, {
      id: 'underlineMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_UNDERLINE'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.underline'),
      click (menuItem, focusedWindow) {
        actions.underline(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'superscriptMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_SUPERSCRIPT'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.superscript'),
      click (menuItem, focusedWindow) {
        actions.superscript(focusedWindow)
      }
    }, {
      id: 'subscriptMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_SUBSCRIPT'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.subscript'),
      click (menuItem, focusedWindow) {
        actions.subscript(focusedWindow)
      }
    }, {
      id: 'highlightMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_HIGHLIGHT'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.highlight'),
      click (menuItem, focusedWindow) {
        actions.highlight(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'inlineCodeMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_INLINE_CODE'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-code'),
      click (menuItem, focusedWindow) {
        actions.inlineCode(focusedWindow)
      }
    }, {
      id: 'inlineMathMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_INLINE_MATH'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-math'),
      click (menuItem, focusedWindow) {
        actions.inlineMath(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'strikeMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_STRIKETHROUGH'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strike'),
      click (menuItem, focusedWindow) {
        actions.strikethrough(focusedWindow)
      }
    }, {
      id: 'hyperlinkMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_HYPERLINK'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.hyperlink'),
      click (menuItem, focusedWindow) {
        actions.hyperlink(focusedWindow)
      }
    }, {
      id: 'imageMenuItem',
      label: i18n.t('menu.templates.format.FORMAT_IMAGE'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.image'),
      click (menuItem, focusedWindow) {
        actions.image(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.templates.format.FORMAT_CLEAR_FORMAT'),
      accelerator: keybindings.getAccelerator('format.clear-format'),
      click (menuItem, focusedWindow) {
        actions.clearFormat(focusedWindow)
      }
    }]
  }
}
