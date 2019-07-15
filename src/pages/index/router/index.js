import Vue from 'vue'
import Router from 'vue-router'

const  login = () => import('@/modules/login');



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
