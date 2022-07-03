<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <LBreadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <form class="row" @submit.prevent="handleSubmit">
            <div class="col-8">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Họ</label>
                            <input v-model="form.ho" placeholder="Họ" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Tên</label>
                            <input v-model="form.ten" placeholder="Tên" class="form-control" type="text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Số điện thoại</label>
                            <input v-model="form.so_dien_thoai" type="text" class="form-control" placeholder="Nhập số điện thoại">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Email</label>
                            <input v-model="form.email" type="text" class="form-control" placeholder="Nhập email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label for="">Tỉnh/ Thành phố</label>
                            <select
                                v-model="form.ma_tinh"
                                class="form-control"
                                @change="handleTinhChange($event.target.value)">
                                <option
                                    v-for="tinh in tinhs"
                                    :key="tinh.id"
                                    :value="tinh.id"
                                >{{ tinh.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="">Quận/ huyện</label>
                            <select
                                v-model="form.ma_huyen"
                                class="form-control"
                                @change="handleHuyenChange($event.target.value)"
                            >
                                <option
                                    v-for="huyen in huyens"
                                    :key="huyen.id"
                                    :value="huyen.id"
                                >{{ huyen.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="">Xã/ Phường</label>
                            <select
                                v-model="form.ma_xa"
                                class="form-control"
                                @change="handleXaChange"
                            >
                                <option
                                    v-for="xa in xas"
                                    :key="xa.id"
                                    :value="xa.id"
                                >{{ xa.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Địa chỉ chi tiết</label>
                            <input v-model="form.dia_chi_chi_tiet" type="text" class="form-control" placeholder="Địa chỉ chi tiết">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <label for="">Ghi chú</label>
                        <textarea  class="form-control" placeholder="Nhập vào ghi chú"></textarea>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-12 d-flex justify-content-end">
                        <button class="btn btn-primary">Xác nhận</button>
                    </div>
                </div>
            </div>
            <div class="col-4 checkout-view">
                <div class="checkout-container">
                    <div class="checkout-header">
                        <h4>Giỏ hàng của bạn</h4>
                        <RouterLink to="/gio-hang">
                            Thay đổi giỏ hàng
                        </RouterLink>
                    </div>
                    <hr>
                    <div class="checkout-body">

                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {
    FETCH_ALL_TINHS,
    FETCH_HUYEN_BY_MA_TINH,
    SET_MA_TINH,
    FETCH_XA_BY_MA_HUYEN, RESET_XA_DATA, CALC_PHI_GIAO_HANG
} from "@/store/action.type";

export default {
    name: "ThanhToan",
    components: { },
    setup() {
        const route = useRoute();
        const store = useStore();

        store.dispatch(FETCH_ALL_TINHS);

        const form = reactive({
            ho: '',
            ten: '',
            so_dien_thoai: '',
            email: '',
            ma_huyen: '',
            ma_tinh: '',
            ma_xa: '',
            dia_chi_chi_tiet: '',
        })
        const breadcrumbs = computed(() => route.meta.breadcrumbs);
        const tinhs = computed(() => store.state.address.tinhs);
        const huyens = computed(() => store.state.address.huyens)
        const xas = computed(() => store.state.address.xas)
        const thongtinshipping = computed(() => store.state.shipping.thongtinshipping);

        const handleTinhChange = (id) => {
            store.commit(SET_MA_TINH, id)
            store.dispatch(FETCH_HUYEN_BY_MA_TINH, id)
            store.commit(RESET_XA_DATA)
        }
        const handleHuyenChange = (maHuyen) => {
            store.dispatch(FETCH_XA_BY_MA_HUYEN, maHuyen)
        }
        const handleXaChange = () => {
            const payload = {
                ma_tinh_thanh: form.ma_tinh,
                ma_quan_huyen: form.ma_huyen,
                ma_phuong_xa: form.ma_xa
            }
            store.dispatch(CALC_PHI_GIAO_HANG, payload);
            console.log(thongtinshipping.value.total)
        }
        const handleSubmit = () => {
            console.log(form)
        }

        return {
            breadcrumbs,
            tinhs,
            huyens,
            xas,
            form,
            handleTinhChange,
            handleHuyenChange,
            handleXaChange,
            handleSubmit,
        }
    }
}
</script>

<style scoped>
.form-control {
    padding: 8px 15px;
    box-shadow: none;
    transition: all .3s linear;
}
textarea.form-control,
select.form-control{
    border-radius: 0;
}
.checkout-view {
}
.checkout-container {
    margin: 10px;
    background-color: #f6f6f6;
    padding: 10px;
}
.checkout-container hr {
    margin: 10px 0;
}
.checkout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.checkout-header h4 {
    color: #333;
}

</style>
