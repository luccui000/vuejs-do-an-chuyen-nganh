<template>
    <div class="advance-product-box">
        <div class="biolife-title-box bold-style biolife-title-box__bold-style">
            <h3 class="title my-4">Được mua nhiều nhất</h3>
        </div>
        <div class="row">
            <ul class="products biolife-carousel eq-height-contain nav-center-03 row-space-29px">
                <Carousel :items-to-show="2" >
                    <Slide v-for="(sanphams, idx) in sanphamMuaNhieu" :key="idx">
                        <div class="row-item">
                            <PopularCart
                                v-for="sanpham in sanphams"
                                :key="sanpham.id"
                                :sanpham="sanpham"
                            />
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </ul>
        </div>
        <div class="row">
            <BrandSlider />
        </div>
        <div class="row">
            <ThirdBanner />
        </div>
    </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import PopularCart from '@/components/Product/PopularCart';
import BrandSlider from '@/components/Brand/BrandSlider';
import ThirdBanner from '@/components/Banner/ThirdBanner';
import { useStore } from 'vuex';
import { computed } from "vue";
import { FETCH_SANPHAMS_MUANHIEU } from '@/store/action.type';

export default {
    name: "DealRight",
    components: {
        Carousel,
        Navigation,
        Slide,
        PopularCart,
        BrandSlider,
        ThirdBanner
    },
    setup() {
        const store = useStore();
        store.dispatch(FETCH_SANPHAMS_MUANHIEU);
        const sanphamMuaNhieu = computed(() => store.getters.getSanPhamMuaNhieu);
        console.log(sanphamMuaNhieu)

        return {
            store,
            sanphamMuaNhieu
        }
    }
}
</script>

<style scoped>
.advance-product-box {
    padding-left: 20px;
}
</style>
