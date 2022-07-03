import { endpoint } from "@/apis"
import apis from '@/services/api.service';
import {
    FETCH_ALL_SANPHAMS, FETCH_SANPHAMS_FILTER,
    FETCH_SANPHAMS_LIENQUAN,
    FETCH_SANPHAMS_MUANHIEU,
    FETCH_SANPHAMS_UUDAI,
    FETCH_SANPHAMS_BY_SLUG, SEARCH_SANPHAMS, ORDER_SAN_PHAM_THEO_GIA, GET_SAN_PHAM_FROM_TO
} from "@/store/action.type";
import {
    chunkArray,
    formatSanPham,
    normalizeSlug,
} from "@/utils/helpers";

const states = {
    sanpham: {},
    sanphams: {},
    sanpham_filters: [],
    sanpham_lienquan: [],
    sanpham_muanhieu: [],
    sanpham_uudai: [],
    sanpham_timkiem: [],
};

const getters = {
    getSanPhamLienQuan(state) {
        if(state.sanpham_lienquan) {
            return normalizeSlug(state.sanpham_lienquan);
        }
    },
    getAllSanPham(state) {
        if(state.sanphams) {
            return state.sanphams.data.map(sanpham => {
                return {
                    ...sanpham,
                    slug: '/' + endpoint.SAN_PHAM + '/' + sanpham.slug
                }
            });
        }
    },
    getSanPhamMuaNhieu(state) {
        if(state.sanpham_muanhieu) {
            const sanphams = normalizeSlug(state.sanpham_muanhieu);
            return chunkArray(sanphams, 2);
        }
    },
    getSanPhamUuDai(state) {
        if(state.sanpham_uudai) {
            return formatSanPham(state.sanpham_uudai);
        }
    },
    getChiTietSanPham(state) {
        if(state.sanpham) {
            return state.sanpham;
        }
    },
    getSanPhamTimKiem(state)  {
        if(state.sanpham_timkiem) {
            return state.sanpham_timkiem.map(sanpham => {
                return {
                    ...sanpham,
                    slug: "/" + endpoint.SAN_PHAM + "/" + sanpham.slug
                }
            });
        }
    }
}
const actions = {
    async [FETCH_ALL_SANPHAMS]({ commit, dispatch }) {
        const sanphams = await dispatch('getAllSanPham')
        commit(FETCH_ALL_SANPHAMS, sanphams)
    },
    async [FETCH_SANPHAMS_LIENQUAN]({ commit }) {
        const { data } = await apis.get(endpoint.SAN_PHAM_LIEN_QUAN);
        commit(FETCH_SANPHAMS_LIENQUAN, data);
    },
    async [FETCH_SANPHAMS_MUANHIEU]({ commit }) {
        const { data } = await apis.get(endpoint.SAN_PHAM_MUA_NHIEU);
        commit(FETCH_SANPHAMS_MUANHIEU, data);
    },
    async [FETCH_SANPHAMS_UUDAI]({ commit }) {
        const { data } = await apis.get(endpoint.SAN_PHAM_UU_DAI);
        commit(FETCH_SANPHAMS_UUDAI, data);
    },
    async [FETCH_SANPHAMS_BY_SLUG]({ commit }, slug) {
        const { data } = await apis.get(`${endpoint.SAN_PHAM}/${slug}`);
        commit(FETCH_SANPHAMS_BY_SLUG, data);
    },
    async [SEARCH_SANPHAMS]({ commit }, query) {
        const { data } = apis.get(`${endpoint.SAN_PHAM}?s=${query}`)
        commit(SEARCH_SANPHAMS, data.data)
    },
    async [GET_SAN_PHAM_FROM_TO]({ commit, dispatch }, payload) {
        const sanphams = await dispatch("getAllSanPham");
        commit(FETCH_ALL_SANPHAMS, sanphams)
        commit(GET_SAN_PHAM_FROM_TO, payload)
    },
    getAllSanPham() {
        return new Promise((resolve, reject) => {
            apis.get('/san-pham/tat-ca')
                .then(response => {
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    }
}
const mutations = {
    [FETCH_ALL_SANPHAMS](state, sanphams) {
        state.sanphams = sanphams;
    },
    [FETCH_SANPHAMS_LIENQUAN](state, sanphams) {
        state.sanpham_lienquan = sanphams;
    },
    [FETCH_SANPHAMS_MUANHIEU](state, sanphams) {
        state.sanpham_muanhieu = sanphams;
    },
    [FETCH_SANPHAMS_UUDAI](state, sanphams) {
        state.sanpham_uudai = sanphams;
    },
    [FETCH_SANPHAMS_FILTER](state, sanphams) {
        state.sanpham_filters = sanphams;
    },
    [FETCH_SANPHAMS_BY_SLUG](state, sanpham) {
        state.sanpham = sanpham;
    },
    [SEARCH_SANPHAMS](state, sanphams) {
        state.sanpham_timkiem = sanphams;
    },
    [ORDER_SAN_PHAM_THEO_GIA](state, orderBy) {
        state.sanphams = state.sanphams.sort((a, b) => {
            const comp = a.gia_khuyen_mai - b.gia_khuyen_mai;
            if(comp === 0)
                return 0;
            const sign = Math.abs(comp) / comp;
            return orderBy === 'asc' ? sign : -sign;
        })
    },
    [GET_SAN_PHAM_FROM_TO](state, { from, to}) {
        state.sanphams = state.sanphams.filter(sp => sp.gia_khuyen_mai > from && sp.gia_khuyen_mai <= to);
    }
}
export default {
    namespace: true,
    states,
    getters,
    actions,
    mutations
}
