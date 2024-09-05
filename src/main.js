import Vue from "vue";
import App from './App.vue';

console.log(document.querySelector('#app'));

new Vue({
    render: (h) => h(App),
}).$mount('#app');
