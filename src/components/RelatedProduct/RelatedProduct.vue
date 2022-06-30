<template>
    <div class="biolife-title-box">
        <span class="subtitle">Danh mục nổi bật nhất</span>
        <h3 class="main-title">Sản phẩm đề xuất cho bạn</h3>
    </div>
    <div class="row">
        <div v-for="sanpham in sanphams" :key="sanpham.id" class="col-3">
            <Product :sanpham="sanpham" />
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Product from '@/components/RelatedProduct/Product';
import {
    FETCH_SANPHAMS_LIENQUAN
} from '@/store/action.type';

export default {
    name: "RelatedProduct",
    components: {
        Product
    },
    setup() {
        const store = useStore();
        store.dispatch(FETCH_SANPHAMS_LIENQUAN);
        const sanphams = computed(() => store.getters.getSanPhamLienQuan);

        return {
            sanphams
        }
    }
}
</script>

<style scoped>
.biolife-title-box {
    margin: 40px 0
}

</style>