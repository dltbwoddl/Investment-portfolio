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
import store from '../store/index.js'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    beforeEnter: (to, from, next) => {
      store.dispatch('HabitListAction')
      store.dispatch('RiskyEventLIstAction')
      next()
    }
  },
  {
    path: '/risky',
    name: 'risky',
    component: risky,
    beforeEnter: (to, from, next) => {
      store.dispatch('RiskyListAction')
      next()
    }
  },
  {
    path: '/riskymodify',
    name: 'riskymodify',
    component: riskymodify,
    beforeEnter: (to, from, next) => {
      store.dispatch('RiskyListAction')
      next()
    }
  },
  {
    path: '/risky/:eventname',
    name: 'riskyeventname',
    component: riskyeventname,
    beforeEnter: (to, from, next) => {
      var eventname = window.location.pathname.split('/')[2];
      store.dispatch('RiskyEventLIstAction',eventname)
      next()
    }
  },
  {
    path: '/riskymodify/:eventname',
    name: 'riskymodifyeventname',
    component: riskymodifyeventname,
    beforeEnter: (to, from, next) => {
      var eventname = window.location.pathname.split('/')[2];
      store.dispatch('RiskyEventLIstAction',eventname)
      next()
    }
  },
  {
    path: '/risky/:eventname/:categoryname',
    name: 'riskyeventnamecategoryname',
    component: riskyeventnamecategoryname,
    beforeEnter: (to, from, next) => {
      var eventname = window.location.pathname.split('/')[2];
      var categoryname = window.location.pathname.split('/')[3];
      store.dispatch('RiskyEventDetailAction',eventname,categoryname)

      next()
    }
  },
  {
    path: '/safe',
    name: 'safe',
    component: safe,
    beforeEnter: (to, from, next) => {
      store.dispatch('SafeListAction')
      next()
    }
  },
  {
    path: '/safemodify',
    name: 'safemodify',
    component: safemodify,
    beforeEnter: (to, from, next) => {
      store.dispatch('SafeListAction')
      next()
    }
  },
  {
    path: '/safe/:eventname',
    name: 'safeeventname',
    component: safeeventname,
    beforeEnter: (to, from, next) => {
      var eventname = window.location.pathname.split('/')[2]
      store.dispatch('SafeEventDetailMutation',eventname)
      next()
    }
  },
  {
    path: '/habitmodify',
    name: 'habitmodify',
    component: habitmodify,
    beforeEnter: (to, from, next) => {
      store.dispatch('HabitListAction');
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
