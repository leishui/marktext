// NOTE: This are mutable fields that may change at runtime.

import { i18n } from '../../../lang'

export const CUT = {
  label: i18n.t('contextMenu.editor.CUT'),
  id: 'cutMenuItem',
  role: 'cut'
}

export const COPY = {
  label: i18n.t('contextMenu.editor.COPY'),
  id: 'copyMenuItem',
  role: 'copy'
}

export const PASTE = {
  label: i18n.t('contextMenu.editor.PASTE'),
  id: 'pasteMenuItem',
  role: 'paste'
}

export const COPY_AS_MARKDOWN = {
  label: i18n.t('contextMenu.editor.COPY_AS_MARKDOWN'),
  id: 'copyAsMarkdownMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-copy-as-markdown')
  }
}

export const COPY_AS_HTML = {
  label: i18n.t('contextMenu.editor.COPY_AS_HTML'),
  id: 'copyAsHtmlMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-copy-as-html')
  }
}

export const PASTE_AS_PLAIN_TEXT = {
  label: i18n.t('contextMenu.editor.PASTE_AS_PLAIN_TEXT'),
  id: 'pasteAsPlainTextMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-paste-as-plain-text')
  }
}

export const INSERT_BEFORE = {
  label: i18n.t('contextMenu.editor.INSERT_BEFORE'),
  id: 'insertParagraphBeforeMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-insert-paragraph', 'before')
  }
}

export const INSERT_AFTER = {
  label: i18n.t('contextMenu.editor.INSERT_AFTER'),
  id: 'insertParagraphAfterMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-insert-paragraph', 'after')
  }
}

export const SEPARATOR = {
  type: 'separator'
}
