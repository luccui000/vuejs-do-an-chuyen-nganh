<template>
    <li class="product-item" style="width: 100%; display: inline-block;">
            <div class="contain-product layout-default" style="height: 377.688px;">
                <div class="product-thumb">
                    <router-link :to="sanpham.slug" class="link-to-product">
                        <img :src="sanpham.hinh_anh" alt="Vegetables" class="product-thumnail">
                    </router-link>
                    <a class="lookup btn_call_quickview" href="#" tabindex="0"><i class="biolife-icon icon-search"></i></a>
                </div>
                <div class="info">
                    <b class="categories">{{ sanpham.danhmuc.ten_dm }}</b>
                    <h4 class="product-title">
                        <router-link :to="sanpham.slug" class="pr-name">
                            {{ sanpham.ten_sp }}
                        </router-link>
                    </h4>
                    <div class="price ">
                        <ins><span class="price-amount">{{ sanpham.gia_khuyen_mai }}</span></ins>
                        <del><span class="price-amount">{{ sanpham.gia_sp }}</span></del>
                    </div>
                    <div class="slide-down-box">
                        <p class="message">{{ sanpham.mo_ta_ngan }}</p>
                        <div class="buttons">
                            <a href="#" class="btn wishlist-btn" tabindex="0"><i class="fa fa-heart" aria-hidden="true"></i></a>
                            <a href="#" class="btn add-to-cart-btn" tabindex="0"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</a>
                            <a href="#" class="btn compare-btn" tabindex="0"><i class="fa fa-random" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
</template>

<script>
export default {
    name: "Product",
    props: ["sanpham"],
    setup() {

    }
}
</script>

<style scoped>
.product-thumnail {
    width: 270px !important;
}
</style>