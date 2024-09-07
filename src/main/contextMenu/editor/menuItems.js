import { i18n } from '../../../lang'

// build context menu every time to refresh its language
export function buildMenuItems () {
  return {
    CUT: {
      label: i18n.t('contextMenu.editor.CUT'),
      id: 'cutMenuItem',
      role: 'cut'
    },
    COPY: {
      label: i18n.t('contextMenu.editor.COPY'),
      id: 'copyMenuItem',
      role: 'copy'
    },
    PASTE: {
      label: i18n.t('contextMenu.editor.PASTE'),
      id: 'pasteMenuItem',
      role: 'paste'
    },
    COPY_AS_MARKDOWN: {
      label: i18n.t('contextMenu.editor.COPY_AS_MARKDOWN'),
      id: 'copyAsMarkdownMenuItem',
      click (menuItem, targetWindow) {
        targetWindow.webContents.send('mt::cm-copy-as-markdown')
      }
    },
    COPY_AS_HTML: {
      label: i18n.t('contextMenu.editor.COPY_AS_HTML'),
      id: 'copyAsHtmlMenuItem',
      click (menuItem, targetWindow) {
        targetWindow.webContents.send('mt::cm-copy-as-html')
      }
    },
    PASTE_AS_PLAIN_TEXT: {
      label: i18n.t('contextMenu.editor.PASTE_AS_PLAIN_TEXT'),
      id: 'pasteAsPlainTextMenuItem',
      click (menuItem, targetWindow) {
        targetWindow.webContents.send('mt::cm-paste-as-plain-text')
      }
    },
    INSERT_BEFORE: {
      label: i18n.t('contextMenu.editor.INSERT_BEFORE'),
      id: 'insertParagraphBeforeMenuItem',
      click (menuItem, targetWindow) {
        targetWindow.webContents.send('mt::cm-insert-paragraph', 'before')
      }
    },
    INSERT_AFTER: {
      label: i18n.t('contextMenu.editor.INSERT_AFTER'),
      id: 'insertParagraphAfterMenuItem',
      click (menuItem, targetWindow) {
        targetWindow.webContents.send('mt::cm-insert-paragraph', 'after')
      }
    },
    SEPARATOR: {
      type: 'separator'
    }
  }
}

export const SEPARATOR = {
  type: 'separator'
}
