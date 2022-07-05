import {
    CREATE_NEW_ORDER,
    FETCH_DON_HANG_THEO_MA,
    MAKE_ORDER,
    MAKE_ORDER_DETAIL,
    // REMOVE_ALL_CART_ITEM,
    SET_KHACHHANG_ID
} from "@/store/action.type";
import apis from "@/services/api.service";
import { getToken } from "@/services/jwt.service";

const state = {
    donhangs: [],
    donhang: null,
    khachhangId: null,
    chitiet_donhang: [],
    dathangthanhcong: false
}
const getters = {
    donhangs: state => state.donhangs,
    dathangthanhcong: state => state.dathangthanhcong
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
    },
    [CREATE_NEW_ORDER]({ state, dispatch }, payload) {
        state.dathangthanhcong = false;
        return new Promise((resolve, reject) => {
            const token = getToken();
            if(token) {
                dispatch('attempt', token)
                // const khachhang = store.state.auth.khachhang;
            } else {
                apis.post('/khach-hang/dang-ky', {
                    ho_khach_hang: payload.ho,
                    ten_khach_hang: payload.ten,
                    so_dien_thoai: payload.so_dien_thoai,
                }).then(response => {
                    console.log("khachhang:::", response.data)
                    dispatch(MAKE_ORDER, {
                        ...payload,
                        khachhang_id: response.data.id
                    })
                    resolve(response.data)
                }).catch(error => reject(error))
            }
        })
    },
    [MAKE_ORDER]({ dispatch }, orders) {
        return new Promise((resolve, reject) => {
            apis.post('/don-hang', orders)
                .then(response => {
                    console.log("donhang:::", response.data)
                    dispatch(MAKE_ORDER_DETAIL, response.data.id)
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    },
    [MAKE_ORDER_DETAIL]({ getters }, orderId) {
        const giohangs = getters.giohangs.map(gh => {
            return apis.post('/chi-tiet-don-hang', {
                sanpham_id: gh.id,
                donhang_id: orderId,
                so_luong: gh.qty,
                don_gia: gh.gia_khuyen_mai,
                thanh_tien: gh.gia_khuyen_mai * gh.qty
            })
        })
        Promise.all(giohangs).then(response => {
            console.log(response)
            // commit(REMOVE_ALL_CART_ITEM)
        })
    }
}
const mutations = {
    [FETCH_DON_HANG_THEO_MA](state, donhangs) {
        state.donhangs = donhangs;
    },
    [SET_KHACHHANG_ID](state, khachhangId){
        state.khachhangId = khachhangId;
    },
    [MAKE_ORDER](state, donhang) {
        state.donhang = donhang;
    },
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}