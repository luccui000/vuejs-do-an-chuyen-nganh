<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 product__top">
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
                            <div class="wrap-selectors">
                                <select
                                    class="form-control product-sorting"
                                    v-model="filter.nhacungcap_id"
                                >
                                    <option
                                        v-for="ncc in nhacungcaps"
                                        :key="ncc.id"
                                        :value="ncc.id"
                                    >
                                        {{ ncc.ten_ncc }}
                                    </option>
                                </select>
                            </div>
                            <div class="wrap-selectors">
                                <select
                                    class="form-control product-sorting"
                                    v-model="filter.danhmuc_id"
                                >
                                    <option
                                        v-for="dm in danhmucs"
                                        :key="dm.id"
                                        :value="dm.id"
                                    >
                                        {{ dm.ten_dm }}
                                    </option>
                                </select>
                            </div>
                            <button @click="resetFilter" class="btn btn__reset">Làm mới</button>
                        </div>
                        <div class="flt-item to-right">
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
import { computed, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import TopSanPhamItem from "@/components/DanhSachSanPham/TopSanPhamItem";
import SanPham from "@/pages/SanPham/SanPham";
import {
    ADD_TO_CART, FETCH_ALL_DANHMUC, FETCH_ALL_NHACUNGCAP,
    FETCH_ALL_SANPHAMS,
    FETCH_SANPHAMS_UUDAI, GET_SAN_PHAM_FROM_DANHMUC, GET_SAN_PHAM_FROM_NHACUNGCAP, GET_SAN_PHAM_FROM_TO,
    ORDER_SAN_PHAM_THEO_GIA, RESET_FILTER
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
        store.dispatch(FETCH_ALL_NHACUNGCAP)
        store.dispatch(FETCH_ALL_DANHMUC)

        const filter = reactive({
            nhacungcap_id: null,
            danhmuc_id: null
        })

        const sanphams = computed(() => store.state.products.sanphams)
        const refSanPham = ref([]);
        const topSanPham = computed(() => store.getters.getSanPhamUuDai);
        const breadcrumbs = computed(() => route.meta.breadcrumbs);
        const nhacungcaps = computed(() => store.state.products.nhacungcaps)
        const danhmucs = computed(() => store.state.products.danhmucs)

        watch(() => filter.nhacungcap_id, (curr) => {
            store.dispatch(GET_SAN_PHAM_FROM_NHACUNGCAP, curr)
        })
        watch(() => filter.danhmuc_id, (curr) => {
            store.dispatch(GET_SAN_PHAM_FROM_DANHMUC, curr)
        })
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
        const resetFilter = () => {
            store.dispatch(RESET_FILTER)
        }
        return {
            breadcrumbs,
            topSanPham,
            sanphams,
            refSanPham,
            handleThemVaoGioHang,
            handlePriceSort,
            getPriceFromTo,
            VNDFormat,
            filter,
            nhacungcaps,
            danhmucs,
            resetFilter
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
.btn__reset {
    border: 2px solid transparent !important;
    border-radius: 20px !important;
    background-color: #d9534f !important;
    color: #fff !important;
}
.btn__reset:focus {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: #d91d17 !important;
}
.product__top .carousel__prev {
    background-color: #f4f4f4;
    transition: background-color .2s linear;
}
.product__top .carousel__next {
    background-color: #f4f4f4;
    transition: background-color .2s linear;
}
.carousel__prev:hover,
.carousel__next:hover{
    background-color: #ccc;
}
</style>
