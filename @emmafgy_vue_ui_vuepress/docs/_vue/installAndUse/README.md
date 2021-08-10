## 安装
```
 npm install -S @emmafgy/vue-components
```

## 使用
1. 全部引入

```js
import Vue from "vue";
import EFUI from "@emmafgy/vue-components"; // 引入全部组件
import "@emmafgy/vue-components/lib/theme/index.css"; // 引入全部css

Vue.use(EFUI);

```

2. 按需加载
建议直接从node_modules中引入，不要使用解构的方式去引入（import {Button} from XXX），容易引入所有的包

```js
import Vue from "vue";

import Table from "@emmafgy/vue-components/lib/table"; // 引入组件
import Table from "@emmafgy/vue-components/theme/table.css"; // 引入css

const components = [
	Table
];

components.forEach(component => {
	Vue.use(component);
});

/**
所有组件名
checkbox
checkboxGroup
icon
loading
table
triangle
button
message
alert
mark
modal
menu
 */

```


