<template>
    <Carousel>
        <template #slides>
            <Slide v-for="slide in sliders" :key="slide.id">
                <div class="slide-contain slider-opt"  :style="{'background-image': `url(${sliderBg})`}">
                    <div class="container slide-wrapper">
                        <div class="media">
                            <div class="child-elememt">
                                <a href="#" class="link-to" tabindex="0">
                                    <img :src="slide.background_image" width="604" height="580" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="text-content">
                            <i class="first-line">Pomegranate</i>
                            <h3 class="second-line">Vegetables 100% Organic</h3>
                            <p class="third-line">A blend of freshly squeezed green apple &amp; fruits</p>
                            <p class="buttons">
                                <a href="#" class="btn btn-bold" tabindex="0">Shop now</a>
                                <a href="#" class="btn btn-thin" tabindex="0">View lookbook</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Slide>
        </template>
        <template #addons>
            <navigation />
        </template>
    </Carousel>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ref } from 'vue';

export default {
    name: 'Slider',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    setup() {
        const sliders = ref([
            {
                id: 1,
                background_image: require('@/assets/images/home-03/slide-01-child-01.png'),
                primary_text: 'Trái cây tươi',
                secondary_text: '100% từ thiên nhiên',
                description: 'Được chiết xuất hoàn toàn từ thiên nhiên, không chứa chất điều vị',
                url: 'http://www'
            },
            {
                id: 2,
                background_image: require('@/assets/images/home-03/slide-01-child-01.png'),
                primary_text: 'Trái cây tươi 2',
                secondary_text: '100% từ thiên nhiên',
                description: 'Được chiết xuất hoàn toàn từ thiên nhiên, không chứa chất điều vị',
                url: 'http://www'
            },
        ]);
        const sliderBg = require("@/assets/images/home-03/slide-01.jpg")
        return {
            sliders,
            sliderBg
        };
    },
};
</script>

<style>
.carousel__item {
    min-height: 600px;
    width: 100%;
    color:  var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    background-color: #ccc;
}
.slider-opt {
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 600px;
}
.slide-wrapper {
    position: relative;
}
.slide-wrapper .media .child-elememt img {
    position: absolute;
    left: 0;
}
.slide-wrapper .text-content {
    position: absolute;
    left: 605px;
    top: 100px;
    text-align: left;
}
.slide-wrapper .text-content .first-line {
    font-family: 'Playfair Display', sans-serif;
    font-size: 30px;
    line-height: 1;
    color: #000000;
    display: block;
    margin: 0;
}
.slide-wrapper .text-content .second-line {
    font-size: 60px;
    line-height: 60px;
    color: #333333;
    font-weight: 700;
    display: block;
    margin: 0;
    max-width: 400px;
}
.slide-wrapper .text-content .thirst-line {
    font-size: 22px;
    line-height: 1;
    color: #000000;
    display: block;
    margin: 13px 0 0;
}
.buttons .btn {
    margin-right: 20px;
    padding: 10px 20px;

}
</style>