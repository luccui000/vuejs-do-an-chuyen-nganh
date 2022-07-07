<template>
    <div class="container">
        <tab-left-wrapper>
            <tab-left-item title="Thông tin khách hàng">
                <p>Xin chào <b>{{ hotenkh }}</b></p>
                <p>Số điện thoại: <b>{{ khachhang.so_dien_thoai }}</b></p>
                <p>Tên đăng nhập: <b>{{ khachhang.ten_dang_nhap }}</b></p>
                <p>Email: <b>{{ khachhang.email }}</b></p>
            </tab-left-item>
            <tab-left-item title="Theo dõi đơn hàng">
                Tab Theo dõi đơn hàng
            </tab-left-item>
            <tab-left-item title="Cập nhật tài khoản">
                Cập nhật tài khoản
            </tab-left-item>
        </tab-left-wrapper>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from "vue-router";
import TabLeftWrapper from "@/components/TabLeft/TabLeftWrapper";
import TabLeftItem from "@/components/TabLeft/TabLeftItem";

export default {
    name: "ThongTinCaNhan",
    components: {
        TabLeftWrapper,
        TabLeftItem,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        const khachhang = computed(() => store.state.auth.khachhang);
        const requiredAuth = computed(() => route.meta.requiredAuth)
        const authenticated = computed(() => store.getters.authenticated);
        const hotenkh = computed(() => store.getters.hotenkh);


        if(requiredAuth.value && !authenticated.value)
            router.push("/dang-nhap")

        return {
            khachhang,
            hotenkh,
        }
    }
}
</script>

<style scoped>

</style>
