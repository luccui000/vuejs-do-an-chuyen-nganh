<template>
    <div class="advance-product-box left">
        <div class="biolife-title-box bold-style biolife-title-box__bold-style">
            <h3 class="title my-4">Ưu đãi hôm nay</h3>
        </div>
        <Carousel :wrap-around="true">
            <template #slides>
                <Slide v-for="sanpham in sanphams" :key="sanpham.id">
                     <DealItem :sanpham="sanpham" />
                </Slide>
            </template>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { computed } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { FETCH_SANPHAMS_UUDAI } from "@/store/action.type";
import DealItem from '@/components/Deal/DealItem';

export default {
    name: "DealLeft",
    components: {
        DealItem,
        Carousel,
        Slide,
        Navigation,
    },
    setup() {
        const store = useStore();
        store.dispatch(FETCH_SANPHAMS_UUDAI);
        const sanphams = computed(() => store.getters.getSanPhamUuDai);

        return {
            sanphams
        }
    }
}
</script>

<style scoped>
.advance-product-box {
    padding-right: 20px;
}
</style>