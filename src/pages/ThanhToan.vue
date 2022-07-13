<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <LBreadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <Form class="row mb-4" @submit="submitForm" :validation-schema="schema">
            <div class="col-8">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="ho">Họ <span class="text-danger">*</span></label>
                            <field id="ho" name="ho" type="text" class="form-control" placeholder="Nhập vào họ" />
                            <error-message name="ho" class="text-sm text-danger" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="ten">Tên <span class="text-danger">*</span></label>
                            <field id="ten" name="ten" type="text" class="form-control" placeholder="Nhập vào tên" />
                            <error-message name="ten" class="text-sm text-danger" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Số điện thoại <span class="text-danger">*</span></label>
                            <field id="so_dien_thoai" name="so_dien_thoai" type="text" class="form-control" placeholder="Nhập số điện thoại" />
                            <error-message name="so_dien_thoai" class="text-sm text-danger" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="email">Email </label>
                            <field id="email" name="email" type="text" class="form-control" placeholder="Nhập số điện thoại" />
                            <error-message name="email" class="text-sm text-danger" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label for="">Tỉnh/ Thành phố</label>
                            <select
                                v-model="diachi.ma_tinh"
                                class="form-control"
                            >
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
                                v-model="diachi.ma_huyen"
                                class="form-control"
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
                                v-model="diachi.ma_xa"
                                class="form-control"
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
                            <field id="dia_chi" name="dia_chi" type="text" class="form-control" placeholder="Nhập vào địa chỉ chi tiết" />
                            <error-message name="dia_chi" class="text-sm text-danger" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <label for="">Ghi chú</label>
                        <textarea class="form-control" placeholder="Nhập vào ghi chú"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-4 checkout__wrapper">
                <div class="checkout__container">
                    <div class="checkout__header d-flex justify-content-between">
                        <div>Giỏ hàng</div>
                        <router-link to="/gio-hang">
                            <i class="fa fa-edit"></i>
                            <span>Chỉnh sửa</span>
                        </router-link>
                    </div>
                    <div class="checkout__group">
                        <div class="checkout__group--label">Thành tiền</div>
                        <div class="checkout__group--value">{{ VNDFormat(form.thanh_tien) }}</div>
                    </div>
                    <div class="checkout__group">
                        <div class="checkout__group--label">Phí giao hàng</div>
                        <div class="checkout__group--value">{{ VNDFormat(form.phi_giao_hang) }}</div>
                    </div>
                    <h5 class="checkout__type--header">Phương thức thanh toán</h5>
                    <div class="checkout__type--formcheck">
                        <input v-model="form.phuong_thuc_thanh_toan" value="0" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  checked>
                        <label class="form-check-label cursor-pointer" for="exampleRadios1">
                            Thanh toán khi nhận hàng
                        </label>
                    </div>
                    <div class="checkout__type--formcheck">
                        <input v-model="form.phuong_thuc_thanh_toan" value="1" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2">
                        <label class="form-check-label cursor-pointer" for="exampleRadios2">
                            Thẻ tín dụng / ghi nợ
                        </label>
                    </div>
                    <hr>
                    <div class="checkout__group">
                        <div class="checkout__group--label">Tổng tiền</div>
                        <div class="checkout__group--value total-price">{{ VNDFormat(form.tong_tien) }}</div>
                    </div>
                    <button class="btn btn__checkout cursor-pointer">
                        Thanh toán
                    </button>
                </div>
            </div>
        </Form>
    </div>
</template>

<script>
import { computed, reactive, watch } from "vue";
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import { Field, Form, ErrorMessage } from "vee-validate"
import * as Yup from "yup";

import {
    FETCH_ALL_TINHS,
    FETCH_HUYEN_BY_MA_TINH,
    FETCH_XA_BY_MA_HUYEN,
    SET_MA_TINH,
    SET_MA_HUYEN,
    SET_MA_XA,
    RESET_XA_DATA,
    PHI_GIAO_HANG,
    CREATE_NEW_ORDER,
    MAKE_PAYMENT, SAVE_LOCAL_ORDER_DATA, LUU_THONG_TIN_DAT_HANG, LUU_THONG_TIN_GIO_HANG
} from "@/store/action.type";
import { randomOrderId, VNDFormat } from "@/utils/helpers";

export default {
    name: "ThanhToan",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    setup() {
        const route = useRoute();
        const store = useStore();

        store.dispatch(FETCH_ALL_TINHS);
        const diachi = reactive({
            ma_tinh: null,
            ma_huyen: null,
            ma_xa: null
        })
        const form = reactive({
            ma_tinh: '',
            ma_huyen: '',
            ma_xa: '',
            thanh_tien: 0,
            phi_giao_hang: 0,
            tong_tien: 0,
            phuong_thuc_thanh_toan: 1
        })
        const breadcrumbs = computed(() => route.meta.breadcrumbs);
        const tinhs = computed(() => store.state.address.tinhs);
        const huyens = computed(() => store.state.address.huyens)
        const xas = computed(() => store.state.address.xas)
        form.thanh_tien = computed(() => store.getters.thanhtien);
        form.tong_tien = computed(() => store.getters.tongtien);
        form.phi_giao_hang = computed(() => store.getters.phigiaohang);

        watch(() => diachi.ma_tinh, (maTinh) => {
            store.commit(SET_MA_TINH, maTinh)
            store.dispatch(FETCH_HUYEN_BY_MA_TINH, maTinh)
            store.commit(RESET_XA_DATA)
        })
        watch(() => diachi.ma_huyen, (maHuyen) => {
            store.commit(SET_MA_HUYEN, maHuyen)
            store.dispatch(FETCH_XA_BY_MA_HUYEN, maHuyen)
        })
        watch(() => diachi.ma_xa, (maXa) => {
            store.commit(SET_MA_XA, maXa)
            store.dispatch(PHI_GIAO_HANG)
        })
        const schema = Yup.object().shape({
            ho: Yup.string()
                .min(2, "Họ ít nhất 2 ký")
                .required("Vui lòng nhập vào họ của bạn"),
            ten: Yup.string()
                .min(3, "Tên ít nhất 3 ký tự")
                .required("Vui lòng nhập vào tên của bạn"),
            so_dien_thoai:
                Yup.string()
                    .min(10, "Số điện thoại không hợp lệ")
                    .max(11, "Số điện thoại không hợp lệ")
                    .required("Vui lòng nhập vào số điện thoại"),
            email: Yup.string(),
            dia_chi: Yup.string()
                .min(5, "Địa chỉ ít nhất 5 ký tự")
                .required("Vui lòng nhập vào chi tiết địa chỉ để shipper dễ dàng giao hàng"),
        });

        const submitForm = values => {
            const thongtin = Object.assign(Object.assign(values, form), diachi);
            if(thongtin.ma_xa !== null && thongtin.ma_huyen !== null && thongtin.ma_tinh !== null)  {
                const giohang = computed(() => store.getters.giohangs)

                if(thongtin.phuong_thuc_thanh_toan === "1") {
                    localStorage.setItem(LUU_THONG_TIN_DAT_HANG, JSON.stringify(thongtin));
                    localStorage.setItem(LUU_THONG_TIN_GIO_HANG, JSON.stringify(giohang.value));

                    store.dispatch(MAKE_PAYMENT, {
                        ma_don_hang: randomOrderId(),
                        tong_tien: form.tong_tien
                    })
                } else {
                    store.dispatch(CREATE_NEW_ORDER, {
                        thongtin,
                        giohang
                    })
                }
            } else {
                alert("Vui lòng chọn thông tin xã")
            }
        }

        return {
            breadcrumbs,
            diachi,
            tinhs,
            huyens,
            xas,
            form,
            schema,
            submitForm,
            VNDFormat,
        }
    }
}
</script>

<style scoped>

input.form-control {
    padding: 20px 15px !important;
    box-shadow: none;
    transition: all .3s linear;
}
input.form-control:focus {
    border-color: #d27f7c;
}
textarea.form-control,
select.form-control{
    border-radius: 0;
    border: 1px solid #dddddd;
}
.form-control:focus {
    outline: none;
    box-shadow: none;
}
select.form-control {
    height: 42px;
}
.text-sm {
    font-size: 13px;
    font-weight: lighter;
}
.checkout__wrapper {
    margin-bottom: 20px;
}
.checkout__container {
    padding: 10px 20px;
    color: #333;
}
.checkout__header {
    font-size: 17px;
    margin-bottom: 20px;
    color: #686868;
}
.checkout__group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.checkout__group--value {
    font-size: 18px;
    font-weight: bold;
}
.total-price {
    font-size: 20px;
    color: #d9534f;
}
.checkout__type--header {
    margin-top: 20px;
    font-size: 17px;
    color: #686868;
}

.checkout__type--formcheck {
    display: flex;
}
.checkout__type--formcheck input {
    margin-right: 10px;
}
.checkout__type--formcheck input:focus {
    outline: none;
    padding: 5px;
}
.btn__checkout {
    width: 100%;
    margin-top: 20px;
    display: block;
    background-color: #d9534f;
    color: #fff;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
}
</style>
