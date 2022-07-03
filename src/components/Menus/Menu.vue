<template>
    <ul class="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
        <menu-item name="Trang chủ" type="menu-1" to="/"></menu-item>
        <menu-item name="Cửa hàng" type="menu-1" to="/cua-hang"></menu-item>
        <menu-item name="Sản phẩm" type="menu-2" to="/san-pham/tat-ca">
            <div class="wrap-megamenu lg-width-900 md-width-750">
                <div class="mega-content">
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Fresh Berries</h4>
                            <ul class="menu">
                                <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                                <li><a href="#">Mixed Fruits</a></li>
                                <li><a href="#">Oranges</a></li>
                                <li><a href="#">Bananas &amp; Plantains</a></li>
                                <li><a href="#">Fresh Gala Apples</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Vegetables</h4>
                            <ul class="menu">
                                <li><a href="#">Berries</a></li>
                                <li><a href="#">Pears</a></li>
                                <li><a href="#">Chili Peppers</a></li>
                                <li><a href="#">Fresh Avocado</a></li>
                                <li><a href="#">Grapes</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu ">
                            <h4 class="menu-title">Fresh Fruits</h4>
                            <ul class="menu">
                                <li><a href="#">Basket of apples</a></li>
                                <li><a href="#">Strawberry</a></li>
                                <li><a href="#">Blueberry</a></li>
                                <li><a href="#">Orange</a></li>
                                <li><a href="#">Pineapple</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Featured Products</h4>
                            <ul class="menu">
                                <li><a href="#">Coffee Creamers</a></li>
                                <li><a href="#">Mayonnaise</a></li>
                                <li><a href="#">Almond Milk</a></li>
                                <li><a href="#">Fruit Jam</a></li>
                                <li><a href="#">Beverages</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </menu-item>
        <menu-item name="Bài viết" type="menu-3" to="#">
            <ul class="sub-menu">
                <li class="menu-item"><a href="#">Omelettes</a></li>
                <li class="menu-item"><a href="#">Breakfast Scrambles</a></li>
                <li class="menu-item"><a href="#">Griddle</a></li>
                <li class="menu-item"><a href="#">Biscuits</a></li>
                <li class="menu-item"><a href="#">Seasonal Fruit Plate</a></li>
            </ul>
        </menu-item>
        <menu-item name="Liên hệ" type="menu-1" to="/lien-he"></menu-item>
    </ul>
</template>

<script>
import MenuItem from '@/components/Menus/MenuItem';
export default {
    name: "Menu",
    components: {
        MenuItem
    },
    setup() {

    }
}
</script>

<style scoped>
#primary-menu {
  z-index: 10000;
}
</style>
