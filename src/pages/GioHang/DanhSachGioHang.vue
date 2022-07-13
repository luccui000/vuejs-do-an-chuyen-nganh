<template>
    <table class="shoping__table">
        <thead>
            <tr>
                <th class="shoping__product">Tên sản phẩm</th>
                <th class="">Giá bán</th>
                <th class="">Số lượng</th>
                <th class="shoping__total">Thành tiền</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="giohang in giohangs" :key="giohang.id" class="shoping_cart--item">
                <td class="product-thumbnail" data-title="Product Name">
                    <router-link :to="giohang.slug" class="prd-thumb">
                        <figure>
                            <img class="shoping__cart--img" width="113" height="113" :src="giohang.hinh_anh" alt="shipping cart">
                        </figure>
                    </router-link>
                    <router-link :to="giohang.slug" class="prd-name">
                        {{ giohang.ten_sp }}
                    </router-link>
                </td>
                <td class="product-price" data-title="Price">
                    <div class="price price-contain">
                        <ins><span class="price-amount">{{ VNDFormat(giohang.gia_khuyen_mai) }}</span></ins>
                        <del><span class="price-amount">{{ VNDFormat(giohang.gia_sp) }}</span></del>
                    </div>
                </td>
                <td class="product-quantity" data-title="Quantity">
                    <div class="quantity-box type1">
                        <div class="qty-input">
                            <input type="text" :value="giohang.qty" data-step="1" readonly>
                            <a @click="incrementQty(giohang.id, giohang.qty, giohang.tonkhos[0].so_luong)" class="qty-btn btn-up cursor-pointer"><i class="fa fa-caret-up" aria-hidden="true"></i></a>
                            <a @click="decrementQty(giohang.id, giohang.qty)" class="qty-btn btn-down cursor-pointer"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </td>
                <td class="shoping__total" data-title="Total">
                    <div class="price price-contain">
                        <ins>
                            <span class="price-amount">{{ VNDFormat(giohang.gia_khuyen_mai * giohang.qty)  }}</span>
                        </ins>
                    </div>
                </td>
                <td>
                    <button @click="removeItem(giohang.id)" class="shoping__delete--btn">
                        <i class="fa fa-close"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="d-flex justify-content-between mt-3">
        <router-link to="/" class="btn btn__back">Trở về trang chủ</router-link>
        <button @click="removeAllItem" class="btn btn__delete">Xóa tất cả</button>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { VNDFormat } from "@/utils/helpers";
import {
    REMOVE_ALL_CART_ITEM,
    REMOVE_CART_ITEM,
    UPDATE_CART_QTY
} from "@/store/action.type";

export default {
    name: "DanhSachGioHang",
    props: ['giohangs'],
    setup() {
        const store = useStore();

        const incrementQty = (id, quantity, max) => {
            if(quantity < max) {
                store.dispatch(UPDATE_CART_QTY, {
                    id,
                    qty: +1
                })
            }
        }
        const decrementQty = (id, quantity) => {
            if(quantity > 1) {
                store.dispatch(UPDATE_CART_QTY, {
                    id,
                    qty: -1
                })
            }
        }
        const removeItem = (cartId) => {
            store.dispatch(REMOVE_CART_ITEM, cartId)
        }
        const removeAllItem = () => {
            store.commit(REMOVE_ALL_CART_ITEM)
        }
        return {
            VNDFormat,
            incrementQty,
            decrementQty,
            removeItem,
            removeAllItem
        }
    }
};
</script>

<style scoped>
.shoping__table thead tr th {
    border: 2px solid transparent;
    font-family: "Cairo", sans-serif;
}
.shoping__table thead tr th {
    text-align: center;
    padding: 10px 0;
}
.shoping__table thead tr th.shoping__product,
.shoping__product {
    text-align: left;
}
.shoping__table thead tr th.shoping__total,
.shoping__total {
    text-align: right;
}
.shoping_cart--item {
    border-top: 1px solid #ececec !important;
    border-bottom: 1px solid #ececec !important;
    position: relative;
}
.shoping__cart--img {
    background-color: #f2f3f5;
}
.shoping__delete--btn {
    position: absolute;
    top: 48%;
    right: -50px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    font-size: 15px;
}
.btn {
    margin: 20px 0;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 20px;
    transition: all .3s linear;
}
.btn__delete {
    margin: 20px 0;
    background-color: #f5f5f5;
    border-radius: 20px;
}
.btn__delete:hover {
    color: red;
}
.btn__back {
    background-color: transparent;
    color: #d9534f;
    border: 1px solid #d9534f;
}
.btn__back:hover {
    background-color: #d9534f;
    color: #fff;
}
</style>
