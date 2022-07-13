<template>
    <div class="biolife-banner style-01 biolife-banner__style-01 xs-margin-top-80px-im sm-margin-top-30px-im" :style="{'background-image': `url(${bgImage})`}" >
        <div class="banner-contain">
            <a href="#" class="bn-link"></a>
            <div class="text-content">
                <span class="first-line">Rau củ quả</span>
                <div class="text-wrapper my-2">
                    <b class="second-line">Thực phẩm</b>
                    <b class="second-line">Tươi ngon</b>
                </div>
                <span class="fourth-line">Chất lượng đảm bảo</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThirdBanner",
    setup() {
        return {
            bgImage: require("@/assets/images/home-03/biolife-banner__style-01.jpg")
        }
    }
}
</script>

<style scoped>
.text-wrapper {
    margin: 10px 0 !important;
}
.second-line {
    font-size: 30px !important;
    font-weight: bold !important;
}
</style>