import { FETCH_ALL_NHA_CUNG_CAP } from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    nhacungcap: []
}
const getters = {
    nhacungcaps: state => state.nhacungcaps
}
const actions = {
    [FETCH_ALL_NHA_CUNG_CAP]({ commit }) {
        return new Promise((resolve, reject) => {
            apis.get('/nha-cung-cap')
                .then(response => {
                    commit(FETCH_ALL_NHA_CUNG_CAP, response.data)
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    }
}
const mutations = {
    [FETCH_ALL_NHA_CUNG_CAP](state, nhacungcaps) {
        state.nhacungcaps = nhacungcaps;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}