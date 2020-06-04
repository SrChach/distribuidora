import Vue from 'vue'
import Vuex from 'vuex'
import mail from './modules/mail'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        mail,
    }
})