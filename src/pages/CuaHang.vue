<template>
    <div class="container">
        <img v-for="(img, idx) in images" :key="idx" :src="img" />
    </div>
</template>

<script>
export default {
    name: "CuaHang",
    setup() {
        const images = [
            require('@/assets/images/cuahang/gioi-thieu3.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-4.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-5.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-6.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-7.jpg'),
            require('@/assets/images/cuahang/gioi-thieu8.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-9.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-10.jpg'),
            require('@/assets/images/cuahang/gioi-thieu-11.jpg'),
        ];

        return {
            images
        }
    }
}
</script>

<style scoped>

</style>