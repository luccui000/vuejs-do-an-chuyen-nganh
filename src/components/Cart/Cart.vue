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
                        <RouterLink to="/gio-hang" class="btn view-cart">Xem giỏ hàng</RouterLink>
                        <a href="/gio-hang" class="btn">Thanh toán</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/Cart/CartItem';
import { computed } from 'vue'
import { useStore } from 'vuex';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    setup() {
        const store = useStore();
        const carts = computed(() => store.getters.getAllCarts);
        const totalPrice = computed(() => store.getters.getTotalPrice);
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