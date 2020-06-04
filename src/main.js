import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore'


// Importing Buefy - Full
import Buefy from 'buefy'

Vue.config.productionTip = false

// Use Buefy full
Vue.use(Buefy)
Vue.use(VueFirestore)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
