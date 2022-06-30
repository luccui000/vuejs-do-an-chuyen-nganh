import { VNDFormat } from '@/utils/helpers';
import { ADD_TO_CART } from '@/store/action.type';
import endpoint from "@/apis/endpoint";

const CART_LOCAL_STORAGE = 'cart_storage';

const state = {
    giohangs: [],
}
const getters = {
    getAllCarts(state) {
        const storage = localStorage.getItem(CART_LOCAL_STORAGE);
        const carts  = JSON.parse(storage);
        if(carts)
            state.giohangs = carts;
        if(state.giohangs) {
            return state.giohangs.map(function(item) {
                return {
                    ...item,
                    slug: "/" + endpoint.SAN_PHAM + "/" + item.slug,
                    gia_sp: VNDFormat(item.gia_sp),
                    gia_khuyen_mai: VNDFormat(item.gia_khuyen_mai),
                }
            });
        }
    },
    getTotalPrice(state) {
        if(state.giohangs) {
            const totalPrice = state.giohangs.reduce((prev, curr) => {
                return prev += curr.gia_khuyen_mai * curr.qty;
            }, 0);
            return VNDFormat(totalPrice);
        }
    },
    getTotalItems(state) {
        if(state.giohangs)
            return state.giohangs.length;
    }
}
const actions = {
    [ADD_TO_CART]({ commit }, payload) {
        if(payload.qty === undefined) {
            payload.qty = 1;
        }
        commit(ADD_TO_CART, {
            ...payload.sanpham,
            qty: payload.qty
        })
    }
}
const mutations = {
    [ADD_TO_CART](state, payload) {
        const idx = state.giohangs.findIndex(el => el.id === payload.id);

        if(idx >= 0) {
            state.giohangs[idx].qty += payload.qty;
        } else {
            state.giohangs.push(payload);
        }
        localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(state.giohangs));
    }
}

export default  {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}