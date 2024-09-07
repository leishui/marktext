import paragraphIcon from '../../assets/pngicon/paragraph/2.png'
import htmlIcon from '../../assets/pngicon/html/2.png'
import hrIcon from '../../assets/pngicon/horizontal_line/2.png'
import frontMatterIcon from '../../assets/pngicon/front_matter/2.png'
import header1Icon from '../../assets/pngicon/heading_1/2.png'
import header2Icon from '../../assets/pngicon/heading_2/2.png'
import header3Icon from '../../assets/pngicon/heading_3/2.png'
import header4Icon from '../../assets/pngicon/heading_4/2.png'
import header5Icon from '../../assets/pngicon/heading_5/2.png'
import header6Icon from '../../assets/pngicon/heading_6/2.png'
import newTableIcon from '../../assets/pngicon/new_table/2.png'
import bulletListIcon from '../../assets/pngicon/bullet_list/2.png'
import codeIcon from '../../assets/pngicon/code/2.png'
import quoteIcon from '../../assets/pngicon/quote_block/2.png'
import todoListIcon from '../../assets/pngicon/todolist/2.png'
import mathblockIcon from '../../assets/pngicon/math/2.png'
import orderListIcon from '../../assets/pngicon/order_list/2.png'
import flowchartIcon from '../../assets/pngicon/flowchart/2.png'
import sequenceIcon from '../../assets/pngicon/sequence/2.png'
import plantumlIcon from '../../assets/pngicon/plantuml/2.png'
import mermaidIcon from '../../assets/pngicon/mermaid/2.png'
import vegaIcon from '../../assets/pngicon/chart/2.png'
import { isOsx } from '../../config'
import { i18n } from '../../../../lang'

const COMMAND_KEY = isOsx ? '⌘' : 'Ctrl'
const OPTION_KEY = isOsx ? '⌥' : 'Alt'
const SHIFT_KEY = isOsx ? '⇧' : 'Shift'

// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn

export function getQuickInsertObj () {
  return {
    'basic block': [{
      title: i18n.t('muya.ui.quickInsert.PARAGRAPH'),
      subTitle: i18n.t('muya.ui.quickInsert.PARAGRAPH_SUB'),
      label: 'paragraph',
      shortCut: `${COMMAND_KEY}+0`,
      icon: paragraphIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.HORIZONTAL_LINE'),
      subTitle: i18n.t('muya.ui.quickInsert.HORIZONTAL_LINE_SUB'),
      label: 'hr',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+-`,
      icon: hrIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.FRONT_MATTER'),
      subTitle: i18n.t('muya.ui.quickInsert.FRONT_MATTER_SUB'),
      label: 'front-matter',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Y`,
      icon: frontMatterIcon
    }],
    header: [{
      title: i18n.t('muya.ui.quickInsert.HEADER_1'),
      subTitle: i18n.t('muya.ui.quickInsert.HEADER_1_SUB'),
      label: 'heading 1',
      shortCut: `${COMMAND_KEY}+1`,
      icon: header1Icon
    }, {
      title: i18n.t('muya.ui.quickInsert.HEADER_2'),
      subTitle: i18n.t('muya.ui.quickInsert.HEADER_2_SUB'),
      label: 'heading 2',
      shortCut: `${COMMAND_KEY}+2`,
      icon: header2Icon
    }, {
      title: i18n.t('muya.ui.quickInsert.HEADER_3'),
      subTitle: i18n.t('muya.ui.quickInsert.HEADER_3_SUB'),
      label: 'heading 3',
      shortCut: `${COMMAND_KEY}+3`,
      icon: header3Icon
    }, {
      title: i18n.t('muya.ui.quickInsert.HEADER_4'),
      subTitle: i18n.t('muya.ui.quickInsert.HEADER_4_SUB'),
      label: 'heading 4',
      shortCut: `${COMMAND_KEY}+4`,
      icon: header4Icon
    }, {
      title: i18n.t('muya.ui.quickInsert.HEADER_5'),
      subTitle: i18n.t('muya.ui.quickInsert.HEADER_5_SUB'),
      label: 'heading 5',
      shortCut: `${COMMAND_KEY}+5`,
      icon: header5Icon
    }, {
      title: i18n.t('muya.ui.quickInsert.HEADER_6'),
      subTitle: i18n.t('muya.ui.quickInsert.HEADER_6_SUB'),
      label: 'heading 6',
      shortCut: `${COMMAND_KEY}+6`,
      icon: header6Icon
    }],
    'advanced block': [{
      title: i18n.t('muya.ui.quickInsert.TABLE_BLOCK'),
      subTitle: i18n.t('muya.ui.quickInsert.TABLE_BLOCK_SUB'),
      label: 'table',
      shortCut: `${SHIFT_KEY}+${COMMAND_KEY}+T`,
      icon: newTableIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.DISPLAY_MATH'),
      subTitle: i18n.t('muya.ui.quickInsert.DISPLAY_MATH_SUB'),
      label: 'mathblock',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+M`,
      icon: mathblockIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.HTML_BLOCK'),
      subTitle: i18n.t('muya.ui.quickInsert.HTML_BLOCK_SUB'),
      label: 'html',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+J`,
      icon: htmlIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.CODE_BLOCK'),
      subTitle: i18n.t('muya.ui.quickInsert.CODE_BLOCK_SUB'),
      label: 'pre',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+C`,
      icon: codeIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.QUOTE_BLOCK'),
      subTitle: i18n.t('muya.ui.quickInsert.QUOTE_BLOCK_SUB'),
      label: 'blockquote',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Q`,
      icon: quoteIcon
    }],
    'list block': [{
      title: i18n.t('muya.ui.quickInsert.ODER_LIST'),
      subTitle: i18n.t('muya.ui.quickInsert.ODER_LIST_SUB'),
      label: 'ol-order',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+O`,
      icon: orderListIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.BULLET_LIST'),
      subTitle: i18n.t('muya.ui.quickInsert.BULLET_LIST_SUB'),
      label: 'ul-bullet',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+U`,
      icon: bulletListIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.TODO_LIST'),
      subTitle: i18n.t('muya.ui.quickInsert.TODO_LIST_SUB'),
      label: 'ul-task',
      shortCut: `${OPTION_KEY}+${COMMAND_KEY}+X`,
      icon: todoListIcon
    }],
    diagram: [{
      title: i18n.t('muya.ui.quickInsert.VEGA_CHART'),
      subTitle: i18n.t('muya.ui.quickInsert.VEGA_CHART_SUB'),
      label: 'vega-lite',
      icon: vegaIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.FLOW_CHART'),
      subTitle: i18n.t('muya.ui.quickInsert.FLOW_CHART_SUB'),
      label: 'flowchart',
      icon: flowchartIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.SEQUENCE_DIAGRAM'),
      subTitle: i18n.t('muya.ui.quickInsert.SEQUENCE_DIAGRAM_SUB'),
      label: 'sequence',
      icon: sequenceIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.PLANT_UML_DIAGRAM'),
      subTitle: i18n.t('muya.ui.quickInsert.PLANT_UML_DIAGRAM_SUB'),
      label: 'plantuml',
      icon: plantumlIcon
    }, {
      title: i18n.t('muya.ui.quickInsert.MERMAID'),
      subTitle: i18n.t('muya.ui.quickInsert.MERMAID_SUB'),
      label: 'mermaid',
      icon: mermaidIcon
    }]
  }
}
