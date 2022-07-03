<template>
    <div class="header-top bg-main hidden-xs">
        <div class="container">
            <div class="top-bar left">
                <ul class="horizontal-menu">
                    <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>110119025@st.tvu.edu.vn</a></li>
                    <li><a href="#">Miễn phí cho tất cả đơn từ 100k</a></li>
                </ul>
            </div>
            <div class="top-bar right">
                <ul class="social-list">
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    <li v-if="khachhang">
                        <RouterLink :to="{ name: 'ThongTinCaNhan' }">
                            {{ khachhang.ten_khach_hang }}
                        </RouterLink>
                    </li>
                    <li v-else>
                        <RouterLink to="/dang-nhap">
                            Đăng nhập/ Đăng ký
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'HeaderTop',
    setup() {
        const store = useStore();
        const khachhang = computed(() => store.state.auth.khachhang);

        return {
            khachhang
        }
    }
};
</script>

<style scoped>

</style>
