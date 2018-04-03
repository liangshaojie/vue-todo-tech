import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import App from './app.vue'
import createStore from './store/store'
import createRoute from './config/router'
import Notification from './commponents/notification/index.js'

import './assets/styles/global.styl'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Meta)
Vue.use(Notification)

export default () => {
    const router = createRoute()
    const store = createStore()

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app,router,store}
}
