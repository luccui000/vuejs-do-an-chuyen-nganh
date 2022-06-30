<template>
    <li class="col-lg-3 col-md-3">
        <div class="contain-product layout-default">
            <div class="product-thumb">
                <a href="#" class="link-to-product" tabindex="0">
                    <img :src="product.hinh_anh" :alt="product.ten_sp" width="270" height="270" class="product-thumnail">
                </a>
                <a class="lookup btn_call_quickview" href="#" tabindex="0">
                    <i class="biolife-icon icon-search"></i>
                </a>
            </div>
            <div class="info">
                <b class="categories">{{ product.danhmuc.ten_dm }}</b>
                <h4 class="product-title">
                    <a href="#" class="pr-name" tabindex="0">{{ product.ten_sp }}</a>
                </h4>
                <div class="price ">
                    <ins><span class="price-amount"><span class="currencySymbol">£</span>85.00</span></ins>
                    <del><span class="price-amount"><span class="currencySymbol">£</span>95.00</span></del>
                </div>
                <div class="slide-down-box">
                    <p class="message">{{ product.mo_ta_ngan }}</p>
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
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.contain-product {
    max-width: 270px;
}
</style>