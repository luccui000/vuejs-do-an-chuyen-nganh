<template>
    <div class="header-search-bar layout-01">
        <form class="form-search">
            <input
                @input="debounceSearch"
                v-model="searchTerm"
                class="input-text"
                placeholder="Tìm kiếm ngay..."
                :class="{'hide-border' : isShow}"
            >
            <button type="submit" class="btn-submit">
                <i class="biolife-icon icon-search"></i>
            </button>
            <ul v-show="isShow" class="search-result">
                 <SanPhamTimKiem
                     v-for="sanpham in sanphams"
                     :key="sanpham.id"
                     :sanpham="sanpham"
                 />
            </ul>
        </form>
    </div>    
</template>

<script>
import { ref, watch } from "vue";
import SanPhamTimKiem from "@/components/Product/SanPhamTimKiem";
import apis from "@/services/api.service";
import endpoint from "@/apis/endpoint";

export default {
    components: { SanPhamTimKiem },
    setup() {
        const searchTerm = ref("");
        const debounce = ref(null);
        const isShow = ref(false);
        const sanphams = ref([]);

        const debounceSearch = (event) => {
            clearTimeout(debounce.value)
            debounce.value = setTimeout(async () => {
                searchTerm.value = event.target.value;
                const { data } = await apis.get(`${endpoint.SAN_PHAM}?s=${searchTerm.value}`);
                if(data.data.length) {
                    isShow.value = true;
                    sanphams.value = data.data.map(sanpham => {
                        return {
                            ...sanpham,
                            slug: "/" + endpoint.SAN_PHAM + "/" + sanpham.slug
                        }
                    });
                }
            }, 500)
        }
        watch(() => sanphams.value, (curr) => {
            if(curr === "") {
                isShow.value = false;
                sanphams.value = [];
            }
        })

        return {
            searchTerm,
            isShow,
            debounceSearch,
            sanphams
        }
    }
}
</script>

<style scoped>
.input-text {
    position: relative;
    z-index: 999;
}
.btn-submit {
    z-index: 1000;
}
.search-result {
    border-radius: 20px;
    position: absolute;
    width: 100%;
    z-index: 998;
    max-height: 700px;
    background-color: #fff;
    padding: 20px 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

</style>