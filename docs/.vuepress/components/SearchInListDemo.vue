<template>
  <div>
    <div class="demo-show">
      <SearchInList tableName="TP_CARD_VIEW" ref="searchInList"></SearchInList>
    </div>
    <a @click="getWhereParam">获取检索条件</a>
  </div>
</template>
<script>
//该目录中的 Vue 组件将会被自动注册为全局组件
export default {
  name: 'SearchInListDemo',
  methods: {
    getWhereParam() {
      var param = this.$refs.searchInList.getWhereParam();
      alert(param);
    }
  }
}
</script>

<style>
.demo-show{
  border: #62a47c 1px dashed;
}
a {
  cursor: pointer;
}

/*调整与vuepress冲突的样式*/
.luckysheet-grid-window table{
  margin:unset;
}
.luckysheet-grid-window th{
  padding:unset;
}
.luckysheet-grid-window td{
  padding:unset;
}
</style>
