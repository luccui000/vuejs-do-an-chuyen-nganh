<template>
    <div class="biolife-banner style-01 biolife-banner__style-01 xs-margin-top-80px-im sm-margin-top-30px-im" :style="{'background-image': `url(${bgImage})`}" >
        <div class="banner-contain">
            <a href="#" class="bn-link"></a>
            <div class="text-content">
                <span class="first-line">Daily Fresh</span>
                <b class="second-line">Natural</b>
                <i class="third-line">Fresh Food</i>
                <span class="fourth-line">Premium Quality</span>
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
</style>