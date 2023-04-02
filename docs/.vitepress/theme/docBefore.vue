<script lang="ts" setup>
import { useData } from 'vitepress'
//这里的frontmatter就是各个md文件中自己写在最上面的东西
const { frontmatter } = useData()
</script>

<template>
  <span class="page-info">✍️{{ frontmatter.author }}</span>
  <span class="page-info">🕐{{ frontmatter.date }}</span>
  <span>
    🔗
    <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
  </span>
</template>

<style>
  .page-info{
    font-size: 13px;
    color: #7f7f7f;
    margin-right: 10px;
  }
</style>