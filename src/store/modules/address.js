import {
    FETCH_ALL_TINHS,
    FETCH_HUYEN_BY_MA_TINH,
    FETCH_XA_BY_MA_HUYEN, PHI_GIAO_HANG,
    RESET_XA_DATA, SET_MA_HUYEN,
    SET_MA_TINH, SET_MA_XA,
} from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    tinh: null,
    huyen: null,
    xa: null,
    tinhs: [],
    huyens: [],
    xas: [],
}

const getters = {
    huyen: state => state.huyen,
    tinh: state => state.tinh,
    huyens: state => state.huyens,
    xas: state => state.xas,
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
    },
    [PHI_GIAO_HANG]({ state, commit }) {
        return new Promise((resolve, reject) => {
            const payload = {
                ma_tinh_thanh: state.tinh,
                ma_quan_huyen: state.huyen,
                ma_phuong_xa: state.xa
            }
            apis.post('/giao-hang/phi-van-chuyen', payload)
                .then(response => {
                    commit(PHI_GIAO_HANG, response.data.total);
                    resolve(response.data)
                }).catch(error => reject(error))
        })
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
    [SET_MA_TINH](state, tinh) {
        state.tinh = tinh;
    },
    [SET_MA_HUYEN](state, huyen) {
        state.huyen = huyen;
    },
    [SET_MA_XA](state, xa) {
        state.xa = xa;
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
