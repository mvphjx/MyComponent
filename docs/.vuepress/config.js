//配置文件
//配置侧边栏、路由、样式
module.exports = {
  title: 'My-UI',
  description: 'Just playing around',
  base: "/myui/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/mvphjx/MyComponent' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
    ],
    sidebar: ['/', '/componentDocs/mycard', '/componentDocs/mytitle', '/componentDocs/searchinlist']
  }
}
