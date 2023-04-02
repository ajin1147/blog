// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(Theme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
