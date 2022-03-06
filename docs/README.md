# 组件库介绍

> 在 main.js 中引入组件库

```javascript
// 引入全部组件
import 'my-ui/dist/css/index.css'
import MyUI from "my-ui";
Vue.use(MyUI);

// 按需引入组件,例如只需要卡片组件
import 'my-ui/dist/css/demo.css'
import { MyCard } from "my-ui";
Vue.use(Card);
```

Copyright (c) 2022-present 
