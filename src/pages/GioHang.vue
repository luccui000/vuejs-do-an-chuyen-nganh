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
                <DanhSachGioHang :giohangs="giohangs" @thaydoisoluong="handleThayDoiSoLuong" />
                <div class="d-flex justify-content-between mt-3">
                    <RouterLink to="/" class="btn btn__back">Trở về trang chủ</RouterLink>
                    <button
                        @click="removeAllCart"
                        class="btn btn__delete"
                    >Xóa tất cả</button>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-6"></div>
            <div class="col-6 calc__price">
                <h4>Tạm tính</h4>
                <div class="calc__price--group">
                    <div class="calc__price--label">Thành tiền</div>
                    <div class="calc__price--value">{{ VNDFormat(tongtien) }}</div>
                </div>
                <hr>
                <div class="calc__price--group">
                    <div class="calc__price--label">Tổng tiền</div>
                    <div class="calc__price--value">{{ VNDFormat(tongtien) }}</div>
                </div>
                <RouterLink to="/thanh-toan" class="btn__checkout">
                    Thanh toán
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { VNDFormat } from "@/utils/helpers";
import DanhSachGioHang from "@/pages/GioHang/DanhSachGioHang";

import {
    REMOVE_ALL_CART_ITEM,
    UPDATE_CART_QTY
} from "@/store/action.type";

export default {
    name: "GioHang",
    components: {
        DanhSachGioHang
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const breadcrumbs = computed(() => route.meta.breadcrumbs)
        const giohangs = computed(() => store.getters.giohangs);
        const tongtien = computed(() => store.getters.tongtien)

        const handleThayDoiSoLuong = (payload) => {
            store.dispatch(UPDATE_CART_QTY, payload)
        }
        const removeAllCart = () => {
           store.dispatch(REMOVE_ALL_CART_ITEM)
        }

        return {
            giohangs,
            breadcrumbs,
            tongtien,
            removeAllCart,
            handleThayDoiSoLuong,
            VNDFormat
        }
    }
}
</script>

<style scoped>

.prd-thumb figure img {
    border-radius: 5px;
}

.btn__delete {
    margin: 20px 0;
    background-color: #f5f5f5;
    color: #d9534f;
    border-radius: 20px;
}
.btn__back {
    border-radius: 20px;
    margin: 20px 0;
    background-color: transparent;
    color: #d9534f;
    border: 1px solid #d9534f;
    transition: all .3s linear;
}
.btn__back:hover {
    background-color: #d9534f;
    color: #fff;
}
.calc__price {
    background-color: #f5f5f5;
    padding: 10px 20px;
    color: #333;
    font-family: 'Nunito', sans-serif;
}
.calc__price h4 {
    margin-bottom: 20px;
    font-size: 25px;
    text-align: right;
}
.calc__price--group {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 10px 0;
    text-transform: uppercase;
}
.btn__checkout {
    display: block;
    background-color:#d9534f;
    color: #fff;
    padding: 10px;
    margin-top: 30px;
    text-align: center;
}
</style>
