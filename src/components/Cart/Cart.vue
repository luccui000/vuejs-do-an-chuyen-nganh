<template>
    <div class="minicart-block">
        <div class="minicart-contain">
             <a class="link-to">
                <span class="icon-qty-combine">
                    <i class="icon-cart-mini biolife-icon"></i>
                    <span class="qty">{{ totalItem }}</span>
                </span>
                <span class="title">Giỏ hàng </span>
                <span class="sub-total">{{ totalPrice }}</span>
            </a>
            <div class="cart-content">
                <div class="cart-inner">
                    <ul v-for="cart in carts" :key="cart.id" class="products" >
                        <CartItem :cart="cart" />
                    </ul>
                    <p class="btn-control">
                        <router-link to="/gio-hang" class="btn view-cart">Xem giỏ hàng</router-link>
                        <router-link href="/thanh-toan" class="btn">Thanh toán</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';
import CartItem from '@/components/Cart/CartItem';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    setup() {
        const store = useStore();
        const carts = computed(() => store.getters.getAllCarts);
        const totalPrice = computed(() => store.getters.giohangs)
        const totalItem = computed(() => store.getters.getTotalItems);

        return {
            carts,
            totalPrice,
            totalItem
        }
    }
};
</script>

<style scoped>
.products {
    overflow: hidden;
    outline: none;
}
</style>
