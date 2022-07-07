<template>
    <div v-show="title === selectedTab">
        <slot></slot>
    </div>
</template>

<script>
import { inject } from "vue";

export default {
    name: "TabLeftItem",
    props: ['title'],
    setup() {
        const selectedTab = inject("selectedTab");

        return {
            selectedTab
        }
    }
}
</script>

<style scoped>

</style>
