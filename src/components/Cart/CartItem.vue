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
                            {{ cart.gia_sp }}
                        </span>
                    </ins>
                    <del>
                        <span class="price-amount">
                            {{ cart.gia_khuyen_mai }}
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
export default {
    name: 'CartItem',
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    setup() {
        const deleteCart = () => {

        }
        return {
            deleteCart
        }
    }
};
</script>

<style scoped>

</style>