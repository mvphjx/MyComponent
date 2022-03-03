import MyTitle from './src/main.vue'

// eslint-disable-next-line func-names
MyTitle.install = function(Vue) {
  Vue.component(MyTitle.name, Demo)
}

export default MyTitle
