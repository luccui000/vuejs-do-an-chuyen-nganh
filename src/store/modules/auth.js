import { LOGIN_KHACHHANG, SET_AUTH_ERROR, SET_AUTH_LOGOUT, SET_TOKEN } from "@/store/action.type";
import apis from "@/services/api.service";
import router from "@/routes";
import jwtService from "@/services/jwt.service";

const state = {
    khachhang: null,
    token: null,
    error: false,
    error_message: null
}

const getters = {
    authenticated: state => state.khachhang && state.token,
    hotenkh: state => state.khachhang && state.khachhang.ho_khach_hang + " " + state.khachhang.ten_khach_hang,
}
const actions = {
    async [LOGIN_KHACHHANG]({ dispatch, commit }, payload) {
        try {
            const response = await apis.post('/khach-hang/dang-nhap', payload)
            dispatch('attempt', response.data.access_token)
            router.push('/thong-tin-ca-nhan')
        } catch (error) {
            commit(SET_AUTH_ERROR, error)
        }
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
    },
    [SET_AUTH_ERROR](state, error) {
        state.error = true;
        state.error_message = error.response.data.error;
    },
    [SET_AUTH_LOGOUT](state){
        state.error = false;
        state.error_message = null;
        state.khachhang = null;
        state.token = null;
        jwtService.destroyToken()
        router.push('/dang-nhap')
    }
}

export default  {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}
