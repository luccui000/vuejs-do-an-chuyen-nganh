<template>
    <li class="result-item">
        <div class="result-image">
            <img :src="sanpham.hinh_anh" width="100" height="100">
        </div>
        <div class="result-content">
            <h4 class="title" @click="redictToSanPham">
                {{ sanpham.ten_sp }}
            </h4>
            <p class="categories">{{ sanpham.danhmuc.ten_dm }}</p>
            <div class="price ">
                <ins><span class="price-amount">{{ VNDFormat(sanpham.gia_khuyen_mai) }}</span></ins>
                <del><span class="price-amount">{{ VNDFormat(sanpham.gia_sp) }}</span></del>
            </div>
        </div>
    </li>
</template>

<script>
import { useRouter } from "vue-router";
import { VNDFormat } from "@/utils/helpers";

export default {
    name: "SanPhamTimKiem",
    props: ["sanpham"],
    setup(props) {
        const router = useRouter();
        const redictToSanPham = () => {

            router.push({
                name: 'ChiTietSanPham',
                params: {
                    slug: props.sanpham.slug
                }
            })
        }
        return {
            VNDFormat,
            redictToSanPham
        }
    }
};
</script>

<style scoped>
.result-item {
    display: flex;
    border-bottom: 1px dashed #dddddd;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transition: border-color .2s linear;
    padding: 5px 10px;
}
.result-item:nth-last-child(1) {
    border: 0;
}
.result-content {
    margin-left: 10px;
}
.result-content .title {
    font-size: 16px;
    color: #333333;
    margin-bottom: 5px !important;
    cursor: pointer;
    transition: all .2s linear;
    /*color: #111111;*/
}
.result-content .title:hover {
    color: #e73918;
}

.result-content .categories {
    margin-bottom: 5px;
}
.result-content .price ins {
    text-decoration: none;
}
.result-content .price del {
    margin-left: 6px;
}
.result-content .price-amount {
    font-size: 18px;
    color: #111111;
    font-weight: 700;
}
.result-content del .price-amount {
    line-height: 24px;
    color: #aaaaaa;
    font-size: 14px;
    display: inline-block;
    font-weight: 600;
    text-decoration: line-through;
}
</style>