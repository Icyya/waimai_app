import Vue from 'vue'
import VueRouter from 'vue-router'
import Mhome from '../views/Mhome/Mhome.vue'
import Order from '../views/Order/Order.vue'
import Person from '../views/Person/Person.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Mhome',
    component: Mhome,
    meta: { //控制底部导航是否显示
      showFooter: true
    }
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: { //控制底部导航是否显示
      showFooter: true
    }
  }, {
    path: '/person',
    name: 'Person',
    component: Person,
    meta: { //控制底部导航是否显示
      showFooter: true
    }
  }, {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: { //控制底部导航是否显示
      showFooter: true
    },
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router