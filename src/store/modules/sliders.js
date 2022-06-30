import { FETCH_ALL_SLIDERS, FETCH_SLIDERS_ERROR } from '@/store/action.type';
import apis from '@/services/api.service';
import { endpoint } from '@/apis';

const state = {
    items: [],
    loading: true,
    error: ''
};
const getters = {
    getAllSliders(state) {
        return state.items;
    }
}
const actions = {
    async [FETCH_ALL_SLIDERS]({ commit }) {
        try {
            const { data } = await apis.get(endpoint.SLIDER);
            commit(FETCH_ALL_SLIDERS, data)
        } catch (error) {
            commit(FETCH_SLIDERS_ERROR, error)
        }
    }
}
const mutations = {
    [FETCH_ALL_SLIDERS](state, payload) {
        state.items = payload;
    },
    [FETCH_SLIDERS_ERROR](state, payload) {
        state.error = payload;
    }
}
export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
};