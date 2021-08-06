import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Table,
  Divider,
  Icon,
  Tag,
  Modal
} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Table);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Modal);

// import "@/assets/iconfont/iconfont.css";
// import MyInput from "./lib/components/my-input/main.js";
// import MyInput from "../dist-lib/@emmafgy-vue.js";

import "./custom-theme.scss";
import efComponent from "@/lib/index.js";
// import "@/theme/src/index.scss";



// import efComponent from "../lib/@emmafgy-vue.js";
// import "../lib/theme/index.css";

Vue.use(efComponent);

// import efTable from "@/lib/components/table/main.js";
// Vue.use(efTable);

// import efIcon from "@/lib/components/icon/main.js";
// Vue.use(efIcon);

// import efLoading from "@/lib/components/loading/main.js";
// Vue.use(efLoading);

// import efCheckbox from "@/lib/components/checkbox/main.js";
// Vue.use(efCheckbox);

// import efCheckboxGroup from "@/lib/components/checkboxGroup/main.js";
// Vue.use(efCheckboxGroup);

// import efTriangle from "@/lib/components/triangle/main.js";
// Vue.use(efTriangle);



// Vue.component("v-nodes", {
//   functional: true,
//   render: (h, ctx) => ctx.props.vnodes
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
