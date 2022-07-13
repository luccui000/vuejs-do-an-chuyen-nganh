import {
    CREATE_NEW_ORDER,
    CREATE_NEW_ORDER_WITH_PAYMENT, DAT_HANG_THANH_CONG, DAT_HANG_THAT_BAI,
    FETCH_DON_HANG_THEO_MA, LUU_THONG_TIN_DAT_HANG, LUU_THONG_TIN_GIO_HANG,
    MAKE_ORDER_DETAIL, MAKE_PAYMENT, REMOVE_ALL_CART_ITEM,
    SAVE_LOCAL_ORDER_DATA,
    // REMOVE_ALL_CART_ITEM,
    SET_KHACHHANG_ID, SET_MA_DON_HANG, THEO_DOI_DON_HANG
} from "@/store/action.type";
import apis from "@/services/api.service";
import { randomOrderId } from "@/utils/helpers";
import router from "@/routes";

const MA_DON_HANG = 'ma_don_hang'

const state = {
    donhangs: [],
    donhang: null,
    khachhangId: null,
    chitiet_donhang: [],
    dathangthanhcong: false,
    madonhang: null,
    donvuadat: null,
    error: false,
    error_message: null,
    dondadats: []
}
const getters = {
    donhangs: state => state.donhangs,
    dathangthanhcong: state => state.dathangthanhcong,
    donVuaDat: state => state.donvuadat
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
    [CREATE_NEW_ORDER_WITH_PAYMENT]({ dispatch }, donHang) {
        localStorage.setItem(SAVE_LOCAL_ORDER_DATA, JSON.stringify(donHang))
        const ma_don_hang = randomOrderId();
        const payment = {
            ma_don_hang: ma_don_hang,
            tong_tien: donHang.tong_tien
        }
        dispatch(MAKE_PAYMENT, payment)
    },
    async[THEO_DOI_DON_HANG]({ commit }, payload) {
        try {
            const response = await apis.post('/don-hang/theo-doi-don-hang', {
                khachhang_id: payload
            })
            console.log(response.data)
            commit(THEO_DOI_DON_HANG, response.data)
        } catch (error) {
            console.error(error)
        }
    },
    async [CREATE_NEW_ORDER]({ commit, dispatch }, { thongtin, giohang, thanhtoan }) {
        try {
            const response = await apis.post('/don-hang', thongtin)
            dispatch(MAKE_ORDER_DETAIL, {
                orderId: response.data.id,
                giohang
            })
            if(thanhtoan) {
                localStorage.removeItem(LUU_THONG_TIN_DAT_HANG)
                localStorage.removeItem(LUU_THONG_TIN_GIO_HANG)
            }
            commit(REMOVE_ALL_CART_ITEM)
            commit(DAT_HANG_THANH_CONG, response.data)
            router.push('/dat-hang/thanh-cong')
        } catch (error) {
            commit(DAT_HANG_THAT_BAI, error)
        }
    },
    async [MAKE_ORDER_DETAIL](_, { orderId, giohang }) {
        const giohangs = giohang.map(gh => {
            return apis.post('/chi-tiet-don-hang', {
                sanpham_id: gh.id,
                donhang_id: orderId,
                so_luong: gh.qty,
                don_gia: gh.gia_khuyen_mai,
                thanh_tien: gh.gia_khuyen_mai * gh.qty
            })
        })
        return await Promise.all(giohangs)
    },
    async [MAKE_PAYMENT]({ commit }, payment) {
        try {
            const response = await apis.post('/thanh-toan/chuyen-huong', payment);
            window.location.href = response.data;
        } catch (error) {
            commit(DAT_HANG_THAT_BAI, error)
        }
    },
}
const mutations = {
    [FETCH_DON_HANG_THEO_MA](state, donhangs) {
        state.donhangs = donhangs;
    },
    [SET_KHACHHANG_ID](state, khachhangId){
        state.khachhangId = khachhangId;
    },
    [CREATE_NEW_ORDER](state, donhang) {
        state.donhang = donhang;
    },
    [SET_MA_DON_HANG](state, madonhang) {
        localStorage.setItem(MA_DON_HANG, madonhang);
        state.madonhang = madonhang
    },
    [DAT_HANG_THANH_CONG](state, donhang) {
        state.dathangthanhcong = true;
        state.donvuadat = donhang
    },
    [DAT_HANG_THAT_BAI](state, error) {
        state.error = true;
        state.error_message = error
    },
    [THEO_DOI_DON_HANG](state, donhangs) {
        state.dondadats = donhangs
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}