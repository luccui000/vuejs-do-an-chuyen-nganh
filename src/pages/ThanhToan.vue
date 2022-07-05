<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <LBreadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <Form class="row" @submit="submitForm" :validation-schema="schema">
            <div class="col-8">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="ho">Họ <span class="text-danger">*</span></label>
                            <Field id="ho" name="ho" type="text" class="form-control" />
                            <ErrorMessage name="ho" class="text-sm text-danger" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="ten">Tên <span class="text-danger">*</span></label>
                            <Field id="ten" name="ten" type="text" class="form-control" />
                            <ErrorMessage name="ten" class="text-sm text-danger" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Số điện thoại <span class="text-danger">*</span></label>
                            <Field id="so_dien_thoai" name="so_dien_thoai" type="text" class="form-control" placeholder="Nhập số điện thoại" />
                            <ErrorMessage name="so_dien_thoai" class="text-sm text-danger" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="email">Email </label>
                            <Field id="email" name="email" type="text" class="form-control" placeholder="Nhập số điện thoại" />
                            <ErrorMessage name="email" class="text-sm text-danger" />
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
                            <select v-model="form.ma_huyen" class="form-control" @change="handleHuyenChange">
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
                            <Field id="dia_chi" name="dia_chi" type="text" class="form-control" placeholder="Nhập vào địa chỉ chi tiết" />
                            <ErrorMessage name="dia_chi" class="text-sm text-danger" />
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
            <div class="col-4 checkout-view">
                <div class="checkout__container">
                    <h4>Giỏ hàng</h4>
                    <div class="calc__price--group">
                        <div class="calc__price--label">Thành tiền</div>
                        <div class="calc__price--value">{{ VNDFormat(form.thanh_tien) }}</div>
                    </div>
                    <div class="calc__price--group">
                        <div class="calc__price--label">Phí giao hàng</div>
                        <div class="calc__price--value">{{ VNDFormat(form.phi_giao_hang) }}</div>
                    </div>
                    <hr>
                    <div class="calc__price--group">
                        <div class="calc__price--label">Tổng tiền</div>
                        <div class="calc__price--value">{{ VNDFormat(form.tong_tien) }}</div>
                    </div>
                    <h5>Phương thức thanh toán</h5>
                    <div class="form-check">
                        <input v-model="form.phuong_thuc_thanh_toan" value="0" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"  checked>
                        <label class="form-check-label cursor-pointer" for="exampleRadios1">
                            Thanh toán khi nhận hàng
                        </label>
                    </div>
                    <div class="form-check">
                        <input v-model="form.phuong_thuc_thanh_toan" value="1" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2">
                        <label class="form-check-label cursor-pointer" for="exampleRadios2">
                            Thẻ tín dụng
                        </label>
                    </div>
                    <button class="btn__checkout cursor-pointer">
                        Thanh toán
                    </button>
                </div>
            </div>
        </Form>
        <button @click="testSubmitForm">testSubmitForm</button>
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
    SET_MA_TINH,
    FETCH_XA_BY_MA_HUYEN,
    RESET_XA_DATA,
    CALC_PHI_GIAO_HANG,
    // CREATE_NEW_ORDER,
    MAKE_ORDER_DETAIL, CREATE_NEW_ORDER
} from "@/store/action.type";
import { VNDFormat } from "@/utils/helpers";

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
        const thongtinshipping = computed(() => store.state.shipping.thongtinshipping);
        form.thanh_tien = computed(() => store.getters.tongtien);

        watch(() => form.phi_giao_hang, () => {
            form.tong_tien = form.thanh_tien + form.phi_giao_hang;
        });

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

        const handleTinhChange = (id) => {
            store.commit(SET_MA_TINH, id)
            store.dispatch(FETCH_HUYEN_BY_MA_TINH, id)
            store.commit(RESET_XA_DATA)
        }
        const handleHuyenChange = (event) => {
            store.dispatch(FETCH_XA_BY_MA_HUYEN, event.target.value)
        }
        const handleXaChange = () => {
            const payload = {
                ma_tinh_thanh: form.ma_tinh,
                ma_quan_huyen: form.ma_huyen,
                ma_phuong_xa: form.ma_xa
            }
            store.dispatch(CALC_PHI_GIAO_HANG, payload);
            form.phi_giao_hang = thongtinshipping.value.total;
        }
        const submitForm = values => {
            const payload = Object.assign(values, form)
            store.dispatch(CREATE_NEW_ORDER, payload)
        }
        const testSubmitForm = () => {
            store.dispatch(MAKE_ORDER_DETAIL, 4)
        }


        return {
            breadcrumbs,
            tinhs,
            huyens,
            xas,
            form,
            schema,
            handleTinhChange,
            handleHuyenChange,
            handleXaChange,
            submitForm,
            testSubmitForm,
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
textarea.form-control,
select.form-control{
    border-radius: 0;
}
select.form-control {
    height: 42px;
}
.checkout-container hr {
    margin: 10px 0;
}
.checkout__container {
    background-color: #f5f5f5;
    padding: 10px 20px;
    color: #333;
    font-family: 'Nunito', sans-serif;
}
.checkout__container h4 {
    margin-bottom: 20px;
    font-size: 20px;
    text-align: right;
}
.checkout__container h5 {
    font-size: 20px;
    margin: 20px 0;
}
.calc__price--group {
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    margin: 6px 0;
    text-transform: uppercase;
}
.btn__checkout {
    display: block;
    background-color:#d9534f;
    color: #fff;
    padding: 10px;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
}
.text-sm {
    font-size: 13px;
    font-weight: lighter;
}
</style>
