<template>
    <li class="product-item col-lg-3 col-md-3 col-sm-4 col-xs-6">
        <div class="contain-product layout-default">
            <div class="product-thumb">
                <a href="#" class="link-to-product">
                    <img :src="fsanpham.hinh_anh" alt="dd" width="270" height="270" class="product-thumnail">
                </a>
            </div>
            <div class="info">
                <b class="categories">{{ fsanpham.danhmuc.ten_dm }}</b>
                <h4 class="product-title">
                    <RouterLink :to="fsanpham.slug" class="pr-name">{{ fsanpham.ten_sp }}</RouterLink>
                </h4>
                <div class="price">
                    <ins><span class="price-amount">{{ fsanpham.gia_khuyen_mai }}</span></ins>
                    <del><span class="price-amount">{{ fsanpham.gia_sp }}</span></del>
                </div>
                <div class="shipping-info">
                    <p class="shipping-day">Giao hàng trong 3 ngày</p>
                    <p class="for-today">Miễn phí mua lần đầu</p>
                </div>
                <div class="slide-down-box">
                    <p class="message">{{ fsanpham.mo_ta_ngan }}</p>
                    <div class="buttons">
                        <a href="#" class="btn wishlist-btn"><i class="fa fa-heart" aria-hidden="true"></i></a>
                        <a @click="themVaoGioHang" class="btn add-to-cart-btn">
                            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            Thêm vào giỏ hàng
                        </a>
                        <a href="#" class="btn compare-btn"><i class="fa fa-random" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

import { VNDFormat } from "@/utils/helpers";

export default {
    name: "SanPham",
    props: ["sanpham"],
    emits: ['themvaogiohang'],
    setup(props, context) {
        const fsanpham = {
            ...props.sanpham,
            gia_sp: VNDFormat(props.sanpham.gia_sp),
            gia_khuyen_mai: VNDFormat(props.sanpham.gia_khuyen_mai),
        }
        const themVaoGioHang = () => {
            context.emit('themvaogiohang', props.sanpham.id);
        }
        return {
            fsanpham,
            themVaoGioHang
        }
    }
};
</script>

<style scoped>

</style>