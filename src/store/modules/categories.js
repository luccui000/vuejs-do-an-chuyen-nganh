import {
    FETCH_ALL_DANHMUCS,
    SELECT_TAB_DANHMUCS,
    SET_DANHMUCS
} from '@/store/action.type';
import apis from '@/services/api.service';
import { endpoint } from '@/apis';

const state = {
    items: []
}
const getters = {
    getAllDanhMucs(state) {
        return state.items;
    }
}
const actions = {
    async [FETCH_ALL_DANHMUCS](context) {
        const { data } = await apis.get(endpoint.DANH_MUC);

        const danhmucs = data.map((danhmuc) => {
            return { ...danhmuc, selected: false }
        })
        context.commit(SET_DANHMUCS, danhmucs);
    },
    [SELECT_TAB_DANHMUCS](context, payload) {
        const foundIdx = state.items.findIndex((item) => item.id === payload);
        if(foundIdx >= 0) {
            context.commit(SELECT_TAB_DANHMUCS, foundIdx);
        }
    }
}
const mutations = {
    [SET_DANHMUCS](state, danhmucs) {
        state.items = danhmucs;
        if(state.items.length)
            state.items[0].selected = true;
    },
    [SELECT_TAB_DANHMUCS](state, payload) {
        state.items = state.items.map(item => {
            return {
                ...item,
                selected: false
            }
        });
        state.items[payload].selected = true;
    }
}
export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
};