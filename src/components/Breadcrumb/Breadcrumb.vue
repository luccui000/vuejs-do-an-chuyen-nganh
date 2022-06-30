<template>
    <nav class="biolife-nav">
        <ul>
            <li v-for="(crumb, idx) in crumbs" :key="idx" class="nav-item">
                <RouterLink
                    v-if="idx !== crumbs.length - 1"
                    :to="crumb.url"
                    class="permal-link"
                >
                    {{ crumb.name }}
                </RouterLink>
                <span v-else class="current-page">{{ crumb.name }}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        crumbs: {
            required: true,
            type: Array
        }
    },
    setup() {
        return {

        }
    }
};
</script>

<style scoped>
.nav-item {
    font-family: 'Roboto', sans-serif !important;
}
</style>