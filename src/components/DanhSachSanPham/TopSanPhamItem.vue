<template>
    <li class="product-item">
        <div class="contain-product layout-02">
            <div class="product-thumb">
                <router-link :to="sanpham.slug" class="link-to-product">
                    <img :src="sanpham.hinh_anh" alt="dd" width="270" height="270" class="product-thumnail">
                </router-link>
            </div>
            <div class="info">
                <b class="categories">{{ sanpham.danhmuc.ten_dm }}</b>
                <h4 class="product-title">
                    <router-link :to="sanpham.slug" class="pr-name">{{ sanpham.ten_sp }}</router-link>
                </h4>
                <div class="price">
                    <ins><span class="price-amount">{{ sanpham.gia_khuyen_mai }}</span></ins>
                    <del><span class="price-amount">{{ sanpham.gia_sp }}</span></del>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "TopSanPhamItem",
    props: {
        sanpham: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.product-item {
    width: 238px;
    cursor: pointer;
}
.contain-product.layout-02 {
    transition: box-shadow .3s linear;
}
.product-item::marker {
    content: "";
}
.product-thumnail {
    height: 200px !important;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
}

</style>