<template>
    <li
        class="product-item px-2" style="width: 100%; display: inline-block;">
        <div class="contain-product right-info-layout contain-product__right-info-layout my-2" style="height: 191px;">
            <div class="product-thumb">
                <a href="#" class="link-to-product" tabindex="0">
                    <img :src="sanpham.hinh_anh" alt="dd" width="270" height="270" class="product-thumnail">
                </a>
            </div>
            <div class="info">
                <b class="categories">{{ sanpham.danhmuc.ten_dm }}</b>
                <h4 class="product-title">
                    <RouterLink :to="sanpham.slug" class="pr-name">
                        {{ sanpham.ten_sp }}
                    </RouterLink>
                </h4>
                <div class="price">
                    <ins>
                        <span class="price-amount">
                            {{ VNDFormat(sanpham.gia_khuyen_mai) }}
                        </span>
                    </ins>
                    <del>
                        <span class="price-amount">
                            {{ VNDFormat(sanpham.gia_sp) }}
                        </span>
                    </del>
                </div>
                <div class="rating">
                    <p class="star-rating">
                        <span class="width-80percent"></span>
                    </p>
                    <span class="review-count">(05 đánh giá)</span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

import { VNDFormat } from "@/utils/helpers";


export default {
    name: "PopularCart",
    props: ['sanpham'],
    setup() {
        return {
            VNDFormat
        }
    }
}
</script>

<style scoped>
.rating {
    text-align: left;
}
</style>
