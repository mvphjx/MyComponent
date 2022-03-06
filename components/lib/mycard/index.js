import MyCard from './src/main.vue'

// eslint-disable-next-line func-names
MyCard.install = function(Vue) {
  Vue.component(MyCard.name, MyCard)
}

export default MyCard
