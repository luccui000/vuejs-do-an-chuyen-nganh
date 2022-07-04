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
                    <RouterLink :to="giohang.slug" class="prd-thumb">
                        <figure>
                            <img class="shoping__cart--img" width="113" height="113" :src="giohang.hinh_anh" alt="shipping cart">
                        </figure>
                    </RouterLink>
                    <RouterLink :to="giohang.slug" class="prd-name">
                        {{ giohang.ten_sp }}
                    </RouterLink>
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
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { VNDFormat } from "@/utils/helpers";

export default {
    name: "DanhSachGioHang",
    props: ['giohangs'],
    setup(_, { emit }) {
        const incrementQty = (id, quantity, max) => {
            if(quantity < max) {
                emit('thaydoisoluong', {
                    id,
                    qty: +1
                })
            }
        }
        const decrementQty = (id, quantity) => {
            if(quantity > 1) {
                emit('thaydoisoluong', {
                    id,
                    qty: -1
                })
            }
        }
        return {
            VNDFormat,
            incrementQty,
            decrementQty
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
}
.shoping__cart--img {
    background-color: #f2f3f5;
}
</style>