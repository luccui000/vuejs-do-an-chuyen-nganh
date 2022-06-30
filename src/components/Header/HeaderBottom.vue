<template>
    <div class="header-bottom hidden-sm hidden-xs">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div @click="isShow = !isShow" class="vertical-menu vertical-category-block">
                        <div class="block-title">
                                <span class="menu-icon">
                                    <span class="line-1"></span>
                                    <span class="line-2"></span>
                                    <span class="line-3"></span>
                                </span>
                            <span class="menu-title">Tất cả danh mục</span>
                            <span class="angle">
                                <i class="fa" :class="[isShow ? 'fa-caret-up' : 'fa-caret-down']" aria-hidden="true"></i>
                            </span>
                        </div>
                        <Transition>
                            <div v-show="isShow" class="wrapper-menu">
                                <ul class="menu clone-main-menu">
                                    <li class="menu-item">
                                        <RouterLink to="#" class="menu-title"><i class="biolife-icon icon-fast-food"></i>
                                            Fastfood
                                        </RouterLink>
                                    </li>
                                    <li class="menu-item">
                                        <RouterLink to="#" class="menu-title"><i class="biolife-icon icon-beef"></i>
                                            Fresh Meat
                                        </RouterLink>
                                    </li>
                                    <li class="menu-item">
                                        <RouterLink to="#" class="menu-title"><i class="biolife-icon icon-onions"></i>
                                            Fresh Onion
                                        </RouterLink>
                                    </li>
                                    <li class="menu-item">
                                        <RouterLink to="#" class="menu-title"><i class="biolife-icon icon-avocado"></i>
                                            Papaya &amp; Crisps
                                        </RouterLink>
                                    </li>
                                    <li class="menu-item">
                                        <RouterLink to="#" class="menu-title"><i class="biolife-icon icon-contain"></i>
                                            Oatmeal
                                        </RouterLink>
                                    </li>
                                    <li class="menu-item">
                                        <RouterLink to="#" class="menu-title"><i class="biolife-icon icon-fresh-juice"></i>
                                            Fresh Bananas &amp; Plantains
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8 padding-top-2px">
                    <SearchBar />
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
import { ref, reactive } from "vue";
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
        const isShow = ref(false);
        return {
            isShow,
            categories
        }
    }
};
</script>

<style scoped>
.vertical-menu {
    position: relative;
}
.wrapper-menu {
    position: absolute;
    z-index: 999;
    display: inline-block;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
    transition: display .2s linear;
}
.menu {
    padding-left: 0;
}
.menu-item {
    font-size: 14px;
    line-height: 45px;
    padding: 0 20px;
    display: block;
}
.menu-item .menu-title {
    color: #333333;
    display: inline-block;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transition: border-color .2s linear;
}
.menu-item .menu-title:hover {
    border-color: #e73918;
}

.menu-title .biolife-icon {
    font-size: 26px;
    width: 40px;
    text-align: left;
    display: inline-block;
    float: left;
    line-height: 45px;
}
</style>