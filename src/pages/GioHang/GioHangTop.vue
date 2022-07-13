<template>
    <div class="minicart-block">
        <div class="minicart-contain">
            <a class="link-to">
                <span class="icon-qty-combine">
                    <i class="icon-cart-mini biolife-icon"></i>
                    <span class="qty">{{ soluong }}</span>
                </span>
                <span class="title">Giỏ hàng </span>
                <span class="sub-total">{{ VNDFormat(tongtien) }}</span>
            </a>
            <div class="cart-content">
                <div class="cart-inner">
                    <ul class="products" >
                        <li v-for="giohang in giohangs" :key="giohang.id">
                            <div class="minicart-item">
                                <div class="thumb">
                                    <RouterLink :to="giohang.slug">
                                        <img :src="giohang.hinh_anh" width="90" height="90" alt="National Fresh">
                                    </RouterLink>
                                </div>
                                <div class="left-info">
                                    <div class="product-title">
                                        <RouterLink :to="giohang.slug" class="product-name">
                                            {{ giohang.ten_sp }}
                                        </RouterLink>
                                    </div>
                                    <div class="price">
                                        <ins>
                                            <span class="price-amount">
                                                {{ VNDFormat(giohang.gia_khuyen_mai) }}
                                            </span>
                                        </ins>
                                        <del>
                                            <span class="price-amount">
                                                {{ VNDFormat(giohang.gia_sp) }}
                                            </span>
                                        </del>
                                    </div>
                                    <div class="qty">
                                        <label for="so_luong">Số lượng: {{ giohang.qty }}</label>
                                    </div>
                                </div>
                                <div class="action">
                                    <a @click="handleDeleteCartItem(giohang.id)" class="remove cursor-pointer">
                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p class="btn-control">
                        <router-link to="/gio-hang" class="btn view-cart">Xem giỏ hàng</router-link>
                        <router-link to="/thanh-toan" class="btn">Thanh toán</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { VNDFormat } from "@/utils/helpers";
import { REMOVE_CART_ITEM } from "@/store/action.type";

export default {
    name: "GioHangTop",
    setup() {
        const store = useStore();
        const giohangs = computed(() => store.getters.giohangs)
        const tongtien = computed(() => store.getters.tongtien)
        const soluong = computed(() => store.getters.soluong)

        const handleDeleteCartItem = (cartId) => {
            store.commit(REMOVE_CART_ITEM, cartId)
        }

        return {
            giohangs,
            tongtien,
            soluong,
            VNDFormat,
            handleDeleteCartItem
        }
    }
};
</script>

<style scoped>

</style>