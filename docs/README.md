# 组件库介绍

> 在 main.js 中引入组件库

```javascript
// 引入全部组件
import 'my-ui/dist/css/index.css'
import MyUI from "my-ui";
Vue.use(MyUI);

// 按需引入组件
import 'my-ui/dist/css/demo.css'
import { Demo } from "my-ui";
Vue.use(Demo);
```

Copyright (c) 2022-present zack
