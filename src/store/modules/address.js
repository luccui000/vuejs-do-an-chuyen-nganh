import {
    FETCH_ALL_TINHS,
    FETCH_HUYEN_BY_MA_TINH,
    FETCH_XA_BY_MA_HUYEN,
    RESET_XA_DATA,
    SET_MA_TINH
} from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    tinh: null,
    huyen: null,
    tinhs: [],
    huyens: [],
    xas: []
}

const getters = {
    huyen: state => state.huyen,
    tinh: state => state.tinh,
    huyens: state => state.huyens,
    xas: state => state.xas
}

const actions = {
    [FETCH_ALL_TINHS]({ commit }) {
        return new Promise((resolve, reject) => {
            apis.get('/dia-chi')
                .then(response => {
                    commit(FETCH_ALL_TINHS, response.data)
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    },
    [FETCH_HUYEN_BY_MA_TINH]({ commit }, maTinh) {
        return new Promise((resolve, reject) => {
            apis.get(`/dia-chi?ma_tinh=${maTinh}`)
                .then(response => {
                    commit(FETCH_HUYEN_BY_MA_TINH, response.data);
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    },
    [FETCH_XA_BY_MA_HUYEN]({ commit }, maHuyen) {
        return new Promise((resolve, reject) => {
            apis.get(`/dia-chi?ma_huyen=${maHuyen}`)
                .then(response => {
                    commit(FETCH_XA_BY_MA_HUYEN, response.data)
                    resolve(response.data)
                }).catch(error => reject(error))
        });
    }
}

const mutations = {
    [FETCH_ALL_TINHS](state, tinhs) {
        state.tinhs = tinhs
    },
    [FETCH_HUYEN_BY_MA_TINH](state, huyens) {
        state.huyens = huyens;
    },
    [FETCH_XA_BY_MA_HUYEN](state, xas) {
        state.xas = xas;
    },
    [SET_MA_TINH](state, maTinh) {
        state.tinh = maTinh;
    },
    [RESET_XA_DATA](state) {
        state.xas = [];
    }
}


export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}
