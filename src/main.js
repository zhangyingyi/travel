import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/reset.css'
import './assets/js/scale.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
