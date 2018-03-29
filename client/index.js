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

store.registerModule('C', {
    state: {
        text: 8
    }
})

// store.unregisterModule("C")

// store.watch(state => state.count + 2, (newCount) => {
//     console.log('new count watched:',newCount)
// })


// store.subscribe((mutation,state) => {
//     console.log(mutation)
//     console.log(mutation.type)
//     console.log(mutation.payload)
// })

store.subscribeAction((action,state) => {
    console.log(action.type)
    console.log(action.payload)
})



new Vue({
    store,
    router,
    render: (h) => h(App)
}).$mount('#root')
