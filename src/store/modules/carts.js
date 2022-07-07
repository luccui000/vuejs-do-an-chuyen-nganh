import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    UPDATE_CART_QTY,
    REMOVE_ALL_CART_ITEM, SET_CART_ITEMS, SET_TONG_TIEN, PHI_GIAO_HANG
} from "@/store/action.type";
// import { getItem } from "@/services/cart.service";

const CART_LOCAL_STORAGE = 'cart_storage';

const state = {
    giohangs: [{"id":1,"danhmuc_id":2,"thuonghieu_id":1,"nhacungcap_id":1,"quycach_id":1,"ten_sp":"Nho xanh Autumn Crips Chile","slug":"/san-pham/nho-xanh-autumn-crips-chile_ilXJy9","hinh_anh":"http://api.backend-doanchuyennganh.local/uploads/sanpham/p-15.jpg","ma_sp":"NHOMY0001","mo_ta_ngan":"Với mỗi 100.000đ trong đơn hàng, quý khách được tặng 1 điểm vào thẻ khách hàng","mo_ta":"Nho xanh Autumn Crips Chile","gia_sp":189000,"gia_khuyen_mai":189000,"sp_noi_bat":1,"created_at":"2022-06-18T13:32:44.000000Z","updated_at":"2022-06-18T13:32:44.000000Z","danhmuc":{"id":2,"ten_dm":"Trái cây tươi","hinh_anh":"icon-grape2","thu_tu":null,"la_noi_bat":null,"created_at":"2022-06-27T00:00:00.000000Z","updated_at":"2022-06-27T00:00:00.000000Z"},"nhacungcap":{"id":1,"ten_ncc":"Cơ sở nông trại 1","ho_ten_lien_he":"Nguyễn Văn Hải","email":"nguyenvanhai@csnt.com","dia_chi":null,"dien_thoai":null,"created_at":null,"updated_at":null},"quycach":{"id":1,"ten_quy_cach":"500Gram","mo_ta":"500Gram","created_at":"2022-06-26T00:00:00.000000Z","updated_at":"2022-06-26T00:00:00.000000Z"},"tonkhos":[{"id":4,"sanpham_id":1,"so_luong":12,"created_at":"2022-06-22T13:48:26.000000Z","updated_at":"2022-06-22T13:48:26.000000Z"}],"qty":1},{"id":2,"danhmuc_id":2,"thuonghieu_id":1,"nhacungcap_id":1,"quycach_id":1,"ten_sp":"Nho xanh Autumn Crips Chile","slug":"/san-pham/sau-rieng-ri-6-chua-tach-vo_iP8TFj","hinh_anh":"http://api.backend-doanchuyennganh.local/uploads/sanpham/p-15.jpg","ma_sp":"NHOMY0001","mo_ta_ngan":"Với mỗi 100.000đ trong đơn hàng, quý khách được tặng 1 điểm vào thẻ khách hàng","mo_ta":"Nho xanh Autumn Crips Chile","gia_sp":189000,"gia_khuyen_mai":189000,"sp_noi_bat":0,"created_at":"2022-06-18T13:32:44.000000Z","updated_at":"2022-06-18T13:32:44.000000Z","danhmuc":{"id":2,"ten_dm":"Trái cây tươi","hinh_anh":"icon-grape2","thu_tu":null,"la_noi_bat":null,"created_at":"2022-06-27T00:00:00.000000Z","updated_at":"2022-06-27T00:00:00.000000Z"},"nhacungcap":{"id":1,"ten_ncc":"Cơ sở nông trại 1","ho_ten_lien_he":"Nguyễn Văn Hải","email":"nguyenvanhai@csnt.com","dia_chi":null,"dien_thoai":null,"created_at":null,"updated_at":null},"quycach":{"id":1,"ten_quy_cach":"500Gram","mo_ta":"500Gram","created_at":"2022-06-26T00:00:00.000000Z","updated_at":"2022-06-26T00:00:00.000000Z"},"tonkhos":[{"id":5,"sanpham_id":2,"so_luong":23,"created_at":"2022-06-22T13:48:26.000000Z","updated_at":"2022-06-22T13:48:26.000000Z"}],"qty":1},{"id":3,"danhmuc_id":2,"thuonghieu_id":1,"nhacungcap_id":1,"quycach_id":1,"ten_sp":"Nho đỏ không hạt JACK SALUTE","slug":"/san-pham/nho-do-khong-hat-jack-salute_iOhYtY","hinh_anh":"http://api.backend-doanchuyennganh.local/uploads/sanpham/p-12.jpg","ma_sp":"NHOMY0001","mo_ta_ngan":"Đặc điểm, mùa vụ NHO ĐỎ KHÔNG HẠT JACK SALUTE","mo_ta":"Nho đỏ không hạt JACK SALUTE","gia_sp":199000,"gia_khuyen_mai":189000,"sp_noi_bat":0,"created_at":"2022-06-18T13:39:56.000000Z","updated_at":"2022-06-18T13:39:56.000000Z","danhmuc":{"id":2,"ten_dm":"Trái cây tươi","hinh_anh":"icon-grape2","thu_tu":null,"la_noi_bat":null,"created_at":"2022-06-27T00:00:00.000000Z","updated_at":"2022-06-27T00:00:00.000000Z"},"nhacungcap":{"id":1,"ten_ncc":"Cơ sở nông trại 1","ho_ten_lien_he":"Nguyễn Văn Hải","email":"nguyenvanhai@csnt.com","dia_chi":null,"dien_thoai":null,"created_at":null,"updated_at":null},"quycach":{"id":1,"ten_quy_cach":"500Gram","mo_ta":"500Gram","created_at":"2022-06-26T00:00:00.000000Z","updated_at":"2022-06-26T00:00:00.000000Z"},"tonkhos":[{"id":6,"sanpham_id":3,"so_luong":7,"created_at":"2022-06-22T13:48:26.000000Z","updated_at":"2022-06-22T13:48:26.000000Z"}],"qty":1}],
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
