//配置文件
//配置侧边栏、路由、样式
module.exports = {
    title: 'My-UI',
    description: 'Just playing around',
    base: "/myui/",
    //添加了一个luckysheet依赖的外部js库，不支持模块化。。。
    head: [['script', {src: 'https://cdn.jsdelivr.net/npm/luckysheet/dist/plugins/js/plugin.js'}]],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Github', link: 'https://github.com/mvphjx/MyComponent'},
            {text: 'VuePress', link: 'https://vuepress.vuejs.org/'},
        ],
        sidebar: ['/', '/componentDocs/mycard', '/componentDocs/mytitle', '/componentDocs/searchinlist']
    }
}
