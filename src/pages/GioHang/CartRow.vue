<template>
    <tr class="cart_item">
        <td class="product-thumbnail" data-title="Product Name">
            <RouterLink :to="cart.slug" class="prd-thumb">
                <figure>
                    <img width="113" height="113" :src="cart.hinh_anh" alt="shipping cart">
                </figure>
            </RouterLink>
            <RouterLink :to="cart.slug" class="prd-name">
                {{ cart.ten_sp }}
            </RouterLink>
            <div class="action">
                <a href="#" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                <a href="#" class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            </div>
        </td>
        <td class="product-price" data-title="Price">
            <div class="price price-contain">
                <ins><span class="price-amount">{{ VNDFormat(cart.gia_khuyen_mai) }}</span></ins>
                <del><span class="price-amount">{{ VNDFormat(cart.gia_sp) }}</span></del>
            </div>
        </td>
        <td class="product-quantity" data-title="Quantity">
            <div class="quantity-box type1">
                <div class="qty-input">
                    <input type="text" :value="cart.qty" data-step="1" readonly>
                    <a @click="incrementQty" class="qty-btn btn-up cursor-pointer"><i class="fa fa-caret-up" aria-hidden="true"></i></a>
                    <a @click="decrementQty" class="qty-btn btn-down cursor-pointer"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
                </div>
            </div>
        </td>
        <td class="product-subtotal" data-title="Total">
            <div class="price price-contain">
                <ins>
                    <span class="price-amount">{{ VNDFormat(cart.gia_khuyen_mai * cart.qty)  }}</span>
                </ins>
            </div>
        </td>
    </tr>
</template>

<script>
import { VNDFormat } from "@/utils/helpers";

export default {
    name: "CartRow",
    props: ["cart"],
    setup(props, { emit }) {

        const updateQty = () => {
            // store.dispatch()
        }
        const incrementQty = () => {
            if(props.cart.qty < props.cart.tonkhos[0].so_luong) {
                emit('thaydoisoluong', {
                    id: props.cart.id,
                    qty: 1
                })
            }
        }
        const decrementQty = () => {
            if(props.cart.qty > 1) {
                emit('thaydoisoluong', {
                    id: props.cart.id,
                    qty: -1
                })
            }
        }
        return {
            VNDFormat,
            updateQty,
            incrementQty,
            decrementQty
        }
    }
};
</script>

<style scoped>

</style>
