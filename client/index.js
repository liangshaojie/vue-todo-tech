import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import './assets/styles/global.styl'
import createRouter from './config/router.js'
import createStore from './store/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()
new Vue({
    store,
    router,
    render: (h) => h(App)
}).$mount('#root')
