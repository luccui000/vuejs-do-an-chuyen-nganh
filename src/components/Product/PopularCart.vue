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
                    <a href="#" class="pr-name" tabindex="0">{{ sanpham.ten_sp }}</a>
                </h4>
                <div class="price">
                    <ins>
                        <span class="price-amount">
                            {{ sanpham.gia_khuyen_mai }}
                        </span>
                    </ins>
                    <del>
                        <span class="price-amount">
                            {{ sanpham.gia_so }}
                        </span>
                    </del>
                </div>
                <div class="rating">
                    <p class="star-rating">
                        <span class="width-80percent"></span>
                    </p>
                    <span class="review-count">(05 Reviews)</span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "PopularCart",
    props: ['sanpham']
}
</script>

<style scoped>
.rating {
    text-align: left;
}
</style>