import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BlackB from './components/BlackButton.vue'
import ModifyB from './components/ModifyButton.vue'
import GrayB from './components/GrayButton.vue'
import Plusb from './components/PlusButton.vue'
import BackB from './components/BackButton'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('BlackB',BlackB)
Vue.component('ModifyB',ModifyB)
Vue.component('GrayB',GrayB)
Vue.component('Plusb',Plusb)
Vue.component('BackB',BackB)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
