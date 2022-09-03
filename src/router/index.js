import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/searchPopup',
        name: 'SearchPopup',
        component: () => import(/* webpackChunkName: "SearchPopup" */ '../views/SearchPopup.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
