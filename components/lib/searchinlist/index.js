import SearchInList from 'luckysheet-vue/src/components/searchinlist'
//import SearchInList from './src/main.vue'
// eslint-disable-next-line func-names
SearchInList.install = function(Vue) {
  Vue.component(SearchInList.name, SearchInList)
}

export default SearchInList
