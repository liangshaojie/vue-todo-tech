import model from '../../modle/client-model'
import notify from '../../commponents/notification/function'
import bus from '../../util/bus'

const handleError = (err) => {
    // handle error
    if (err.code === 401) {
        notify({
            content: '你得先登录啊！'
        })
        bus.$emit('auth')
    }
}

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
    login ({ commit }, { username, password }) {
        return new Promise((resolve, reject) => {
            model.login(username, password)
                .then(data => {
                    commit('doLogin', data)
                    notify({
                        content: '登录成功'
                    })
                    resolve()
                }).catch(err => {
                handleError(err)
                reject(err)
            })
        })
    }
}