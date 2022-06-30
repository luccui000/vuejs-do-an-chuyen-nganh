<template>
    <li v-if="type == 'menu-1'" class="menu-item">
        <router-link :to="to">{{ name }}</router-link>
    </li>
    <li v-else-if="type == 'menu-2'" class="menu-item menu-item-has-children has-megamenu">
        <router-link :to="to" class="menu-name">{{ name }}</router-link>
        <slot></slot>
    </li>
    <li v-else-if="type == 'menu-3'" class="menu-item menu-item-has-children has-child">
        <router-link :to="to" class="menu-name">{{ name }}</router-link>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        name: {
            type: String
        },
        type: {
            required: true,
            type: String
        },
        to: {
            type: String,
            default: "#"
        }
    }
}
</script>

<style scoped>

</style>