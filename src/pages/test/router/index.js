import Vue from 'vue'
import Router from 'vue-router'

const  mine = () => import('@/modules/mine');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
