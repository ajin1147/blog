<template>
  <div class="container">
    <div class="item" v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>
<script lang="ts" setup>
const list = [1, 2, 3, 4, 5, 6, 7];
</script>
<style lang="scss" scoped>
.container {
  width: 550px;
  display: flex;
  .item {
    color: red;
  }
}
</style>