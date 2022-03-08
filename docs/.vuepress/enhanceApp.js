/*
应用级别的配置
你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等
 */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MyUi from "../../components/lib";
import '../../components/css/index.scss';
export default ({
     Vue, // VuePress 正在使用的 Vue 构造函数
     options, // 附加到根实例的一些选项
     router, // 当前应用的路由实例
     siteData, // 站点元数据
     isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    console.log(siteData)
    console.log("将组件库的组件，注册到VUE实例中：Vue.use(MyUi)")
    Vue.use(MyUi);
    Vue.use(Element)
    //全局异常处理
    Vue.config.errorHandler = function (error, vm) {
        console.warn('VUE 抛出全局异常', error);
        vm.$notify({
            title: '警告',
            message: error,
            type: 'warning'
        });
    };
}
