import { FETCH_DON_HANG_THEO_MA } from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    donhangs: [],
    donhang: null
}
const getters = {
    donhang: state => state.donhang
}
const actions = {
    [FETCH_DON_HANG_THEO_MA]({ commit}, ma) {
        return new Promise((resolve, reject) => {
            apis.get(`/don-hang/tim-kiem?ma=${ma}`)
                .then(response => {
                    commit(FETCH_DON_HANG_THEO_MA, response.data)
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    }
}
const mutations = {
    [FETCH_DON_HANG_THEO_MA](state, donhangs) {
        state.donhangs = donhangs;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}