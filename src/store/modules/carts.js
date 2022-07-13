import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    UPDATE_CART_QTY,
    REMOVE_ALL_CART_ITEM, SET_CART_ITEMS, SET_TONG_TIEN, PHI_GIAO_HANG
} from "@/store/action.type";

const CART_LOCAL_STORAGE = 'cart_storage';

const state = {
    giohangs: [],
    tongtien: 0,
    phigiaohang: 0,
}
const getters = {
    giohangs: state => state.giohangs,
    thanhtien: state => state.giohangs.reduce((prev, curr) => prev += curr.gia_khuyen_mai * curr.qty, 0),
    soluong: state => state.giohangs.length,
    tongtien: (state) => {
        const thanhTien = state.giohangs.reduce((prev, curr) => prev += curr.gia_khuyen_mai * curr.qty, 0);
        state.tongtien = thanhTien + state.phigiaohang;
        return state.tongtien;
    },
    phigiaohang: state => state.phigiaohang,
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
    },
    [REMOVE_CART_ITEM]({ commit }, cartId) {
        commit(REMOVE_CART_ITEM, cartId)
    },
    [UPDATE_CART_QTY]({ commit }, payload) {
        commit(UPDATE_CART_QTY, payload)
    }
}
const mutations = {
    [SET_CART_ITEMS](state, giohangs) {
        state.giohangs = giohangs;
    },
    [ADD_TO_CART](state, payload) {
        const idx = state.giohangs.findIndex(el => el.id === payload.id);

        if(idx >= 0) {
            state.giohangs[idx].qty += payload.qty;
        } else {
            state.giohangs.push(payload);
        }
        localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(state.giohangs));
    },
    [UPDATE_CART_QTY](state, payload) {
        state.giohangs = state.giohangs.map(el => {
            if(el.id === payload.id) {
                el.qty += payload.qty;
            }
            return el;
        })
    },
    [REMOVE_CART_ITEM](state, cartId) {
        state.giohangs = state.giohangs.filter(el => el.id !== cartId);
    },
    [REMOVE_ALL_CART_ITEM](state) {
        state.giohangs = [];
        state.phigiaohang = 0;
        localStorage.removeItem(CART_LOCAL_STORAGE)
    },
    [SET_TONG_TIEN](state, tongtien) {
        state.tongtien = tongtien;
    },
    [PHI_GIAO_HANG](state, phigiaohang) {
        state.phigiaohang = phigiaohang;
    }
}

export default  {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}
