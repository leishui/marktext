<template>
  <div class="pref-markdown">
    <h4>{{ $t('prefComponents.markdown.MARKDOWN') }}</h4>
    <compound>
      <template #head>
        <h6 class="title">{{ $t('prefComponents.markdown.LIST') }}</h6>
      </template>
      <template #children>
        <bool
          :description="$t('prefComponents.markdown.PREFER_LOOSE_LIST_ITEM_DES')"
          :bool="preferLooseListItem"
          :onChange="value => onSelectChange('preferLooseListItem', value)"
          more="https://spec.commonmark.org/0.29/#loose"
        ></bool>
        <cur-select
          :description="$t('prefComponents.markdown.BULLET_LIST_MARKER_DES')"
          :value="bulletListMarker"
          :options="bulletListMarkerOptions"
          :onChange="value => onSelectChange('bulletListMarker', value)"
          more="https://spec.commonmark.org/0.29/#bullet-list-marker"
        ></cur-select>
        <cur-select
          :description="$t('prefComponents.markdown.ODER_LIST_DELIMITER_DES')"
          :value="orderListDelimiter"
          :options="orderListDelimiterOptions"
          :onChange="value => onSelectChange('orderListDelimiter', value)"
          more="https://spec.commonmark.org/0.29/#ordered-list"
        ></cur-select>
        <cur-select
          :description="$t('prefComponents.markdown.LIST_INDENTATION_DES')"
          :value="listIndentation"
          :options="listIndentationOptions"
          :onChange="value => onSelectChange('listIndentation', value)"
        ></cur-select>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{ $t('prefComponents.markdown.MARKDOWN_EXTENSIONS') }}</h6>
      </template>
      <template #children>
        <cur-select
          :description="$t('prefComponents.markdown.FRONT_MATTER_TYPE_DES')"
          :value="frontmatterType"
          :options="frontmatterTypeOptions"
          :onChange="value => onSelectChange('frontmatterType', value)"
        ></cur-select>
        <bool
          :description="$t('prefComponents.markdown.SUPER_SUB_SCRIPT_DES')"
          :bool="superSubScript"
          :onChange="value => onSelectChange('superSubScript', value)"
          more="https://pandoc.org/MANUAL.html#superscripts-and-subscripts"
        ></bool>
        <bool
          :description="$t('prefComponents.markdown.FOOTNOTE_DES')"
          :notes="$t('prefComponents.markdown.FOOTNOTE_NOTES')"
          :bool="footnote"
          :onChange="value => onSelectChange('footnote', value)"
          more="https://pandoc.org/MANUAL.html#footnotes"
        ></bool>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{ $t('prefComponents.markdown.COMPATIBILITY') }}</h6>
      </template>
      <template #children>
        <bool
          :description="$t('prefComponents.markdown.IS_HTML_ENABLED_DES')"
          :bool="isHtmlEnabled"
          :onChange="value => onSelectChange('isHtmlEnabled', value)"
        ></bool>
        <bool
          :description="$t('prefComponents.markdown.IS_GITLAB_COMPATIBILITY_ENABLED_DES')"
          :bool="isGitlabCompatibilityEnabled"
          :onChange="value => onSelectChange('isGitlabCompatibilityEnabled', value)"
        ></bool>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{ $t('prefComponents.markdown.DIAGRAMS') }}</h6>
      </template>
      <template #children>
        <cur-select
          :description="$t('prefComponents.markdown.SEQUENCE_THEME_DES')"
          :value="sequenceTheme"
          :options="sequenceThemeOptions"
          :onChange="value => onSelectChange('sequenceTheme', value)"
          more="https://bramp.github.io/js-sequence-diagrams/"
        ></cur-select>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{ $t('prefComponents.markdown.MISC') }}</h6>
      </template>
      <template #children>
        <cur-select
          :description="$t('prefComponents.markdown.PREFER_HEADING_STYLE_DES')"
          :value="preferHeadingStyle"
          :options="preferHeadingStyleOptions"
          :onChange="value => onSelectChange('preferHeadingStyle', value)"
          :disable="true"
        ></cur-select>
      </template>
    </compound>
  </div>
</template>

<script>
import Compound from '../common/compound'
import Separator from '../common/separator'
import { mapState } from 'vuex'
import Bool from '../common/bool'
import CurSelect from '../common/select'
import {
  bulletListMarkerOptions,
  orderListDelimiterOptions,
  getPreferHeadingStyleOptions,
  getListIndentationOptions,
  frontmatterTypeOptions,
  getSequenceThemeOptions
} from './config'
import { changeLanguage } from '../../../lang'
import { ipcRenderer } from 'electron'

export default {
  components: {
    Compound,
    Separator,
    Bool,
    CurSelect
  },
  data () {
    this.bulletListMarkerOptions = bulletListMarkerOptions
    this.orderListDelimiterOptions = orderListDelimiterOptions
    this.preferHeadingStyleOptions = getPreferHeadingStyleOptions()
    this.listIndentationOptions = getListIndentationOptions()
    this.frontmatterTypeOptions = frontmatterTypeOptions
    this.sequenceThemeOptions = getSequenceThemeOptions()
    return {}
  },
  computed: {
    ...mapState({
      preferLooseListItem: state => state.preferences.preferLooseListItem,
      bulletListMarker: state => state.preferences.bulletListMarker,
      orderListDelimiter: state => state.preferences.orderListDelimiter,
      preferHeadingStyle: state => state.preferences.preferHeadingStyle,
      listIndentation: state => state.preferences.listIndentation,
      frontmatterType: state => state.preferences.frontmatterType,
      superSubScript: state => state.preferences.superSubScript,
      footnote: state => state.preferences.footnote,
      isHtmlEnabled: state => state.preferences.isHtmlEnabled,
      isGitlabCompatibilityEnabled: state => state.preferences.isGitlabCompatibilityEnabled,
      sequenceTheme: state => state.preferences.sequenceTheme
    })
  },
  methods: {
    onSelectChange (type, value) {
      this.$store.dispatch('SET_SINGLE_PREFERENCE', { type, value })
    },
    onUserPreferenceChanged (e, preferences) {
      if (preferences.language) {
        changeLanguage(preferences.language)
        this.preferHeadingStyleOptions = getPreferHeadingStyleOptions()
        this.listIndentationOptions = getListIndentationOptions()
        this.sequenceThemeOptions = getSequenceThemeOptions()
      }
    }
  },
  mounted () {
    ipcRenderer.on('mt::user-preference', this.onUserPreferenceChanged)
  }
}
</script>

<style scoped>
  .pref-markdown {
  }
</style>
