
/**
 * 因为menu组件使用的自身递归，所有需要一个全局变量管理 menu组件及其自身递归的组件，确保currentKey唯一
 */

let currentKeyObj = {
  key:"",
  cloneMenuList:[]
};

export default currentKeyObj;
