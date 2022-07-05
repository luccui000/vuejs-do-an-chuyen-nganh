<template>
    <div class="container">
        <h3>Đặt hàng thành công</h3>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: "DatHangThanhCong",
    setup() {
        const store = useStore();
        const router = useRouter();

        const DatHangThanhCong = computed(() => store.getters.dathangthanhcong);
        if(!DatHangThanhCong.value)
            router.push("/")
        return {
            DatHangThanhCong
        }
    }
};
</script>

<style scoped>

</style>