<template>
  <template v-for="(item, index) in homeLinkData" :key="index">
    <h2 :id="formatTitle(item.title)" tabindex="-1">
      {{ item.title }}
      <a class="header-anchor" :href="`#${formatTitle(item.title)}`" aria-hidden="true">#</a>
    </h2>
    <div class="r_container">
      <div class="r_content">
        <template v-for="(subItem, idx) in item.children" :key="idx">
          <a class="r_item" :href="subItem.link" target="_blank" rel="noreferrer">
            <div class="r_item_title">
              <img class="r_item_icon" v-if="subItem.icon" :src="subItem.icon">
              <div class="r_item_icon" v-else>?</div>
              <div class="r_item_text">{{ subItem.title }}</div>
              <!-- <h3 class="r_item_text" :id="formatTitle(subItem.title)">{{ subItem.title }}</h3> -->
            </div>
            <div class="r_item_desc">{{ subItem.desc }}</div>
          </a>
        </template>
      </div>
    </div>
  </template>
</template>
  

<script lang="ts" setup>
import { slugify } from '@mdit-vue/shared'
import { computed } from 'vue'

import { homeLinkData } from './homeLinkData'
const formatTitle = (title) => {
  return slugify(title)
}
</script>
<style lang="scss" scoped>
// h2 {
//   a {
//     display: none;
//   }
// }

.r_container {
  display: flex;
  justify-content: center;

  .r_content {
    --m-nav-gap: 10px;
    width: 100%;
    display: grid;
    grid-row-gap: var(--m-nav-gap);
    grid-column-gap: var(--m-nav-gap);
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));

    @media (min-width: 500px) {
      --m-nav-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }

    @media (min-width: 635px) {
      --m-nav-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    }

    @media (min-width: 960px) {
      --m-nav-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }


    .r_item {
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: 12px;
      border-radius: 12px;
      background-color: var(--vp-c-bg-soft);
      transition: all .3s;
      border: 1px solid transparent;

      &:hover {
        background-color: white;
        border-color: #999;
        box-shadow: 0 0 10px #e0e0e0;
        text-decoration: none !important;
      }

      .r_item_title {
        font-size: 15px;
        line-height: 1.3;
        font-weight: bolder;
        display: flex;
        align-items: center;
        color: var(--vp-c-text-1);
        .r_item_icon {
          box-sizing: border-box;
          width: 36px;
          height: 36px;
          line-height: 28px;
          text-align: center;
          padding: 4px;
          background-color: #cecece;
          border-radius: 4px;
          margin-right: 8px;
        }
        .r_item_text {
          flex-grow: 1;
          display: box;
          box-orient: vertical;
          line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .r_item_desc {
        height: 36px;
        line-height: 1.3;
        font-size: 13px;
        color: #999;
        margin-top: 8px;
        display: box;
        box-orient: vertical;
        line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>