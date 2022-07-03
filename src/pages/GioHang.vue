<template>
    <div class="hero-section hero-background" :style="{ 'background-image': `url(${require('@/assets/images/hero_bg.jpg')})`}">
        <h1 class="page-title">Trang giỏ hàng</h1>
    </div>
    <div class="container shopping-cart-container mt-2">
        <nav class="biolife-nav">
            <ul>
                <li class="nav-item">
                    <RouterLink to="/" class="permal-link">Trang chủ</RouterLink>
                </li>
                <li class="nav-item"><span class="current-page">Giỏ hàng</span></li>
            </ul>
        </nav>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h3 class="box-title">Giỏ hàng của bạn</h3>
                <table class="shop_table cart-form">
                    <thead>
                        <tr>
                            <th class="product-name">Tên sản phẩm</th>
                            <th class="product-price">Giá bán</th>
                            <th class="product-quantity">Số lượng</th>
                            <th class="product-subtotal">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartRow
                            v-for="cart in carts"
                            :key="cart.id"
                            :cart="cart"
                            @thaydoisoluong="thayDoiSoLuong"
                        />
                    </tbody>
                </table>
                <div class="d-flex justify-content-between mt-3">
                    <RouterLink to="/" class="btn btn-danger btn-back">
                      Trở về trang chủ
                    </RouterLink>
                    <button @click="removeAllCart" class="btn btn-default btn-back">Xóa tất cả</button>
                </div>
                <div class="subtotal-line">
                    <b class="stt-name">Tạm tính <span class="sub">({{ totalItem }} sp)</span></b>
                    <span class="stt-price">{{ VNDFormat(totalPrice) }}</span>
                </div>
                <p class="my-2">Chọn dịch vụ giao hàng</p>
                <div class="subtotal-line">
                    <b class="stt-name">Tiêu chuẩn</b>
                    <span class="stt-price">0đ - {{ VNDFormat(50000) }}</span>
                </div>
                <RouterLink :to="{ name: 'ThanhToan' }" class="btn btn-danger btn-block mt-4">
                    Tiến hành đặt hàng
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import CartRow from "@/pages/GioHang/CartRow"
import { VNDFormat } from "@/utils/helpers";

import {
    REMOVE_ALL_CART_ITEM,
    UPDATE_CART_QTY
} from "@/store/action.type";

export default {
    name: "GioHang",
    components: { CartRow },
    setup() {
        const store = useStore();
        const route = useRoute();
        const carts = computed(() => store.getters.getAllCarts);
        const totalItem = computed(() => store.getters.getTotalItems)
        const totalPrice = computed(() => store.getters.getTotalPrice)
        const breadcrumbs = computed(() => route.meta.breadcrumbs)

        const thayDoiSoLuong = (payload) => {
            store.dispatch(UPDATE_CART_QTY, payload)
        }
        const removeAllCart = () => {
           store.dispatch(REMOVE_ALL_CART_ITEM)
        }

        return {
            carts,
            breadcrumbs,
            removeAllCart,
            thayDoiSoLuong,
            totalItem,
            totalPrice,
            VNDFormat
        }
    }
}
</script>

<style scoped>
    .prd-thumb figure img {
        border-radius: 5px;
    }
    .btn-back {
        padding: 10px 20px;
        border-radius: 25px;
        border: 1px solid transparent;
        font-size: 17px;
    }
</style>
