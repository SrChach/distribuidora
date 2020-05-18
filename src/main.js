import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Importing Buefy - Full
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

// Use Buefy full
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
