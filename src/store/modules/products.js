import {
    FETCH_ALL_SANPHAMS, FETCH_SANPHAMS_FILTER,
    FETCH_SANPHAMS_LIENQUAN,
    FETCH_SANPHAMS_MUANHIEU,
    FETCH_SANPHAMS_UUDAI,
    FETCH_SANPHAMS_BY_SLUG
} from "@/store/action.type";
import apis from '@/services/api.service';
import { chunkArray, formatSanPham, VNDFormat } from '@/utils/helpers';
import { endpoint } from "@/apis"

const states = {
    sanpham: {},
    sanphams: {},
    sanpham_filters: [],
    sanpham_lienquan: [],
    sanpham_muanhieu: [],
    sanpham_uudai: []
};

const getters = {
    getSanPhamLienQuan(state) {
        if(state.sanpham_lienquan) {
            return formatSanPham(state.sanpham_lienquan);
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
            const sanpham = state.sanpham_muanhieu.map(item => {
                return {
                    ...item,
                    gia_sp: VNDFormat(item.gia_sp),
                    gia_khuyen_mai: VNDFormat(item.gia_khuyen_mai),
                }
            });
            return chunkArray(sanpham, 2);
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
    }
}
const actions = {
    async [FETCH_ALL_SANPHAMS]({ commit }) {
        const promiseSanPham = apis.get(endpoint.SAN_PHAM);
        const promiseSanPhamUuDais = apis.get(endpoint.SAN_PHAM_UU_DAI);

        const [resolveSanPham, resolveSanPhamUudai] = await Promise.all([promiseSanPham, promiseSanPhamUuDais]);

        commit(FETCH_ALL_SANPHAMS, resolveSanPham.data)
        commit(FETCH_SANPHAMS_FILTER, resolveSanPham.data);
        commit(FETCH_SANPHAMS_MUANHIEU, resolveSanPhamUudai.data);
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
    }
}
const mutations = {
    [FETCH_ALL_SANPHAMS](state, sanphams) {
        state.sanphams = {
            ...sanphams
        };
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
    }

}
export default {
    namespace: true,
    states,
    getters,
    actions,
    mutations
}