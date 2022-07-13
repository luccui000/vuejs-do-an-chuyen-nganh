<template>
    <div class="container">
        <div v-if="datHangThanhCong === true">
            Đặt hàng thành công
        </div>
        <div v-else>
            Đặt hàng thất bại
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { CREATE_NEW_ORDER, LUU_THONG_TIN_DAT_HANG, LUU_THONG_TIN_GIO_HANG, MAKE_ORDER } from "@/store/action.type";
import { computed } from "vue";

export default {
    name: "CallbackThanhToan",
    setup() {
        const store = useStore();
        const thongtin = JSON.parse(localStorage.getItem(LUU_THONG_TIN_DAT_HANG));
        const giohang = JSON.parse(localStorage.getItem(LUU_THONG_TIN_GIO_HANG));

        store.dispatch(CREATE_NEW_ORDER, {
            thongtin,
            giohang,
            thanhtoan: 1
        })
    }
};
</script>

<style scoped>

</style>