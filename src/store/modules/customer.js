import { CREATE_NEW_KHACHHANG, MAKE_ORDER } from "@/store/action.type";
import apis from "@/services/api.service";

const state = {
    khachhang: null
}
const getters = {

}
const actions = {
    [CREATE_NEW_KHACHHANG]({ dispatch }, khachhang) {
        return new Promise((resolve, reject) => {
            apis.post('/khach-hang/dang-ky', khachhang)
                .then(response => {
                    const khachhangId = response.data.id;
                    dispatch(MAKE_ORDER, khachhangId)
                    resolve(response.data)
                }).catch(error => reject(error))
        })
    }
}
const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}