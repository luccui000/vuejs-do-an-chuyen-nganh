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
                                <select
                                    class="form-control product-sorting"
                                    @change="handlePriceSort"
                                >
                                    <option value="asc">Giá tăng dần</option>
                                    <option value="desc">Giá giảm dần</option>
                                </select>
                            </div>
                            <div class="wrap-selectors">
                                <select
                                    class="form-control product-sorting"
                                    @change="getPriceFromTo"
                                >
                                    <option value="1">
                                        Giá từ {{ VNDFormat(0) }} - {{ VNDFormat(50000) }}
                                    </option>
                                    <option value="2">
                                        Giá từ {{ VNDFormat(50000) }} - {{ VNDFormat(100000) }}
                                    </option>
                                    <option value="3">
                                        Giá từ {{ VNDFormat(100000) }} - {{ VNDFormat(500000) }}
                                    </option>
                                    <option value="4">
                                        Giá từ {{ VNDFormat(500000) }}+
                                    </option>
                                </select>
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
            <ul class="row">
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
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import TopSanPhamItem from "@/components/DanhSachSanPham/TopSanPhamItem";
import SanPham from "@/pages/SanPham/SanPham";
import {
    ADD_TO_CART,
    FETCH_ALL_SANPHAMS,
    FETCH_SANPHAMS_UUDAI, GET_SAN_PHAM_FROM_TO,
    ORDER_SAN_PHAM_THEO_GIA
} from "@/store/action.type";
import { VNDFormat } from "@/utils/helpers";

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

        store.dispatch(FETCH_ALL_SANPHAMS);
        store.dispatch(FETCH_SANPHAMS_UUDAI);


        const sanphams = computed(() => store.state.products.sanphams)
        const refSanPham = ref([]);
        const topSanPham = computed(() => store.getters.getSanPhamUuDai);
        const breadcrumbs = computed(() => route.meta.breadcrumbs);

        const handleThemVaoGioHang = (sanpham) => {
            store.dispatch(ADD_TO_CART, {
              sanpham,
              qty: 1,
            })
        }
        const handlePriceSort = (e) => {
            store.commit(ORDER_SAN_PHAM_THEO_GIA, e.target.value)
        }
        const getPriceFromTo = (e) => {
            switch (e.target.value) {
                case "1":
                    store.dispatch(GET_SAN_PHAM_FROM_TO, {
                        from: 0,
                        to: 50000
                    })
                break;
                case "2":
                    store.dispatch(GET_SAN_PHAM_FROM_TO, {
                        from: 50000,
                        to: 100000
                    })
                    break;
                case "3":
                    store.dispatch(GET_SAN_PHAM_FROM_TO, {
                        from: 100000,
                        to: 500000
                    })
                    break;
                case "4":
                    store.dispatch(GET_SAN_PHAM_FROM_TO, {
                        from: 500000,
                        to: 999999999999
                    })
                    break;
                default:
                    store.dispatch(GET_SAN_PHAM_FROM_TO, {
                        from: 0,
                        to: 999999999999
                    })
                    break;
            }
        }

        return {
            breadcrumbs,
            topSanPham,
            sanphams,
            refSanPham,
            handleThemVaoGioHang,
            handlePriceSort,
            getPriceFromTo,
            VNDFormat
        }
    }
};
</script>

<style>
.main-content {
    margin-top: 30px;
}
select.product-sorting {
    box-shadow: none;
    border: 2px solid #ccc;
    padding: 2px 20px;
    border-radius: 20px;
}
select.product-sorting:focus {
    box-shadow: none;
    border-color: #dddddd;
}
.wrap-selectors {
    margin: 0 10px;
}
</style>
