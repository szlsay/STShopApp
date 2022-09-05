import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      activeNum: 0
    },
    children: [
      {
        path: '/home/searchPopup',
        name: 'SearchPopup',
        component: () =>
          import(
            /* webpackChunkName: "SearchPopup" */ '../views/SearchPopup.vue'
          )
      }
    ]
  },
  {
    path: '/topic',
    name: 'Topic',
    meta: {
      activeNum: 1
    },
    component: () =>
      import(/* webpackChunkName: "Topic" */ '../views/Topic.vue')
  },
  {
    path: '/category',
    name: 'Category',
    meta: {
      activeNum: 2
    },
    component: () =>
      import(/* webpackChunkName: "Category" */ '../views/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      activeNum: 3
    },
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      activeNum: 4
    },
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由拦截， （前置）路由守卫
router.beforeEach((to, from, next) => {
  // 要去往的路由对象
  console.log('to', to)
  // 从哪里出发的路由对象
  // console.log("from",from);

  const token = localStorage.getItem('token')
  if (to.path === '/cart') {
    // 表示去往购物车页面
    // 判断有没有登录，判断token是否存在
    if (token) {
      next()
    } else {
      // 表示没有登录
      Vue.prototype.$toast('请先登录')
      setTimeout(() => {
        next('/user') // 跳转到user路由
      }, 1000)
    }
    return
  }

  next() // 可以顺利通过要去的路由， 如果不写next()， 就不能访问到对应的路由
})

export default router
