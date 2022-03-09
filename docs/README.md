# 组件库介绍

> 在 main.js 中引入组件库

```javascript
// 引入全部组件
import 'my-components/dist/css/index.css'
import MyComponents from "my-components";
Vue.use(MyComponents);

// 按需引入组件,例如只需要卡片组件
import 'my-components/dist/css/demo.css'
import { MyCard } from "my-components";
Vue.use(Card);
```

Copyright (c) 2022-present 
