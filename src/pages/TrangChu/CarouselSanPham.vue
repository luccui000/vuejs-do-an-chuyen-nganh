<template>
    <div class='primary-banner main-slide block-slider'>
        <ul class='biolife-carousel'>
             <Carousel :wrap-around='true'>
                <Slide v-for="slide in sliders" :key="slide.id">
                    <div class="slide-contain" :style="{'background-image': `url(${slide.background_image})`}">
                        <div class="media" >
                            <div class="child-elememt">
                                <a href="#" class="link-to" tabindex="0">
                                    <img :src="slide.slider_image" width="604" height="580" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="text-content">
                            <i class="first-line">{{ slide.primary_text }}</i>
                            <h3 class="second-line">{{ slide.secondary_text }}</h3>
                            <p class="third-line">{{ slide.description }}</p>
                            <p class="buttons">
                                <a href="#" class="btn btn-bold" tabindex="0">Mua ngay</a>
                                <router-link :to="slide.link_product" class="btn btn-thin" >Xem chi tiết</router-link>
                            </p>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </ul>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { FETCH_ALL_SLIDERS } from '@/store/action.type';


export default {
    name: "CarouselSanPham",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    setup() {
        const store = useStore();
        store.dispatch(FETCH_ALL_SLIDERS);
        const sliders = computed(() => store.getters.getAllSliders);

        return {
            sliders
        }
    }
}
</script>

<style scope>
.primary-banner .carousel__slide {
    height: 650px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    border: 1px solid #ccc;
}
.primary-banner .carousel__prev {
    width: 40px !important;
    height: 40px !important;
    background-color: transparent !important;
    left: 40px !important;
}
.primary-banner .carousel__next {
    width: 40px !important;
    height: 40px !important;
    background-color: transparent !important;
    right: 40px !important;
}
.primary-banner .slide-contain {
    width: 100%;
    height: 100%;
    position: relative;
}

.primary-banner .media {
    z-index: 10;
}
.primary-banner .child-elememt img {
    position: absolute;
    left: 30%;
    transform: translateX(-50%);
}
.primary-banner .text-content {
    position: absolute;
    left: 800px;
    top: 50%;
    text-align: left;
    line-height: 30px;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px 40px;
    border-radius: 5px;
    width: 600px;
}
.primary-banner .first-line {
    font-family: 'Playfair Display', sans-serif;
    font-size: 20px;
    line-height: 1;
    color: #000000;
    display: block;
    margin: 0;
}
.primary-banner .second-line {
    font-size: 60px;
    line-height: 60px;
    color: #333333;
    font-weight: 700;
    display: block;
    margin: 10px 0;
}
.primary-banner .third-line {
    font-size: 22px;
    line-height: 1;
    color: #000000;
    display: block;
    margin: 13px 0 0;
}
.primary-banner .buttons {
    margin-top: 40px;
}
.primary-banner .buttons a {
    margin-right: 20px;
    border-radius: 5px;
    transition: all .2s linear;
}
.primary-banner .buttons a:nth-child(1) {
    border: 2px solid transparent;
    padding: 10px;
}
.primary-banner .buttons a:nth-child(1):hover {
    background-color: transparent;
    color: #e73918;
    border: 2px solid #e73918;
}
</style>
