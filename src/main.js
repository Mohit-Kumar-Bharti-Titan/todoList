import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueRouter  from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
   routes : Routes,
   mode : 'history',
})

new Vue({
  render: h => h(App),
  store : store,
  router : router,
}).$mount('#app')


 
