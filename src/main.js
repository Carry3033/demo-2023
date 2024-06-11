import Vue from "vue";
import App from './App.vue';
import Adaption from '../src/test/CssDemo/SelfAdaption/index.vue';

console.log(document.querySelector('#app'));

new Vue({
  render: (h) => h(Adaption),
}).$mount('#app');
