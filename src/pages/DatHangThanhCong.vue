<template>
    <div class="container text-center">
        <h4 class="">Đặt hàng thành công </h4>
        <h3>Mã đơn hàng: #{{ donVuaDat.ma_don_hang }}</h3>
        <h4 class="mt-1">Họ tên: {{ donVuaDat.ho + " " + donVuaDat.ten }}</h4>
        <h4 class="">Tồng tiền: {{ donVuaDat.tong_tien }}</h4>
        <h4 class="">Ngày đặt: {{ formatDate(donVuaDat.created_at) }}</h4>
    </div>
</template>

<script>

import { useStore } from "vuex";
import { computed } from "vue";

export default {
    name: "DatHangThanhCong",
    setup() {
        const store = useStore();
        const donVuaDat = computed(() => store.getters.donVuaDat)

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        }
        return {
            donVuaDat,
            formatDate
        }
    }
};
</script>

<style scoped>

</style>