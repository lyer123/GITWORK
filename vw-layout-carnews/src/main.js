// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueKeepScrollPosition from 'vue-keep-scroll-position'
// Vue.use(VueKeepScrollPosition)
import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(vueScrollBehavior, { router: router })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
