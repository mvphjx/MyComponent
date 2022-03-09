# Exception
前端异常监控

## 基本介绍

###  为什么要进行异常处理？

很多异常是不可控的，比如资源加载异常，ajax请求异常等，会影响最终的呈现效果，做好异常处理，有大致以下几点好处：

1. 增强用户体验；
2. 快速定位问题原因，及时发现问题。特别是移动端，机型、系统等不一样，有了异常处理并上报，定位快；
3. 完善前端监控系统方案。


### 需要处理哪些异常？

* JS语法错误、代码异常
* ajax请求异常
* 静态资源加载异常
* promise异常
* iframe异常
* 跨域 script error
* 崩溃和卡顿

## 异常处理的方式

### try-catch
try-catch只能捕获到同步运行时错误，无法捕获语法错误和异步错误。

### window.onerror
当JS运行发生错误时，window会触发一个errorEvent接口的error事件并执行window.onerror()。

window.onerror比try-catch强一些，在try-catch的基础上，它可以捕获异步错误。
```javascript
/**
* @param {String} message 错误信息
* @param {String} resource 出错文件
* @param {Number} line 行号
* @param {Number} col 列号
* @param {Object} error 错误详细信息error对象
* */
  window.onerror = function(message,resource,line,col,error) {
  console.log('捕获到错误信息');
  console.log({message,resource,row,col,error});
  return true;
  }
```

注意：

1. window.onerror也是不能捕获语法错误的；

2. window.onerror也不能捕获网络请求异常情况，如静态资源异常、接口异常等都是不行的；

3. 特别注意的是，window.onerror函数在返回true的时候，异常才不会向上抛出，否则，控制台还是会显示Uncaught Error: xxxxx
### window.addEventListener


window.onerror函数不能捕获静态资源加载失败的异常情况，当资源（图片或脚本）加载失败，加载资源的元素会触发一个Event接口的error事件，并执行该元素上的onerror()处理函数，这些error事件不会向上冒泡到window上，但是可以被window.addEventListener捕获。

```html
<script type="text/javascript">
window.addEventListener('error',function(error){
    console.log('捕获到异常错误了');
    console.log(error);
},true)
</script>
<img src="./images/error.jpg"/>
```
### unhandledrejection

在很多时候我们使用Promise的时候忘记了写catch,那么可以在全局增加一个unhandledrejection的监听，用来全局监听UnCaught Promise Error，使用方式如下：
```javascript
window.addEventListener("unhandledrejection", function(e){
  e.preventDefault(); // 去掉控制台的异常显示
  console.log('捕获到异常：', e);
  return true;
});
Promise.reject('promise error');
```

### VUE errorHandler
如果在组件渲染时出现运行错误，错误将会被传递至全局 Vue.config.errorHandler 配置函数 (如果已设置)。利用这个钩子函数来配合错误跟踪服务是个不错的主意。比如 Sentry，它为 Vue 提供了官方集成。
```javascript
 //全局异常处理
    Vue.config.errorHandler = function (error, vm) {
        console.warn('VUE 抛出全局异常', error);
        vm.$notify({
            title: '警告',
            message: error,
            type: 'warning'
        });
    };
```
### iframe异常
iframe的异常捕获需要借助window.onerror:
```javascript
<iframe src="./a.html" frameborder="0"></iframe>
<script type="text/javascript">
/**
 * @param {String} message 错误信息
 * @param {String} resource 出错文件
 * @param {Number} row 行号
 * @param {Number} col 列号
 * @param {Object} error 错误详细信息error对象
 * */
window.frames[0].onerror = function(message,resource,row,col,error) {
    console.log('捕获到错误信息');
    console.log({message,resource,row,col,error});
    return true;
}
</script>
```
### Script error
出现Script error的情况，基本上是跨域问题。
例如我们的工程中的静态资源使用CDN，我们引入的CDN方式可能是有不同的域名，如果没有进行额外的配置，就会出现Script error。

加上crossOrigin后，可以在window.onerror中获取更详细的日志信息

解决思路：跨源资源共享机制（CORS）,为 script 标签添加 crossOrigin 属性:
```javascript
<script src="http://localhost:8081/index.js" crossorigin></script>
```

或者动态去添加 js 脚本：
```javascript
const script = document.createElement('script');
script.crossOrigin = 'anonymous';
script.src = url;
document.body.appendChild(script);
```


### 崩溃和卡顿
卡顿也就是网页暂时响应比较慢， JS 可能无法及时执行。但是网页崩溃可以利用 window 对象的 load 和 beforeunload 事件实现了网页崩溃的监控。
```javascript
window.addEventListener('load', function () {
sessionStorage.setItem('good_exit', 'pending');
setInterval(function () {
sessionStorage.setItem('time_before_crash', new Date().toString());
}, 1000);
});

window.addEventListener('beforeunload', function () {
sessionStorage.setItem('good_exit', 'true');
});

if(sessionStorage.getItem('good_exit') &&
sessionStorage.getItem('good_exit') !== 'true') {
/*
insert crash logging code here
*/
alert('Hey, welcome back from your crash, looks like you crashed on: ' + sessionStorage.getItem('time_before_crash'));
}
```
## 错误上报
通过 Ajax 发送数据 因为 Ajax 请求本身也有可能会发生异常，而且有可能会引发跨域问题，一般情况下更推荐使用动态创建 img 标签的形式进行上报。

动态创建 img 标签的形式：
```javascript
function report(error) {
  let reportUrl = 'http://jartto.wang/report';
  new Image().src = `${reportUrl}?logs=${error}`;
}
```
收集异常信息量太多，怎么办？实际中，我们不得不考虑这样一种情况：如果你的网站访问量很大，那么一个必然的错误发送的信息就有很多条，这时候，我们需要设置采集率，从而减缓服务器的压力：
```javascript
Reporter.send = function(data) {
  // 只采集 30%
  if(Math.random() < 0.3) {
    send(data)      // 上报错误信息
  }
}
```
采集率应该通过实际情况来设定，随机数，或者某些用户特征都是不错的选择。

也可以通过Sentry来实现前端的异常监控及上报。

## 参考资料

https://www.cnblogs.com/moqiutao/p/14746734.html

https://segmentfault.com/a/1190000039188092

https://segmentfault.com/a/1190000039188095

https://juejin.cn/post/6844903641619365902

https://www.cnblogs.com/momo798/p/12053587.html
