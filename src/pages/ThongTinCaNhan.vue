<template>
    <div>{{ khachhang }}</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from "vue-router";

export default {
    name: "ThongTinCaNhan",
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        const khachhang = computed(() => store.state.auth.khachhang);
        const requiredAuth = computed(() => route.meta.requiredAuth)
        const authenticated = computed(() => store.getters.authenticated)

        if(requiredAuth.value && !authenticated.value)
            router.push("/dang-nhap")

        return {
            khachhang
        }
    }
}
</script>

<style scoped>

</style>
