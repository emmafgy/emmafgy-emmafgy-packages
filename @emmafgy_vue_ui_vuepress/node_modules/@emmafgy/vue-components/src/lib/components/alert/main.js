import Vue from 'vue';
import alertVue from './alert.vue';
import EfMark from "../mark/main.js";

const AlertVueConstructor = Vue.extend(alertVue);

const EfAlert = function(option) {

  let instance = new AlertVueConstructor({
    data: option
  });
  if (option.showMark) {
    instance.markInstance = EfMark();
  }
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  return instance;

}


export default EfAlert;
