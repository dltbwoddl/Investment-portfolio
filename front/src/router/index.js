import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import risky from '../views/risky.vue'
import riskymodify from '../views/riskymodify.vue'
import riskyeventname from '../views/riskyeventname.vue'
import riskymodifyeventname from '../views/riskymodifyeventname.vue'
import riskyeventnamecategoryname from '../views/riskyeventnamecategoryname.vue'
import safe from '../views/safe.vue'
import safemodify from '../views/safemodify.vue'
import safeeventname from '../views/safeeventname.vue'
import habitmodify from '../views/habitmodify.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    beforeEnter: (to, from, next) => {

      next()
    }
  },
  {
    path: '/risky',
    name: 'risky',
    component: risky,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/riskymodify',
    name: 'riskymodify',
    component: riskymodify,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/risky/:eventname',
    name: 'riskyeventname',
    component: riskyeventname,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/riskymodify/:eventname',
    name: 'riskymodifyeventname',
    component: riskymodifyeventname,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/risky/:eventname/:categoryname',
    name: 'riskyeventnamecategoryname',
    component: riskyeventnamecategoryname,
    beforeEnter: (to, from, next) => {

      next()
    }
  },
  {
    path: '/safe',
    name: 'safe',
    component: safe,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/safemodify',
    name: 'safemodify',
    component: safemodify,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/safe/:eventname',
    name: 'safeeventname',
    component: safeeventname,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/habitmodify',
    name: 'habitmodify',
    component: habitmodify,
    beforeEnter: (to, from, next) => {
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
