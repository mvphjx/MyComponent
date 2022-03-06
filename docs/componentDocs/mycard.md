# MyCard


## 快速上手

###  基本介绍

* 简单的课程卡片组件


### 创建组件
```html
<template>
  <MyCard
    imgSrc="java.png"
    summary="剑指Java面试-Offer直通车  百度资深面试官授课" 
  />
</template>
```
#### Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| width  | 卡片宽度 | Number |  false  | - |
| imgSrc  | 图片资源地址 | String | true | - |
| imgHeight  | 图片高度 | String | false | - |
| summary  | 卡片概述 | String/Slot | false | - |
| footer  | 卡片底部 | Slot | false | - |
### Demo
<MyCardDemo/>


## API

### 无
* 参数：无
* 说明：

      -
* 示例：

      -

## 依赖说明

* VUE2
