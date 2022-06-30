<template>
    <div class="container">
        <Carousel :items-to-show="5">
            <template #slides>
                <Slide v-for="image in images" :key="image.id">
                    <img :src="image.src" />
                </Slide>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
export default {
    name: "BrandSlider",
    components: {
        Carousel,
        Slide
    },
    setup() {
        const images = ref([
            { id: 1, url: "https://picsum.photos/400/500?q=1" },
            { id: 2, url: "https://picsum.photos/400/500?q=2" },
            { id: 3, url: "https://picsum.photos/400/500?q=3" },
            { id: 4, url: "https://picsum.photos/400/500?q=4" },
        ]);
        return {
            images
        };
    }
}
</script>

<style scoped>

</style>