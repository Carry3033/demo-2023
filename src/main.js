import Vue from "vue";
import App from './App.vue';

// 打印的是：<div id="app">原神启动！！！</div>
// $mount('#app')是覆盖掉该div
// console.log(document.querySelector('#app'));

new Vue({
    render: (h) => h(App),
}).$mount('#app');
