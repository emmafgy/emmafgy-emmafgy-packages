// import "@/assets/iconfont/iconfont.css";

import EfTable from "./components/table/main.js";
import EfIcon from "./components/icon/main.js";
import EfLoading from "./components/loading/main.js";
import EfCheckbox from "./components/checkbox/main.js";
import EfCheckboxGroup from "./components/checkboxGroup/main.js";
import EfTriangle from "./components/triangle/main.js";
import EfButton from "./components/button/main.js";
import EfMessage from "./components/message/main.js";
import EfAlert from "./components/alert/main.js";
import EfMark from "./components/mark/main.js";
import EfModal from "./components/modal/main.js";
import EfMenu from "./components/menu/main.js";
import * as Util from "./components/util/index.js";

const componentsArray = [
  EfTable,
  EfIcon,
  EfLoading,
  EfCheckbox,
  EfCheckboxGroup,
  EfTriangle,
  EfButton,
  EfModal,
  EfMenu
];

// script标签直接引入的情况
if (typeof window !== 'undefined' && window.Vue) {
  componentsArray.forEach(component => {
    Vue.use(component)
  })
}

export default {
  install(Vue, option) {
    componentsArray.forEach(component => {
      Vue.use(component)
    })

    Vue.prototype.$message = EfMessage;
    Vue.prototype.$alert = EfAlert;
    Vue.prototype.$mark = EfMark;
    Vue.prototype.$efUtil = Util;

  },
  EfTable,
  EfIcon,
  EfLoading,
  EfCheckbox,
  EfCheckboxGroup,
  EfTriangle,
  EfButton,
  EfModal,
  EfMenu
}
