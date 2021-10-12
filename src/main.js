import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './assets/common.css'
import "normalize.css"
const VueInputMask = require('vue-inputmask').default



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueInputMask)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
