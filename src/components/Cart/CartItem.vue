<template>
    <li>
        <div class="minicart-item">
            <div class="thumb">
                <RouterLink to="cart.slug">
                    <img :src="cart.hinh_anh" width="90" height="90" alt="National Fresh">
                </RouterLink>
            </div>
            <div class="left-info">
                <div class="product-title">
                    <RouterLink :to="cart.slug" class="product-name">
                        {{ cart.ten_sp }}
                    </RouterLink>
                </div>
                <div class="price">
                    <ins>
                        <span class="price-amount">
                            {{ VNDFormat(cart.gia_khuyen_mai) }}
                        </span>
                    </ins>
                    <del>
                        <span class="price-amount">
                            {{ VNDFormat(cart.gia_sp) }}
                        </span>
                    </del>
                </div>
                <div class="qty">
                    <label for="so_luong">Số lượng: {{ cart.qty }}</label>
                </div>
            </div>
            <div class="action">
                <a @click="deleteCart" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            </div>
        </div>
    </li>
</template>

<script>
import { useStore } from "vuex";
import { REMOVE_CART_ITEM } from "@/store/action.type";
import { VNDFormat } from "@/utils/helpers";


export default {
    name: 'CartItem',
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const store = useStore();
        const deleteCart = () => {
            const cartId = props.cart.id;
            store.dispatch(REMOVE_CART_ITEM, cartId)
        }
        return {
            deleteCart,
            VNDFormat
        }
    }
};
</script>

<style scoped>

</style>