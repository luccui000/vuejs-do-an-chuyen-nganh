<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <Carousel :items-to-show="5">
                    <Slide v-for="sanpham in topSanPham" :key="sanpham.id">
                        <TopSanPhamItem :sanpham="sanpham" />
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="row main-content">
            <div class="col-12">
                <div class="product-category grid-style">
                    <div class="top-functions-area">
                        <div class="flt-item to-left">
                            <span class="flt-title">Bộ lọc</span>
                            <div class="wrap-selectors">
                                <form>
                                    <select class="form-select" @change="sortPrice($event.target.value)">
                                        <option value="asc">Giá tăng dần</option>
                                        <option value="desc">Giá giảm dần</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div class="flt-item to-right">
                            <span class="flt-title">Sort</span>
                            <div class="wrap-selectors">
                                <div class="selector-item orderby-selector">
                                    <select name="orderby" class="orderby" aria-label="Shop order" style="display: none;">
                                        <option value="menu_order" selected="selected">Default sorting</option>
                                        <option value="popularity">popularity</option>
                                        <option value="rating">average rating</option>
                                        <option value="date">newness</option>
                                        <option value="price">price: low to high</option>
                                        <option value="price-desc">price: high to low</option>
                                    </select><div class="nice-select orderby" tabindex="0"><span class="current">Default sorting</span><ul class="list"><li data-value="menu_order" class="option selected focus">Default sorting</li><li data-value="popularity" class="option">popularity</li><li data-value="rating" class="option">average rating</li><li data-value="date" class="option">newness</li><li data-value="price" class="option">price: low to high</li><li data-value="price-desc" class="option">price: high to low</li></ul></div>
                                </div>
                                <div class="selector-item viewmode-selector">
                                    <a href="#" class="viewmode grid-mode active"><i class="biolife-icon icon-grid"></i></a>
                                    <a href="#" class="viewmode detail-mode"><i class="biolife-icon icon-list"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <ul class="products-list">
                <SanPham
                    v-for="sanpham in sanphams"
                    :key="sanpham.id"
                    :sanpham="sanpham"
                    @themvaogiohang="handleThemVaoGioHang"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import TopSanPhamItem from "@/components/DanhSachSanPham/TopSanPhamItem";

import {
    FETCH_ALL_SANPHAMS,
    FETCH_SANPHAMS_UUDAI
} from "@/store/action.type";
import SanPham from "@/components/Product/SanPham";

export default {
    name: "DanhSachSanPham",
    components: {
        SanPham,
        TopSanPhamItem,
        Breadcrumb,
        Carousel,
        Slide,
        Navigation,
    },
    setup() {
        const route = useRoute();
        const store = useStore();

        store.dispatch(FETCH_SANPHAMS_UUDAI);
        store.dispatch(FETCH_ALL_SANPHAMS);

        const bolocs = reactive({
            s: "",
            sort: {
                gia_sp: ""
            }
        });
        const refSanPham = ref([]);
        const topSanPham = computed(() => store.getters.getSanPhamUuDai);
        const breadcrumbs = computed(() => route.meta.breadcrumbs);
        const sanphams = computed(() => store.getters.getAllSanPham);

        const handleThemVaoGioHang = (id) => {
            console.log(id)
        }
        const sortPrice = (sortValue) => {
            bolocs.sort.gia_sp = sortValue;
            if(bolocs.sort.gia_sp === "asc" || bolocs.sort.gia_sp === "desc") {
                refSanPham.value = sanphams.value.sort((a, b) => {
                    const cmp = a.gia_sp - b.gia_sp;
                    if(cmp === 0) return 0;
                    const sign = Math.abs(cmp) / cmp;
                    return bolocs.sort.gia_sp === "asc" ? sign : -sign;
                })
            }
        }
        return {
            breadcrumbs,
            topSanPham,
            sanphams,
            bolocs,
            sortPrice,
            handleThemVaoGioHang,
            refSanPham,
        }
    }
};
</script>

<style>
.main-content {
    margin-top: 30px;
}

</style>