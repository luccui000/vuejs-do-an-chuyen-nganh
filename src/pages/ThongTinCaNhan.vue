<template>
    <div>{{ khachhang }}</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "ThongTinCaNhan",
    setup() {
        const store = useStore();
        const khachhang = computed(() => store.state.auth.khachhang);

        return {
            khachhang
        }
    }
}
</script>

<style scoped>

</style>
