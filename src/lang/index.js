import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

let langOptions = {}// 可选主题
const files = require.context('../lang', false, /\.js$/)// 第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件，第三个参数表示引入的文件匹配的正则表达式。
files.keys().forEach((key) => {
  if (key === './index.js') return
  let optionKey = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.js'))// 截取文件名称
  // let langConf = import('../lang/' + optionKey + '.js')
  langOptions[optionKey] = files(key).default
})

console.log(langOptions)
export const i18n = new VueI18n({
  locale: 'zh_CN', // 设置地区
  fallbackLocale: 'en_US',
  messages: langOptions // 设置地区信息
})
