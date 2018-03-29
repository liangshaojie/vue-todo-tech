import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
const isDev = process.env.NODE_ENV === "development"
export default () => {
    const store = new Vuex.Store({
        strict:isDev,
        state:defaultState,
        getters,
        actions,
        mutations,
        // plugins:[
        //     (store) => {console.log('my plugin invoked')}
        // ]
        // modules:{
        //     a:{
        //         namespace:true,
        //         state:{
        //             text:1
        //         },
        //         mutations: {
        //             updateText(state,text) {
        //                 state.text = text
        //             }
        //         },
        //         getters: {
        //             textPlus(state) {
        //                 return state.text + 9
        //             }
        //         }
        //     },
        //     b:{
        //         state:{
        //             text:2
        //         }
        //     }
        // }
    })

    if(module.hot){
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './actions/actions',
            './getters/getters'
        ],()=>{
            const newState = require('./state/state').default
            const newMutations = require('./mutations/mutations').default
            const newActions = require('./actions/actions').default
            const newGetters = require('./getters/getters').default

            store.hotUpdate({
                state:newState,
                mutations:newMutations,
                actions:newActions,
                getters:newGetters
            })
        })
    }


    return store

}