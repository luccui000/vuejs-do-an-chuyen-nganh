<template>
    <div class="header-bottom hidden-sm hidden-xs">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="vertical-menu vertical-category-block">
                        <div class="block-title">
                                <span class="menu-icon">
                                    <span class="line-1"></span>
                                    <span class="line-2"></span>
                                    <span class="line-3"></span>
                                </span>
                            <span class="menu-title">Tất cả danh mục</span>
                            <span class="angle" data-toggleclass="fa fa-caret-down"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8 padding-top-2px">
                    <SearchBar :categories="categories" />
                    <div class="live-info">
                        <p class="telephone"><i class="fa fa-phone" aria-hidden="true"></i>
                        <b class="phone-number">(+84) 399 942 301</b></p>
                        <p class="working-time">T2 - CN: 7:30AM - 9:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import SearchBar from '@/components/Header/SearchBar';

export default {
    name: 'HeaderBottom',
    components: {
        SearchBar
    },
    setup() {
        const categories = reactive([
            {
                id: 1,
                name: 'Trái cây tươi',
            },
            {
                id: 2,
                name: 'Rau củ & quả'
            },
            {
                id: 3,
                name: 'Bơ và trứng'
            },
            {
                id: 4,
                name: 'Trái cây nhập khẩu'
            }
        ]);
        return {
            categories
        }
    }
};
</script>

<style scoped>

</style>