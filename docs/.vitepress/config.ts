import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rain Blog",
  description: "record something",
  markdown: {
    // https://vitepress.dev/reference/markdown
    lineNumbers: true
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdatedText: "上次更新时间",
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    // 开启algolia配置
    algolia: {
      appId: "B715XDB1V3",
      apiKey: "74d305297789057b971587298ba20e31",
      indexName: "rain_blog",
      placeholder: '请输入关键词'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "框架",
        items: [
          {
            text: '前端',
            items: [
              { text: 'flutter', link: '/frontend/flutter/' }
            ]
          },
          {
            text: '后端',
            items: [
              { text: 'node', link: '/frontend/flutter/' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ajin1147' }
    ]
  }
})
