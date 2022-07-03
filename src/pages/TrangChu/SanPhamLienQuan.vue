<template>
    <div class="biolife-title-box">
        <span class="subtitle">Danh mục nổi bật nhất</span>
        <h3 class="main-title">Sản phẩm đề xuất cho bạn</h3>
    </div>
    <div class="row">
        <div v-for="sanpham in sanphams" :key="sanpham.id" class="col-3">
            <Sanpham :sanpham="sanpham" @themvaogiohang="themVaoGiohang" />
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Sanpham from "@/pages/TrangChu/SanPham";

import {
    ADD_TO_CART,
    FETCH_SANPHAMS_LIENQUAN
} from "@/store/action.type";

export default {
    name: "SanPhamLienQuan",
    components: {
        Sanpham
    },
    setup() {
        const store = useStore();
        store.dispatch(FETCH_SANPHAMS_LIENQUAN);
        const sanphams = computed(() => store.getters.getSanPhamLienQuan);

        const themVaoGiohang = (sanpham) => {
            store.dispatch(ADD_TO_CART, {
                sanpham,
                qty: 1
            })
        }

        return {
            sanphams,
            themVaoGiohang
        }
    }
}
</script>

<style scoped>
.biolife-title-box {
    margin: 40px 0
}
</style>
