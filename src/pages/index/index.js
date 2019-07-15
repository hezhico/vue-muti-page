// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局变量 多页之间的跳转
if (location.hostname === 'localhost') {
  Vue.prototype.HTTPLOCAT = ''
} else {
  const http = window.location.protocol + '//' + location.hostname 
  Vue.prototype.HTTPLOCAT = http + '/dist' // http + '/dist/test.html'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
