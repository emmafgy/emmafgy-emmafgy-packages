# vue-simple-component
## 组件开发说明
1. 新增组件需要在components.json 添加（按需加载打包单个组件）
2. 新增组件需要在/src/lib/index 添加（打包所有组件）

## 使用
``` bash
# install dependencies
npm install -S @emmafgy/vue-components

# 全部加载
npm install -S @emmafgy/vue-components
mport ef from "@emmafgy/vue-components";
import "@emmafgy/vue-components/lib/theme/index.css";
Vue.use(ef);

# 按需加载

1. 安装babel插件 : npm install -D babel-plugin-component @babel/preset-env
2. 项目根目录 新增 .babelrc 文件 ，内容如下

{
  "presets": [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@emmafgy/vue-components",
        "styleLibraryName": "theme"
      }
    ]
  ]
}

3. 使用
import {
	Table
} from  "@emmafgy/vue-components";
 Vue.use(Table)


```
