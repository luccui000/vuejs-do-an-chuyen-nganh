<template>
    <CarouselSanPham />
    <div class="container related-product">
        <SanPhamLienQuan />
    </div>
    <BannerChinh />
    <BannerGioiThieu />
    <div class="container mt-5">
        <div class="row">
            <div class="col-4 mx-0 px-0">
                <DealLeft />
            </div>
            <div class="col-8 mx-0 px-0">
                <DealRight />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <FourBanner />
            </div>
        </div>
    </div>
</template>

<script>
    import CarouselSanPham from "@/pages/TrangChu/CarouselSanPham";
    import BannerChinh from "@/pages/TrangChu/Banner/BannerChinh";
    import BannerGioiThieu from "@/pages/TrangChu/Banner/BannerGioiThieu";
    import DealLeft from "@/components/Deal/DealLeft";
    import DealRight from "@/components/Deal/DealRight";
    import FourBanner from '@/components/Banner/FourBanner';
    import SanPhamLienQuan from "@/pages/TrangChu/SanPhamLienQuan";

    export default {
        name: 'TrangChu',
        components: {
            CarouselSanPham,
            BannerChinh,
            BannerGioiThieu,
            FourBanner,
            DealLeft,
            DealRight,
            SanPhamLienQuan
        },
        setup() {
            return {
            }
        }
    }
</script>

<style>
.biolife-title-box__bold-style {
    margin-bottom: 0 !important;
}
.left .carousel__prev {
    position: absolute;
    top: -30px !important;
    left: 330px !important;
}
.left .carousel__next {
    position: absolute;
    top: -30px !important;
    left: 335px !important;
}
</style>

