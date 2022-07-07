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
                <DanhSachGioHang :giohangs="giohangs" />
            </div>
        </div>
        <div class="row my-4">
            <div class="col-6"></div>
            <div class="col-6">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-10 calc__price">
                        <h4>Tạm tính</h4>
                        <div class="calc__price--group">
                            <div class="calc__price--label">Thành tiền</div>
                            <div class="calc__price--value">{{ VNDFormat(tongtien) }}</div>
                        </div>
                        <hr>
                        <div class="calc__price--group">
                            <div class="calc__price--label">Tổng tiền</div>
                            <div class="calc__price--value total-price">{{ VNDFormat(tongtien) }}</div>
                        </div>
                        <router-link to="/thanh-toan" class="btn btn__checkout">
                            Thanh toán
                        </router-link>
                    </div>
                </div>
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
        const tongtien = computed(() => store.getters.tongtien);

        const removeAllCart = () => {
           store.dispatch(REMOVE_ALL_CART_ITEM)
        }

        return {
            giohangs,
            breadcrumbs,
            tongtien,
            removeAllCart,
            VNDFormat
        }
    }
}
</script>

<style scoped>
.btn {
    margin: 20px 0;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 20px;
    transition: all .3s linear;
}
.prd-thumb figure img {
    border-radius: 5px;
}
.calc__price {
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
}
.calc__price--value {
    font-weight: bold;
}
.total-price {
    font-size: 25px;
    color: #d9534f;
}
.btn__checkout {
    display: block;
    background-color: #d9534f;
    text-align: center;
    color: #fff;
    font-size: 17px;
}
.btn__checkout:hover {
    color: #fff;
    background-color: #d91d17;
}
</style>
