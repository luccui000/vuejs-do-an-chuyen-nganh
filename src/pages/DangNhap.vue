<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <LBreadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="signin-container">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-row">
                            <label for="fid-name">Địa chỉ email<span class="requite">*</span></label>
                            <input v-model="formData.email" type="email" class="txt-input">
                            <div v-if="inFocusEmail">
                                <span class="text-sm text-danger" v-for="error in v$.email.$silentErrors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                            </div>
                        </div>
                        <div class="form-row">
                            <label for="fid-pass">Mật khẩu<span class="requite">*</span></label>
                            <input v-model="formData.password" type="password" class="txt-input">
                            <div v-if="inFocusPassword">
                                <span class="text-sm text-danger" v-for="error in v$.password.$silentErrors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                            </div>
                        </div>
                        <span class="text-sm text-danger" v-show="isLoginError">
                            {{ loginErrorMessage }}
                        </span>
                        <p class="form-row wrap-btn">
                            <button class="btn btn-submit btn-bold" type="submit">Đăng nhập</button>
                            <a href="#" class="link-to-help">Quên mật khẩu</a>
                        </p>
                    </form>
                </div>
            </div>

            <!--Go to Register form-->
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="register-in-container">
                    <div class="intro">
                        <h4 class="box-title">Bạn chưa có tài khoản?</h4>
                        <p class="sub-title">Tạo tài khoản tại FRUITS MART bạn sẽ có cơ hội:</p>
                        <ul class="lis">
                            <li>Thanh toán nhanh hơn</li>
                            <li>Xem chi tiết lịch sử đơn hàng</li>
                            <li>Theo dõi đơn hàng</li>
                            <li>Thêm sản phẩm yêu thích</li>
                        </ul>
                        <RouterLink :to="{ name: 'DangKy' }" class="btn btn-bold">Tạo tài khoản</RouterLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from "vue-router";
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators'
import { LOGIN_KHACHHANG } from "@/store/action.type";
import { useStore } from "vuex";

export default {
    name: "DangNhap",
    setup() {
        const route = useRoute();
        const store = useStore();
        const breadcrumbs = computed(() => route.meta.breadcrumbs);
        const inFocusEmail = ref(false);
        const inFocusPassword = ref(false);
        const isLoginError = computed(() => store.state.auth.error);
        const loginErrorMessage = computed(() => store.state.auth.error_message);
        console.log(isLoginError)
        console.log(loginErrorMessage)

        const formData = reactive({
            email: 'minhluc@gmail.com',
            password: 'Pass@123'
        });
        const rules = {
            email: {
                required: helpers.withMessage('Vui lòng nhập vào email', required),
                email: helpers.withMessage('Email không hợp lệ', email)
            },
            password: {
                required: helpers.withMessage('Vui lòng nhập vào mật khẩu', required)
            }
        }
        const v$ = useVuelidate(rules, formData);

        const handleSubmit = () => {
            if(!v$.value.email.$silentErrors.length &&
                !v$.value.password.$silentErrors.length) {
                store.dispatch(LOGIN_KHACHHANG, formData)
            }
        }

        watch(() => formData.email, (curr) => {
            if(curr.length > 5)
                inFocusEmail.value = true
        })
        watch(() => formData.password, (curr) => {
            if(curr.length)
                inFocusPassword.value = true
        })

        return {
            inFocusEmail,
            inFocusPassword,
            breadcrumbs,
            handleSubmit,
            formData,
            v$,
            isLoginError,
            loginErrorMessage
        }
    }
}
</script>

<style scoped>
.signin-container,
.register-in-container {
    margin-top: 0px !important;
}
</style>
