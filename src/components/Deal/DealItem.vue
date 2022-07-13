<template>
    <div class="contain-product deal-layout contain-product__deal-layout">
        <div class="product-thumb">
            <a href="#" class="link-to-product" tabindex="0">
                <img :src="sanpham.hinh_anh" alt="dd" width="330" height="330" class="product-thumnail">
            </a>
            <div class="labels">
                <span class="sale-label">-50%</span>
            </div>
        </div>
        <div class="info">
            <div class="biolife-countdown" data-datetime="2022/07/29 10:00:00">
                <span class="days">
                    <span class="number">00</span>
                    <span class="text">Ngày</span>
                </span>
                <span class="hours">
                    <span class="number">00</span>
                    <span class="text">Giờ</span>
                </span>
                <span class="mins">
                    <span class="number">00</span>
                    <span class="text">Phút</span>
                </span>
                <span class="secs">
                    <span class="number">00</span>
                    <span class="text">Giây</span>
                </span>
            </div>
            <b class="categories">{{ sanpham.danhmuc.ten_dm }}</b>
            <h4 class="product-title">
                <router-link :to="sanpham.slug">{{ sanpham.ten_sp }}</router-link>
            </h4>
            <div class="price ">
                <ins><span class="price-amount">{{ sanpham.gia_khuyen_mai }}</span></ins>
                <del><span class="price-amount">{{ sanpham.gia_sp }}</span></del>
            </div>
            <div class="slide-down-box">
                <p class="message">{{ sanpham.mo_ta_ngan }}</p>
                <div class="buttons">
                    <a href="#" class="btn wishlist-btn" tabindex="0"><i class="fa fa-heart" aria-hidden="true"></i></a>
                    <a href="#" class="btn add-to-cart-btn btn-danger" tabindex="0">Thêm vào giỏ hàng</a>
                    <a href="#" class="btn compare-btn" tabindex="0"><i class="fa fa-random" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DealItem',
    props: ['sanpham']
};
</script>

<style scoped>
.contain-product {
    height: 639px;
    position: relative;
}
.buttons {
    position: absolute;
    bottom: 10px;
    left: 0;
}
</style>