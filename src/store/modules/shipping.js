import { CALC_PHI_GIAO_HANG } from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    thongtinshipping: {
        total: 0
    }
}
const getters = {
    thongtinshipping: state => state.thongtinshipping,
}

const actions = {
    [CALC_PHI_GIAO_HANG]({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apis.post('/giao-hang/phi-van-chuyen', payload)
                .then(response => {
                    commit(CALC_PHI_GIAO_HANG, response.data);
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    }
}
const mutations = {
    [CALC_PHI_GIAO_HANG](state, thongtinshipping) {
        state.thongtinshipping = thongtinshipping;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}
