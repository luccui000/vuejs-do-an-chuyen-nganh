<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <LBreadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <div v-if="sanpham">
            <div class="row">
                <div class="col-6">
                    <div class="media">
                        <img :src="sanpham.hinh_anh" width="600" height="600" class="product-thumbnail">
                    </div>
                </div>
                <div class="col-6">
                    <div class="product-attribute">
                        <h3 class="title">{{ sanpham.ten_sp }}</h3>
                        <div class="rating">
                            <StarRating :star-size="20" :rating="sanpham.danhgias_avg_so_sao" :show-rating="false" :read-only="true" />
                            <span class="review-count">({{ sanpham.danhgias_count }} đánh giá)</span>
                            <span class="qa-text">Q&amp;A</span>
                            <b class="category">By: Natural food</b>
                        </div>
                        <span class="sku">Sku: #{{ sanpham.ma_sp }}</span>
                        <p class="excerpt">{{ sanpham.mo_ta_ngan }}</p>
                        <div class="price">
                            <ins><span class="price-amount">{{ VNDFormat(sanpham.gia_khuyen_mai)  }}</span></ins>
                            <del><span class="price-amount">{{ VNDFormat(sanpham.gia_sp) }}</span></del>
                        </div>
                        <div class="quantity-box">
                            <span class="qty-label">Số lượng</span>
                            <div class="qty-input">
                                <input type="text" v-model="qty" min="1" max="20" data-step="1">
                                <a @click="incrementQty" class="qty-btn btn-up cursor-pointer"><i class="fa fa-caret-up" aria-hidden="true"></i></a>
                                <a @click="decrementQty" class="qty-btn btn-down cursor-pointer"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <button @click="themVaoGioHang" class="btn add-to-cart-btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12">
                    <TabWrapper>
                        <Tab title="Mô tả sản phẩm">
                            {{ sanpham.mo_ta_ngan }}
                        </Tab>
                        <Tab title="Thông tin chi tiết">
                            {{ sanpham.mo_ta }}
                        </Tab>
                        <Tab title="Chính sách giao hàng">
                            Chính sách giao hàng
                        </Tab>
                        <Tab title="Đánh giá khách hàng">
                            Đánh giá khách hàng
                        </Tab>
                    </TabWrapper>
                </div>
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRoute} from "vue-router";
import { useStore } from "vuex";
import { ADD_TO_CART, FETCH_SANPHAMS_BY_SLUG } from "@/store/action.type";
import TabWrapper from "@/components/Tab/TabWrapper";
import Tab from "@/components/Tab/Tab";
import { VNDFormat } from "@/utils/helpers";

export default {
    name: "ChiTietSanPham",
    components: { Tab, TabWrapper  },
    setup() {
        const store = useStore();
        const route = useRoute();
        const { slug } = route.params;
        store.dispatch(FETCH_SANPHAMS_BY_SLUG, slug);

        const sanpham = computed(() => store.getters.getChiTietSanPham);

        const qty = ref(1);

        const incrementQty = () => {
            qty.value++;
            if(qty.value > 20)
                qty.value = 20;
        }
        const decrementQty = () => {
            qty.value--;
            if(qty.value < 1)
                qty.value = 1;
        }
        const themVaoGioHang = () => {
            store.dispatch(ADD_TO_CART, {
                sanpham: sanpham.value,
                qty: qty.value
            });
        }
        watch(() => qty.value, (qtyCurr, qtyPrev) => {
            console.log(qtyPrev)
            if(qtyCurr < 1) {
                qty.value = 1;
            }
            if(qtyCurr > 20) {
                qty.value = 20;
            }
        })
        return {
            sanpham,
            qty,
            incrementQty,
            decrementQty,
            themVaoGioHang,
            VNDFormat
        }
    },
    computed: {
        breadcrumbs() {
            return [
                ...this.$route.meta.breadcrumbs,
                {
                    name: this.$store.state.products.sanpham?.ten_sp,
                    url: ""
                }
            ]
        }
    }
}
</script>

<style>
.media .product-thumbnail {
    border-radius: 5px;
}
.product-attribute .title {
    font-size: 20px;
    line-height: 24px;
    color: #222222;
    font-weight: 600;
    display: block;
    margin: 0;
    max-width: 329px;
}
.product-attribute .rating {
    display: flex;
    line-height: 0;
    align-items: center;
    margin: 10px 0;
}
.product-attribute .rating > * {
    margin-right: 10px;
}
.product-attribute .excerpt {
    margin-top: 10px;
}
.product-attribute .price {
    display: block;
    font-size: 30px;
    line-height: 1;
    margin-top: 20px;
}
.product-attribute ins {
    text-decoration: none;
    display: inline-block;
}
.product-attribute .price-amount {
    color: #111111;
    font-weight: 700;
}
.product-attribute .quantity-box {
    margin-top: 10px;

}
.product-attribute .quantity-box .qty-input input {
    background-color: #f3f3f3;
}
.product-attribute .qty-label {
    margin-right: 20px;
}
.product-attribute .add-to-cart-btn {
    margin-top: 10px;
    background-color: #e73918;
    color: #fff;
    font-size: 15px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    border-radius: 999px;
    border: none;
    padding: 10px 20px;
}
.product-attribute .add-to-cart-btn:hover {
    background-color: #e18170;
    color: #fff;
}
.product-attribute .add-to-cart-btn:focus {
    outline: none !important;
    color: #fff;
    box-shadow: none;
}

.product-attribute .price del .price-amount {
    line-height: 24px;
    color: #aaaaaa;
    font-size: 20px;
    display: inline-block;
    font-weight: 600;
    text-decoration: line-through;
    margin-left: 10px;
}
</style>