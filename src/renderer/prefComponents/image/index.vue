<template>
  <div class="pref-image">
    <h4>{{ $t('prefComponents.image.IMAGE') }}</h4>
    <section class="image-ctrl">
      <div>{{ $t('prefComponents.image.IMAGE_INSERT_ACTION') }}
        <el-tooltip class='item' effect='dark'
          :content="$t('prefComponents.image.IMAGE_INSERT_ACTION_TOOLTIP')"
          placement='top-start'>
          <i class="el-icon-info"></i>
        </el-tooltip>
      </div>
      <CurSelect :value="imageInsertAction" :options="imageActions"
        :onChange="value => onSelectChange('imageInsertAction', value)"></CurSelect>
    </section>
    <Separator />
    <FolderSetting v-if="imageInsertAction === 'folder' || imageInsertAction === 'path'" />
    <Uploader v-if="imageInsertAction === 'upload'" />
  </div>
</template>

<script>
import Separator from '../common/separator'
import Uploader from './components/uploader'
import CurSelect from '@/prefComponents/common/select'
import FolderSetting from './components/folderSetting'
import { getImageActions } from './config'
import { changeLanguage } from '../../../lang'
import { ipcRenderer } from 'electron'

export default {
  components: {
    Separator,
    CurSelect,
    FolderSetting,
    Uploader
  },
  data () {
    this.imageActions = getImageActions()

    return {}
  },
  computed: {
    imageInsertAction: {
      get: function () {
        return this.$store.state.preferences.imageInsertAction
      }
    }
  },
  methods: {
    onSelectChange (type, value) {
      this.$store.dispatch('SET_SINGLE_PREFERENCE', { type, value })
    },
    onUserPreferenceChanged (e, preferences) {
      if (preferences.language) {
        changeLanguage(preferences.language)
        this.imageActions = getImageActions()
      }
    }
  },
  mounted () {
    ipcRenderer.on('mt::user-preference', this.onUserPreferenceChanged)
  }
}
</script>

<style>
.pref-image {
  & .image-ctrl {
    font-size: 14px;
    margin: 20px 0;
    color: var(--editorColor);
    & label {
      display: block;
      margin: 20px 0;
    }
  }
}
</style>
