<template>
    <div class="slide-contain slider-opt03__layout01">
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
</template>

<script>
export default {
    name: 'SliderItem',
    props: {
        slide: {
            type: Object
        }
    }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: scale(0.2);
}

.v-enter-from,
.v-leave-to {
    transition: scale(1);
}
.text-content {
    text-align: left;
}
.third-line {
    width: 450px;
}
.btn-bold {
    color: #fff !important;
}
</style>