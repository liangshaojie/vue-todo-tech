import model from '../../modle/client-model'
export default {
    updateCountAsync(store,data) {
        setTimeout(() => {
            store.commit("updateCount",{
                num:data.num
            })
        },data.time)
    },
    fetchTodos ({ commit }) {
        return model.getAllTodos()
            .then(data => {
                commit('fillTodos', data)
            })
            .catch(err => {
                handleError(err)
            })
    },
}