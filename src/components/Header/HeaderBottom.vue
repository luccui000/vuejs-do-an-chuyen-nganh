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
                                    <li class="menu-item" v-for="danhmuc in danhmucs" :key="danhmuc.id">
                                      <RouterLink to="#" class="menu-title">
                                         <i class="biolife-icon" :class="danhmuc.hinh_anh"></i>
                                        {{ danhmuc.ten_dm }}
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
import { ref, computed } from "vue";
import { useStore } from "vuex"
import SearchBar from '@/components/Header/SearchBar';
import {FETCH_ALL_DANHMUCS} from "@/store/action.type";

export default {
    name: 'HeaderBottom',
    components: {
        SearchBar
    },
    setup() {
        const store = useStore();
        const isShow = ref(false);
        store.dispatch(FETCH_ALL_DANHMUCS)
        const danhmucs = computed(() => store.getters.getAllDanhMucs);

        return {
            isShow,
            danhmucs
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
    cursor: pointer;
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
.menu-item:nth-last-child(1) .menu-title {
  border-bottom: 0px;
}
</style>
