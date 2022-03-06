<template>
  <div class="SearchinList">
    <SearchInList tableName="TP_CARD_VIEW"></SearchInList>
  </div>
</template>
<script>
//该目录中的 Vue 组件将会被自动注册为全局组件
export default {
  name: 'searchinlist-demo',
  created() {
    if (typeof this.$ssrContext !== 'undefined') {
      this.$ssrContext.userHeadTags += `<link rel='canonical' href='${this.$page.path}'/>`;
    }
  }
}
</script>

<style>

</style>
