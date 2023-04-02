---
# https://vitepress.dev/reference/default-theme-home-page
layout: docs
layoutClass: r-home-layout
# hero:
#   name: "rainly"
#   text: "record something"
#   tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
  import home from './.vitepress/components/home.vue'
</script>
<style src="./index.scss"></style>
<home />