# MyComponent
业务组件库，主要功能：

1. 组件库源码，包含多个业务组件
2. 使用手册、开发手册
3. 示例与Demo
4. 组件库构建、发布：npm发布、git发布


## Project Structure 项目结构
    webpack
        |__components  业务组件库
            |__css  组件样式
            |__lib  组件JS源码
        |__dist  编译目录
        |__doc  vue-press文档
        |__public  静态资源
        |___package.json 依赖管理
        |___vue.config.js 开发和构建的常用配置
        |___gulpfile.js 使用gulp构建css
        |___webpack.component.js 构建js
        |___.eslintignore eslint检查工具忽略文件配置
        |___.eslintrc.js eslint检查工具配置
        |___.gitignore  git版本控制忽略管理的文件配置
        

## 业务组件库


#### MyCard 简单卡片
#### MyTitle 简单标题

## 构建&发布

### run

1. npm install
2. docs:dev
3. 访问url，查看用户手册、开发手册、示例

### 发布模式

后编译模式

    携带*.vue、*.scss文件发布，使用者需要直接引用，然后通过脚手架编译后使用。
    

预编译模式

    提前构建dist目录，并且提供各种版本的文件

### git发布

使用者可以通过webpack依赖，进行使用。

可以通过以下方式格式化用于npm软件包的Git URL：

    git://github.com/user/project.git#commit-ish
    
    git+ssh://user@hostname:project.git#commit-ish
    
    git+http://user@hostname/project/blah.git#commit-ish
    
    git+https://user@hostname/project/blah.git#commit-ish

代码示例

    "dependencies": {
        "my-components": "git+ssh://git@github.com:mvphjx/MyComponent.git"
    }


### npm模式

发布到npm。通过版本号引用，install后使用。



## Vue Press
使用手册&开发手册

    |__doc  vue-press文档
        |__.vuepress  vue-press文档
            |__components  组件
            |__config.js  vue-press通用配合
            |__enhanceApp.js  vue-press项目扩展
            |__public  静态资源
        |__conponentDocs  md格式文档

