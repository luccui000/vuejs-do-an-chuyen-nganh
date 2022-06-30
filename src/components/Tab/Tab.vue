<template>
    <div v-show="selectedTab === title">
        <slot></slot>
    </div>
</template>

<script>
import { inject } from "vue";

export default {
    name: "Tab",
    props: ["title"],
    setup() {
        const selectedTab = inject("selectedTab");
        return {
            selectedTab
        }
    }
};
</script>

<style scoped>

</style>