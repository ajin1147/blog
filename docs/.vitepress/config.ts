import { defineConfig } from 'vitepress'

import sidebar from './sidebar'
import nav from './nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Rain Blog",
  lang: "zh-CN",
  description: "record something",

  markdown: {
    lineNumbers: true
  },

  lastUpdated: true,
  // cleanUrls: true,

  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录'
    },

    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },

    nav,
    sidebar,

    // 开启algolia配置
    algolia: {
      appId: "B715XDB1V3",
      apiKey: "74d305297789057b971587298ba20e31",
      indexName: "rain_blog",
      placeholder: '请输入关键词'
    },
    

    footer: {
      message: 'be someone',
      copyright: 'Copyright © 2023 - ∞'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ajin1147' }
    ]
  }
})
