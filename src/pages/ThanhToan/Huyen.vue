<template>
    IN::{{ tinh }}
    <select
        class="form-control"
        @change="handleChangeHuyen"
    >
        <option
            v-for="huyen in huyens"
            :key="huyen.id"
            :value="huyen.id"
        >{{ huyen }}</option>
    </select>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { FETCH_HUYEN_BY_MA_TINH } from "@/store/action.type";

export default {
    name: "Huyen",
    props: [],
    setup(props, { emit }) {
        const store = useStore();
        const tinh = computed(() => store.state.address.tinh);
        store.dispatch(FETCH_HUYEN_BY_MA_TINH, tinh);
        const huyens = computed(() => store.state.address.huyens)
        return {
            tinh,
            huyens,
            handleChangeHuyen
        }
    }
};
</script>

<style scoped>

</style>