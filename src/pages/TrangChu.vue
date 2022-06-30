<template>
    <PrimaryBanner />
    <div class="container related-product">
        <RelatedProduct />
    </div>
    <FirstBanner />
    <SecondBanner />
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
  import PrimaryBanner from '@/components/Banner/PrimaryBanner';
  import RelatedProduct from '@/components/RelatedProduct/RelatedProduct';
  import FirstBanner from '@/components/Banner/FirstBanner';
  import SecondBanner from '@/components/Banner/SecondBanner';
  import DealLeft from "@/components/Deal/DealLeft";
  import DealRight from "@/components/Deal/DealRight";
  import FourBanner from '@/components/Banner/FourBanner';

  export default {
    name: 'TrangChu',
    components: {
        FourBanner,
        PrimaryBanner,
        RelatedProduct,
        FirstBanner,
        SecondBanner,
        DealLeft,
        DealRight,
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

