// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//移动端click延迟300ms的问题
import fastClick from "fastclick"

//引入reset.css
import "./assets/styles/reset.css"

//1像素问题
import "./assets/styles/border.css"


Vue.config.productionTip = false;

fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
