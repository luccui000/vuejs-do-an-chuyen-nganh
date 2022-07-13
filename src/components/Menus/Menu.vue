<template>
    <ul class="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
        <menu-item name="Trang chủ" type="menu-1" to="/"></menu-item>
        <menu-item name="Cửa hàng" type="menu-1" to="/cua-hang"></menu-item>
        <menu-item name="Sản phẩm" type="menu-2" to="/san-pham/tat-ca">
            <div class="wrap-megamenu lg-width-900 md-width-750">
                <div class="mega-content">
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Quả mọng nước</h4>
                            <ul class="menu">
                                <li>
                                    <router-link to="/san-pham/nho-xanh-autumn-crips-chile_ilXJy9">Nho xanh Autumn Crips Chile</router-link></li>
                                <li><router-link to="/san-pham/sau-rieng-ri-6-chua-tach-vo_iP8TFj">Nho xanh Autumn Crips Chile</router-link></li>
                                <li><router-link to="/san-pham/nho-do-khong-hat-jack-salute_iOhYtY">Nho đỏ không hạt BARAIA</router-link></li>
                                <li><router-link to="/san-pham/nho-do-khong-hat-jack-salute_ivcZ1e">Bananas &amp; Plantains</router-link></li>
                                <li><router-link to="/san-pham/nho-do-khong-hat-jack-salute_iQqLfP">Nho đỏ không hạt JACK SALUTE</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Rau củ quả</h4>
                            <ul class="menu">
                                <li><router-link to="/san-pham/bup-lo-xanh_i6s8F5">Búp lơ xanh</router-link></li>
                                <li><router-link to="/san-pham/bo_iw6k5Y">Bơ </router-link></li>
                                <li><router-link to="/san-pham/chanh-khong-hat_iB4Xt7">Chanh không hạt</router-link></li>
                                <li><router-link to="/san-pham/bi-non_iVrRsS">Bí non</router-link></li>
                                <li><router-link to="/san-pham/khoai-lang-viet-nam_iYnRO1">Khoai lang Việt Nam</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu ">
                            <h4 class="menu-title">Trái cây bổ dưỡng</h4>
                            <ul class="menu">
                                <li><router-link to="/san-pham/qua-le-nhap-khau_iBvESk">Quả Lê nhập khẩu</router-link></li>
                                <li><router-link to="/san-pham/sau-rieng-musang-king_ihtuNI">Sầu riêng Musang King</router-link></li>
                                <li><router-link to="/san-pham/tao-gala-500g_i8vHaM">TÁO GALA 500G</router-link></li>
                                <li><router-link to="/san-pham/tao-envy-new-zealand-01">Táo Envy New Zealand</router-link></li>
                                <li><router-link to="/san-pham/man-do-uc">Mận đỏ Úc</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div class="wrap-custom-menu vertical-menu">
                            <h4 class="menu-title">Sản phẩm nổi bật</h4>
                            <ul class="menu">
                                <li><router-link to="/san-pham/nho-xanh-autumn-crips-chile_ilXJy9">Nho xanh Autumn Crips Chile</router-link></li>
                                <li><router-link to="/san-pham/qua-le-nhap-khau_iBvESk">Quả Lê nhập khẩu</router-link></li>
                                <li><router-link to="/san-pham/sau-rieng-musang-king_ihtuNI">Sầu riêng Musang King</router-link></li>
                                <li><router-link to="/san-pham/cherry-my_iUueMo">Cherry Mỹ</router-link></li>
                                <li><router-link to="/san-pham/man-do-uc">Mận đỏ Úc</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </menu-item>
        <menu-item name="Bài viết" type="menu-3" to="#">
            <ul class="sub-menu">
                <li class="menu-item"><a href="#">Gần đây</a></li>
                <li class="menu-item"><a href="#">Breakfast Scrambles</a></li>
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
