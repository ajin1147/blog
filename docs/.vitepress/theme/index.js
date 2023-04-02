// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import './style.css'
import xxx from './docBefore.vue'

export default {
  ...Theme,
  Layout: () => {
    const props = {}
    const { frontmatter } = useData()
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(Theme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 使用插槽
      // 'doc-before': () => h((xxx))
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
