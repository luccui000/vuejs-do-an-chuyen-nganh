<template>
    <div class="hero-section hero-background" :style="{ 'background-image': `url(${bgContent})`}">
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
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <h3 class="box-title">Giỏ hàng của bạn</h3>
                <table class="shop_table cart-form">
                    <thead>
                        <tr>
                            <th class="product-name">Tên sản phẩm</th>
                            <th class="product-price">Giá bán</th>
                            <th class="product-quantity">Số lượng</th>
                            <th class="product-subtotal">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartRow v-for="cart in carts" :key="cart.id" :cart="cart" />
                    </tbody>
                </table>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-danger btn-back">Trở về trang chủ</button>
                    <button class="btn btn-default btn-back">Xóa tất cả</button>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div class="shpcart-subtotal-block">
                    <div class="subtotal-line">
                        <b class="stt-name">Subtotal <span class="sub">(2ittems)</span></b>
                        <span class="stt-price">£170.00</span>
                    </div>
                    <div class="subtotal-line">
                        <b class="stt-name">Shipping</b>
                        <span class="stt-price">£0.00</span>
                    </div>
                    <div class="tax-fee">
                        <p class="title">Est. Taxes &amp; Fees</p>
                        <p class="desc">Based on 56789</p>
                    </div>
                    <div class="btn-checkout">
                        <a href="#" class="btn checkout">Check out</a>
                    </div>
                    <div class="biolife-progress-bar">
                        <table>
                            <tbody><tr>
                                <td class="first-position">
                                    <span class="index">$0</span>
                                </td>
                                <td class="mid-position">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td class="last-position">
                                    <span class="index">$99</span>
                                </td>
                            </tr>
                        </tbody></table>
                    </div>
                    <p class="pickup-info"><b>Free Pickup</b> is available as soon as today More about shipping and pickup</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CartRow from "@/components/Cart/CartRow";

export default {
    name: "GioHang",
    components: { CartRow },
    setup() {
        const store = useStore();
        const carts = computed(() => store.getters.getAllCarts);
        const breadcrumbs = ref([
            {
                text: 'Admin',
                href: '#'
            },
            {
                text: 'Manage',
                href: '#'
            },
            {
                text: 'Library',
                active: true
            }
        ]);

        return {
            carts,
            breadcrumbs,
            bgContent: require('@/assets/images/hero_bg.jpg')
        }
    }
}
</script>

<style scoped>
    .prd-thumb figure img {
        border-radius: 5px;
    }
    .btn-back {
        padding: 10px 20px;
        border-radius: 25px;
        border: 1px solid transparent;
        font-size: 17px;
    }
</style>