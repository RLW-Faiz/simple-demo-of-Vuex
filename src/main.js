// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from  'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$store = store

router.beforeEach((to, from, next) => {
  if(store.state.user_info || to.path === '/login'){
    next()
  }else{
    next({
      path: '/login',
    })
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
