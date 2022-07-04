import { LOGIN_KHACHHANG, SET_TOKEN } from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    khachhang: null,
    token: null
}

const getters = {
    authenticated: state => state.khachhang && state.token
}
const actions = {
    async [LOGIN_KHACHHANG]({ dispatch }, payload) {
        return new Promise((resolve, reject) => {
            apis.post('/khach-hang/dang-nhap', payload)
                .then(response => {
                    dispatch('attempt', response.data.access_token)
                    resolve(response)
                }).catch(error => reject(error))

        })
    },
    attempt({ commit }, token)  {
        if(token)
            commit(SET_TOKEN, token)
        return new Promise((resolve, reject) => {
            apis.get('/khach-hang/thong-tin-ca-nhan')
                .then(response => {
                    commit(LOGIN_KHACHHANG, response.data)
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
}
const mutations = {
    [LOGIN_KHACHHANG](state, khachhang) {
        state.khachhang = khachhang;
    },
    [SET_TOKEN](state, token) {
        state.token = token;
    }
}

export default  {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}
