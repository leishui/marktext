/**
 * zh_CN.js 中文语言包
 */

export default {
  label: '简体中文',
  contextMenu: {
    editor: {
      CUT: '剪切',
      COPY: '复制',
      PASTE: '粘贴',
      COPY_AS_MARKDOWN: '以 Markdown 格式复制',
      COPY_AS_HTML: '以 Html 格式复制',
      PASTE_AS_PLAIN_TEXT: '粘贴为纯文本',
      INSERT_BEFORE: '在段落之上插入',
      INSERT_AFTER: '在段落之下插入'
    }
  },
  menu: {
    templates: {
      dock: {
        OPEN: 'Open...'
      },
      edit: {
        EDIT: '编辑(&E)',
        EDIT_UNDO: '撤销',
        EDIT_REDO: '重做',
        EDIT_CUT: '剪切',
        EDIT_COPY: '复制',
        EDIT_PASTE: '粘贴',
        EDIT_COPY_AS_MARKDOWN: '以 Markdown 格式复制',
        EDIT_COPY_AS_HTML: '以 Html 格式复制',
        EDIT_PASTE_AS_PLAINTEXT: '粘贴为纯文本',
        EDIT_SELECT_ALL: '全选',
        EDIT_DUPLICATE: '重复',
        EDIT_CREATE_PARAGRAPH: '创建段落',
        EDIT_DELETE_PARAGRAPH: '删除段落',
        EDIT_FIND: '查找',
        EDIT_FIND_NEXT: '查找下一个',
        EDIT_FIND_PREVIOUS: '查找上一个',
        EDIT_REPLACE: '替换',
        EDIT_FIND_IN_FOLDER: '在文件夹中查找',
        EDIT_SCREENSHOT: '截图',
        EDIT_LINE_ENCODING: '行结束符',
        EDIT_LINE_ENCODING_CRLF: '回车符加换行符 (CRLF)',
        EDIT_LINE_ENCODING_LF: '换行符 (LF)'
      },
      file: {
        FILE: '文件(&F)',
        FILE_NEW_TAB: '新建标签页',
        FILE_NEW_WINDOW: '新建窗口',
        FILE_OPEN_FILE: '打开文件...',
        FILE_OPEN_FOLDER: '打开文件夹...',
        FILE_OPEN_RECENT: '最近使用的文件',
        FILE_CLEAR_RECENTLY_USED: '清空最近使用文件列表',
        FILE_SAVE: '保存',
        FILE_SAVE_AS: '另存为',
        FILE_AUTO_SAVE: '自动保存',
        FILE_MOVE_TO: '移动到...',
        FILE_RENAME: '重命名',
        FILE_IMPORT: '导入',
        FILE_EXPORT: '导出',
        FILE_PRINT: '打印',
        FILE_PREFERENCES: '偏好设置',
        FILE_CLOSE_TAB: '关闭标签页',
        FILE_CLOSE_WINDOW: '关闭窗口',
        FILE_QUIT: '退出'
      },
      format: {
        FORMAT: '格式(&F)',
        FORMAT_BOLD: '加粗',
        FORMAT_ITALIC: '斜体',
        FORMAT_UNDERLINE: '下划线',
        FORMAT_SUPERSCRIPT: '上标',
        FORMAT_SUBSCRIPT: '下标',
        FORMAT_HIGHLIGHT: '高亮',
        FORMAT_INLINE_CODE: '行内代码',
        FORMAT_INLINE_MATH: '行内公式',
        FORMAT_STRIKETHROUGH: '删除线',
        FORMAT_HYPERLINK: '超链接',
        FORMAT_IMAGE: '图片',
        FORMAT_CLEAR_FORMAT: '清除格式'
      },
      help: {
        HELP: '帮助(&H)',
        HELP_QUICK_START: '快速上手',
        HELP_MARKDOWN_REFERENCE: 'Markdown 参考',
        HELP_CHANGE_LOG: '版本更新记录',
        HELP_DONATE_VIA_OPEN_COLLECTIVE: '通过 Open Collective 捐赠',
        HELP_FEEDBACK_VIA_TWITTER: '通过 Twitter 反馈',
        HELP_REPORT_ISSUE_OR_REQUEST_FEATURE: '报告问题、申请新功能',
        HELP_WEBSITE: '官网',
        HELP_WATCH_ON_GITHUB: '在 GitHub 上关注 Mark Text...',
        HELP_FOLLOW_US_ON_GITHUB: '在 GitHub 上关注我们...',
        HELP_FOLLOW_US_ON_TWITTER: '在 Twitter 上关注我们...',
        HELP_LICENSE: '许可协议',
        HELP_CHECK_FOR_UPDATES: '检查更新',
        HELP_ABOUT: '关于 MarkText...'
      },
      marktext: {
        MARKTEXT_ABOUT: '关于 MarkText',
        MARKTEXT_CHECK_FOR_UPDATES: '检查更新',
        MARKTEXT_PREFERENCES: '偏好设置',
        MARKTEXT_SERVICES: '服务',
        MARKTEXT_HIDE: '隐藏 MarkText',
        MARKTEXT_HIDE_OTHERS: '隐藏其他窗口',
        MARKTEXT_SHOW_ALL: '展示所有窗口',
        MARKTEXT_QUIT: '退出 MarkText'
      },
      paragraph: {
        PARAGRAPH: '段落(&P)',
        PARAGRAPH_HEADING_1: '一级标题',
        PARAGRAPH_HEADING_2: '二级标题',
        PARAGRAPH_HEADING_3: '三级标题',
        PARAGRAPH_HEADING_4: '四级标题',
        PARAGRAPH_HEADING_5: '五级标题',
        PARAGRAPH_HEADING_6: '六级标题',
        PARAGRAPH_PROMOTE_HEADING: '提升标题级别',
        PARAGRAPH_DEMOTE_HEADING: '降低标题级别',
        PARAGRAPH_TABLE: '表格',
        PARAGRAPH_CODE_FENCE: '代码块',
        PARAGRAPH_QUOTE_BLOCK: '引用',
        PARAGRAPH_MATH_BLOCK: '数学公式',
        PARAGRAPH_HTML_BLOCK: 'Html 块',
        PARAGRAPH_ORDERED_LIST: '有序列表',
        PARAGRAPH_BULLET_LIST: '无序列表',
        PARAGRAPH_TASK_LIST: '待办列表',
        PARAGRAPH_LOOSE_LIST_ITEM: '松散列表项',
        PARAGRAPH_PARAGRAPH: '段落',
        PARAGRAPH_HORIZONTAL_RULE: '水平分割线',
        PARAGRAPH_FRONT_MATTER: '前言'
      },
      theme: {
        THEME: '主题(&T)'
      },
      view: {
        VIEW: '视图(&V)',
        VIEW_COMMAND_PALETTE: '命令面板',
        VIEW_SOURCE_CODE_MODE: '源代码模式',
        VIEW_TYPEWRITER_MODE: '打字机模式',
        VIEW_FOCUS_MODE: '专注模式',
        VIEW_SHOW_SIDEBAR: '显示侧边栏',
        VIEW_SHOW_TAB_BAR: '显示选项卡栏',
        VIEW_TOGGLE_TABLE_OF_CONTENT: '显示大纲',
        VIEW_RELOAD_IMAGES: '重新加载图片',
        VIEW_SHOW_DEVELOPER_TOOLS: '打开开发者工具',
        VIEW_RELOAD_WINDOW: '重新加载窗口'
      },
      window: {
        WINDOW: '窗口(&W)',
        WINDOW_MINIMIZE: '最小化',
        WINDOW_ALWAYS_ON_TOP: '窗口置顶',
        WINDOW_ZOOM_IN: '放大',
        WINDOW_ZOOM_OUT: '缩小',
        WINDOW_SHOW_IN_FULL_SCREEN: '全屏模式',
        WINDOW_BRING_ALL_TO_FRONT: '显示所有窗口'
      }
    }
  },
  prefComponents: {
    sideBar: {
      PREFERENCES: '偏好设置',
      SEARCH_PREFERENCES: '搜索设置',
      GENERAL: '通用设置',
      EDITOR: '编辑器',
      MARKDOWN: 'Markdown',
      SPELLING: '拼写检查',
      THEME: '主题',
      IMAGE: '图片',
      KEY_BINDING: '快捷键'
    },
    general: {
      GENERAL: '通用设置',
      AUTO_SAVE: '自动保存:',
      AUTO_SAVE_DES: '自动保存延迟',
      AUTO_SAVE_DELAY_DES: '文档改变后多久触发自动保存',
      WINDOW: '窗口:',
      TITLE_BAR_STYLE_DES: '标题栏风格',
      TITLE_BAR_STYLE_OPTIONS: {
        CUSTOM: '自定义的',
        NATIVE: '原生的'
      },
      TITLE_BAR_STYLE_NOTES: '需要重启生效.',
      HIDE_SCROLL_BAR_DES: '隐藏滚动条',
      OPEN_FILES_IN_NEW_WINDOW_DES: '在新的窗口打开文件',
      OPEN_FOLDERS_IN_NEW_WINDOW_DES: '在新的窗口打开文件夹',
      ZOOM_DES: '缩放',
      SIDE_BAR: '边栏',
      WORD_WRAP_IN_TOC_DES: '在目录中自动换行',
      FILE_SORT_BY_DES: '文件排序依据',
      FILE_SORT_BY_OPTIONS: {
        CREATE_TIME: '创建时间',
        MODIFICATION_TIME: '修改时间',
        TITLE: '文件名'
      },
      START_UP_ACTION: '启动时操作:',
      OPEN_DEFAULT_DIR: '打开默认目录',
      SELECT_FOLDER: '选择文件夹',
      OPEN_A_BLANK_PAGE: '打开空页面',
      MISC: '杂项:',
      USER_INTERFACE_LANGUAGE_DES: '界面语言'
    },
    editor: {
      EDITOR: '编辑器',
      EDITOR_SETTINGS: '文本编辑器设置:',
      EDITOR_FONT_SIZE_DES: '文本编辑器字体大小',
      EDITOR_LINE_HEIGHT_DES: '文本编辑器行高',
      EDITOR_FONT_FAMILY_DES: '文本编辑器字体',
      EDITOR_LINE_WIDTH_DES: '文本编辑器最大宽度',
      EDITOR_LINE_WIDTH_NOTES: '主题默认值为空，否则使用带单位后缀的数字，其中字符为\'ch\'，像素为\'px\'，百分比为\'%\'.',
      CODE_BLOCK_SETTINGS: '代码块设置:',
      CODE_FONT_SIZE_DES: '代码块字体大小',
      CODE_FONT_FAMILY_DES: '代码块字体',
      CODE_BLOCK_LINE_NUMBERS_DES: '显示行号',
      CODE_TRIM_UNNECESSARY_CODE_BLOCK_EMPTY_LINES_DES: '移除头尾空行',
      WRITING_BEHAVIOR: '编写偏好:',
      AUTO_PAIR_BRACKET_DES: '编写时自动关闭括号',
      AUTO_PAIR_MARKDOWN_SYNTAX_DES: '编写时自动补全 markdown 语法',
      AUTO_PAIR_QUOTE_DES: '编写时自动关闭引号',
      FILE_REPRESENTATION: '文件内容呈现:',
      TAB_SIZE_DES: '首选标签页宽度',
      END_OF_LINE_DES: '行结束符类型',
      END_OF_LINE_OPTIONS: {
        DEFAULT: '默认',
        CRLF: '回车符加换行符 (CRLF)',
        LF: '换行符 (LF)'
      },
      DEFAULT_ENCODING_DES: '默认编码',
      AUTO_GUESS_ENCODING_DES: '自动判断文件编码',
      TRIM_TRAILING_NEW_LINE_DES: '处理尾部换行符',
      TRIM_TRAILING_NEW_LINE_OPTIONS: {
        TRIM_ALL_TRAILING: '删除所有尾部换行',
        ENSURE_EXACTLY_ONE_TRAILING: '确保正好有一个尾部换行',
        PRESERVE_STYLE_OF_ORIGINAL_DOCUMENT: '保留原始文档的换行风格',
        DO_NOTHING: '不做任何处理'
      },
      MISC: '杂项:',
      TEXT_DIRECTION_OPTIONS_DES: '文字方向',
      TEXT_DIRECTION_OPTIONS: {
        LTR: '从左到右',
        RTL: '从右到左'
      },
      HIDE_QUICK_INSERT_HINT_DES: '隐藏新增段落时选择类型的提示',
      HIDE_LINK_POPUP_DES: '隐藏鼠标置于链接上时的弹窗',
      AUTO_CHECK_DES: '是否自动检查任何相关任务'
    },
    markdown: {
      MARKDOWN: 'Markdown',
      LIST: '列表:',
      PREFER_LOOSE_LIST_ITEM_DES: '使用松散的列表项',
      BULLET_LIST_MARKER_DES: '无序列表标识符号偏好',
      ODER_LIST_DELIMITER_DES: '顺序列表标识符号偏好',
      LIST_INDENTATION_DES: '列表缩进偏好',
      LIST_INDENTATION_OPTIONS: {
        DFM: 'DocFX 样式',
        TAB: '真实的制表符',
        SINGLE: '单个空格字符',
        TWO: '两个空格字符',
        THREE: '三个空格字符',
        FOUR: '四个空格字符'
      },
      MARKDOWN_EXTENSIONS: 'Markdown 扩展:',
      FRONT_MATTER_TYPE_DES: '前言的格式',
      SUPER_SUB_SCRIPT_DES: '启用Pandoc风格的上标和下标',
      FOOTNOTE_DES: '启用Pandoc风格的脚注',
      FOOTNOTE_NOTES: '需要重启生效.',
      COMPATIBILITY: '兼容性:',
      IS_HTML_ENABLED_DES: '启用 HTML 渲染',
      IS_GITLAB_COMPATIBILITY_ENABLED_DES: '启用 GitLab 的兼容模式',
      DIAGRAMS: '图表:',
      SEQUENCE_THEME_DES: '时序图主题',
      SEQUENCE_THEME_OPTIONS: {
        HAND_DRAWN: '手绘',
        SIMPLE: '简单'
      },
      MISC: '杂项:',
      PREFER_HEADING_STYLE_DES: '标题样式偏好',
      PREFER_HEADING_STYLE_OPTIONS: {
        ATX: 'ATX 标题',
        SETEXT: 'Setext 标题'
      }
    },
    spellchecker: {
      SPELLING: '拼写检查',
      SPELL_CHECKER_ENABLED_DES: '启用拼写检查',
      SPELL_CHECKER_NO_UNDERLINE_DES: '隐藏拼写错误的标识',
      AUTO_DETECT_DOCUMENT_LANGUAGE_DES: '自动识别文档语言',
      SPELL_CHECKER_LANGUAGE_DES: '拼写检查的默认语言',
      SPELL_CHECKER_DES: '键入时将自动检测使用的语言。可以通过系统设置中的“语言和地区”添加其他语言。',
      CUSTOM_DICTIONARY: '自定义词典:',
      CUSTOM_DICTIONARY_DES: '编辑自定义词典中的词.',
      NO_WORDS_AVAILABLE: '无有效自定义词'
    },
    theme: {
      THEME: '主题',
      AUTO_SWITCH_THEME_DES: '跟随系统设置自动调整主题',
      AUTO_SWITCH_THEME_OPTIONS: {
        ADJUST_THEME_AT_STARTUP: '软件启动时自动调整',
        NEVER: '从不'
      },
      OPEN_THEME_FOLDER: '打开主题文件夹',
      OPEN_FOLDER: '打开文件夹',
      IMPORT_CUSTOM_THEME: '导入自定义主题',
      IMPORT_THEME: '导入主题'
    },
    image: {
      IMAGE: '图片',
      IMAGE_INSERT_ACTION: '从本地文件夹或剪贴板插入图像后的默认操作',
      IMAGE_ACTIONS: {
        UPLOAD: '使用选定的上传工具将图片上传至云端（需在下方配置）',
        FOLDER: '将图片复制到指定的相对资源文件夹或全局本地文件夹',
        PATH: '保留原始位置'
      },
      IMAGE_INSERT_ACTION_TOOLTIP: '剪贴板处理仅在 macOS 和 Windows 上完全支持.',
      IMAGE_FOLD_PATH: '图片存放的绝对路径或相对路径',
      IMAGE_FOLD_PATH_DES: '图片存放的绝对路径',
      OPEN: '打开...',
      SHOW_IN_FOLDER: '打开该文件夹',
      IMAGE_PREFER_RELATIVE_DIRECTORY_DES: '期望存放图片到相对路径',
      RELATIVE_DIRECTORY_NAME_PLACE_HOLDER_DES: '相对路径文件夹名',
      FOOTNOTE_HEAD: '在上面输入框中使用',
      FOOTNOTE_TAIL: '来插入对应的文件名.'
    },
    keybindings: {
      KEY_BINDINGS: '快捷键',
      KEY_BINDINGS_DES: '自定义MarkText快捷键，然后单击下面的保存按钮以应用所有更改(需要重新启动). 可以在此找到所有可用和默认的快捷键绑定:',
      KEYBINDING_LIST_DESCRIPTION: '描述',
      KEYBINDING_LIST_KEY_COMBINATION: '组合键',
      KEYBINDING_LIST_OPTIONS: '选项',
      KEYBINDING_LIST_EDIT: '编辑',
      KEYBINDING_LIST_RESET: '重置',
      KEYBINDING_LIST_UNBIND: '解绑',
      SAVE: '保存',
      RESTORE_DEFAULT_KEY_BINDING: '恢复默认',
      DEBUG_OPTIONS: '调试选项:',
      DUMP_KEYBOARD_INFORMATION: '导出快捷键信息'
    }
  },
  components: {
    titleBar: {
      WORDS: '单词数:',
      CHARACTERS: '字数:',
      PARAGRAPHS: '段落数:',
      SHORT_W: '词',
      SHORT_C: '字',
      SHORT_P: '段',
      SHORT_A: '符'
    },
    recent: {
      NEW_FILE: '新建文件'
    },
    sideBar: {
      tree: {
        OPENED_FILES: '已打开的文件',
        SAVE_ALL: '保存所有',
        CLOSE_ALL: '关闭所有',
        CREATE_FILE: '创建文件',
        OPEN_FOLDER: '打开文件夹'
      }
    }
  },
  muya: {
    ui: {
      frontMenu: {
        DUPLICATE: '重复',
        TURN_INTO: '转换为',
        NEW_PARAGRAPH: '新建段落',
        DELETE: '删除'
      },
      quickInsert: {
        'basic block': '基础',
        PARAGRAPH: '段落',
        PARAGRAPH_SUB: 'Lorem Ipsum is simply dummy text',
        HORIZONTAL_LINE: '水平分割线',
        HORIZONTAL_LINE_SUB: '---',
        FRONT_MATTER: '前言',
        FRONT_MATTER_SUB: '--- Lorem Ipsum ---',
        header: '标题',
        HEADER_1: '一级标题',
        HEADER_1_SUB: '# Lorem Ipsum is simply ...',
        HEADER_2: '二级标题',
        HEADER_2_SUB: '## Lorem Ipsum is simply ...',
        HEADER_3: '三级标题',
        HEADER_3_SUB: '### Lorem Ipsum is simply ...',
        HEADER_4: '四级标题',
        HEADER_4_SUB: '#### Lorem Ipsum is simply ...',
        HEADER_5: '五级标题',
        HEADER_5_SUB: '##### Lorem Ipsum is simply ...',
        HEADER_6: '六级标题',
        HEADER_6_SUB: '###### Lorem Ipsum is simply ...',
        'advanced block': '高级块',
        TABLE_BLOCK: '表格',
        TABLE_BLOCK_SUB: '|Lorem | Ipsum is simply |',
        DISPLAY_MATH: '数学公式',
        DISPLAY_MATH_SUB: '$$ Lorem Ipsum is simply $$',
        HTML_BLOCK: 'HTML 块',
        HTML_BLOCK_SUB: '<div> Lorem Ipsum is simply </div>',
        CODE_BLOCK: '代码块',
        CODE_BLOCK_SUB: '```java Lorem Ipsum is simply ```',
        QUOTE_BLOCK: '引用',
        QUOTE_BLOCK_SUB: '>Lorem Ipsum is simply ...',
        'list block': '列表',
        ODER_LIST: '顺序列表',
        ODER_LIST_SUB: '1. Lorem Ipsum is simply ...',
        BULLET_LIST: '无序列表',
        BULLET_LIST_SUB: '- Lorem Ipsum is simply ...',
        TODO_LIST: '待办列表',
        TODO_LIST_SUB: '- [x] Lorem Ipsum is simply ...',
        diagram: '图表',
        VEGA_CHART: 'Vega 流程图',
        VEGA_CHART_SUB: '使用vega-lite.js渲染的流程图.',
        FLOW_CHART: 'Flowchart 流程图',
        FLOW_CHART_SUB: '使用flowchart.js渲染的流程图.',
        SEQUENCE_DIAGRAM: 'js-sequence 时序图',
        SEQUENCE_DIAGRAM_SUB: '使用 js-sequence 渲染的时序图.',
        PLANT_UML_DIAGRAM: 'PlantUML 图表',
        PLANT_UML_DIAGRAM_SUB: '使用 PlantUML 渲染的图表.',
        MERMAID: 'Mermaid 图表',
        MERMAID_SUB: '使用 mermaid 渲染的图表.'
      }
    },
    hints: {
      editor: {
        TYPE_AT_TO_INSERT: '输入 @ 来插入内容'
      }
    }
  }
}
