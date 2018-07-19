// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端click延迟300ms的问题
import fastClick from "fastclick"

//引入vue-awesome-swiper轮播图
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"


//引入iconfont.css图标库
import "styles/iconfont.css" /*-----------这里能用styles路径的原因是在webpack.base,conf.js设置了alias（30line）----------*/

//引入reset.css
import "styles/reset.css"

//1像素问题
import "styles/border.css"


Vue.config.productionTip = false;

fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
