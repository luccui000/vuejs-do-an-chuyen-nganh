<template>
    <div class="header-middle biolife-sticky-object">
        <div class="container">
            <div class="row" style="display: flex; align-items: center">
                <div class="col-lg-3 col-md-2 col-md-6 col-xs-6">
                    <a href="#" class="biolife-logo">
                        <img :src="logo" alt="biolife logo" >
                    </a>
                </div>
                <div class="col-lg-6 col-md-7 hidden-sm hidden-xs">
                    <div class="primary-menu">
                        <Menu />
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
                    <div class="biolife-cart-info">
                        <wishlist />
                        <cart />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Wishlist from '@/components/Wishlist/Wishlist';
import Cart from '@/components/Cart/Cart';
import Menu from '@/components/Menus/Menu';

export default {
    name: "HeaderMiddle",
    components: {
        Wishlist,
        Cart,
        Menu
    },
    setup() {
        const menus = ref([
            {
                id: 1,
                name: 'Trang chủ',
                type: 'menu-1',
                children: [],
                url: '/'
            },
            {
                id: 2,
                name: 'Cửa hàng',
                type: 'menu-1',
                children: [],
                url: '/cua-hang'
            },
            {
                id: 3,
                name: 'Sản phẩm',
                type: 'menu-2',
                url: '/san-pham',
                children: [
                    {
                        header: 'Sản phẩm',
                        items: [
                            {
                                id: 1,
                                name: 'Sản phẩm 1',
                                url: '/san-pham/1'
                            },
                            {
                                id: 2,
                                name: 'Sản phẩm 1',
                                url: '/san-pham/2'
                            }
                        ]
                    },
                    {
                        header: 'Trái cây tươi',
                        items: [
                            {
                                id: 1,
                                name: 'Trái cây tươi 1',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 2,
                                name: 'Trái cây tươi 2',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 3,
                                name: 'Trái cây tươi 3',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 4,
                                name: 'Trái cây tươi 4',
                                url: '/san-pham/2',
                                children: []
                            },
                        ]
                    },
                    {
                        header: 'Trái cây tươi',
                        items: [
                            {
                                id: 1,
                                name: 'Trái cây tươi 1',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 2,
                                name: 'Trái cây tươi 2',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 3,
                                name: 'Trái cây tươi 3',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 4,
                                name: 'Trái cây tươi 4',
                                url: '/san-pham/2',
                                children: []
                            },
                        ]
                    },
                    {
                        header: 'Trái cây tươi',
                        items: [
                            {
                                id: 1,
                                name: 'Trái cây tươi 1',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 2,
                                name: 'Trái cây tươi 2',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 3,
                                name: 'Trái cây tươi 3',
                                url: '/san-pham/2',
                                children: []
                            },
                            {
                                id: 4,
                                name: 'Trái cây tươi 4',
                                url: '/san-pham/2',
                                children: []
                            },
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: 'Bài viết',
                type: 'menu-3',
                children: [
                    {
                        id: 1,
                        name: 'Trái cây',
                        url: '/bai-viet/2'
                    },
                    {
                        id: 2,
                        name: 'Nông nghiệp',
                        url: '/bai-viet/1'
                    }
                ],
                url: '/bai-viet'
            },
            {
                id: 5,
                name: 'Liên hệ',
                type: 'menu-1',
                children: [],
                url: '/lien-he'
            }
        ]);
        return {
            logo: require('@/assets/images/logo2.png'),
            menus
        }
    }
}
</script>

<style scoped>

</style>