import Vue from 'vue';
import markVue from './mark.vue';

const MarkVueConstructor = Vue.extend(markVue);

const EfMark = function(){

  let instance = new MarkVueConstructor();
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  return instance;

}


export default EfMark;
