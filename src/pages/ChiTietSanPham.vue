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
                            <b class="category">Bởi: Admin</b>
                        </div>
                        <span class="sku">Sku: #{{ sanpham.ma_sp }}</span>
                        <p class="excerpt" >{{ sanpham.mo_ta_ngan }}</p>
                        <div class="price">
                            <ins><span class="price-amount">{{ VNDFormat(sanpham.gia_khuyen_mai)  }}</span></ins>
                            <del><span class="price-amount">{{ VNDFormat(sanpham.gia_sp) }}</span></del>
                        </div>
                        <div class="quantity-box">
                            <span class="qty-label">Số lượng</span>
                            <div class="qty-input">
                                <input type="text" v-model="qty" min="1" max="" data-step="1" readonly>
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
                            <div class="shipping-privacy">
                                {{ sanpham.mo_ta_ngan }}
                            </div>
                        </Tab>
                        <Tab title="Thông tin chi tiết">
                            <div class="shipping-privacy">
                                <p v-html="sanpham.mo_ta"></p>
                            </div>
                        </Tab>
                        <Tab title="Chính sách giao hàng">
                            <div class="shipping-privacy">
                                Sau khi Quý khách đã đặt hàng trên website, hệ thống sẽ gửi email xác nhận thông tin đặt hàng kèm mã đơn hàng. Bộ phận Thương mại điện tử của chúng tôi sẽ tiến hành liên hệ theo số điện thoại bạn cung cấp để xác minh đơn hàng, đồng thời thông báo về chi phí vận chuyển, thời gian bạn nhận được hàng, kèm theo các thông tin cần thiết khác. Sau khi xác nhận đơn hàng ở bước trên và Quý khách đồng ý nhận hàng thì đơn hàng mới được coi là đặt hàng thành công. <br/>
                                <b><u>Lưu ý:</u><br/></b>
                                Chúng tôi chỉ giao hàng tận nơi với đơn hàng tối thiểu từ 100.000đ trở lên.
                                Các đơn hàng chuyển đi các tỉnh xa sẽ phải chuyển khoản trước 50% giá trị đơn hàng.
                                Sau khi quá trình xác minh thành công, đơn hàng sẽ được giao đến Quý khách trong khoảng thời gian sau đây (Các đơn đặt hàng ngoài giờ hành chính sẽ tính thời gian bắt đầu từ sáng ngày làm việc tiếp theo):<br/>
                                <br/>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Địa chỉ giao hàng</th>
                                            <th>Thời gian giao hàng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nội thành</td>
                                            <td>Trong vòng 1h sau khi đặt hàng</td>
                                        </tr>
                                        <tr>
                                            <td>Nội thành</td>
                                            <td>Trong vòng 3h sau khi đặt hàng</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <b><u>Lưu ý:</u><br/></b>
                                <span class="ml-2">- Các đơn đặt hàng ngoài giờ hành chính sẽ tính thời gian bắt đầu từ 8:00 sáng ngày hôm sau<br/></span>
                                <span class="ml-2">- Các chính sách và quy định khác: Đối với các đơn hàng yêu cầu giao hỏa tốc, khách hàng vui lòng liên hệ hotline 1900 2268 để được tư vấn cụ thể.</span>
                            </div>
                        </Tab>
                        <Tab title="Đánh giá khách hàng">
                            <div class="shipping-privacy">
                                Tính năng chưa phát triển
                            </div>
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
        const tonkho = computed(() => store.getters.getTonKho);
        console.log(tonkho)
        const qty = ref(1);

        const incrementQty = () => {
            qty.value++;
            if(qty.value > tonkho.value)
                qty.value = tonkho.value;
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
            if(qtyCurr < 1) {
                qty.value = 1;
            }
            if(qtyCurr > tonkho.value) {
                qty.value = tonkho.value;
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
.shipping-privacy {
    font-size: 17px;
    margin-bottom: 20px;
}
</style>