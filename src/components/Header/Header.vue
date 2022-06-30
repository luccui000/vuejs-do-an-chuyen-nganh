<template>
    <header id="header" class="header-area style-01 layout-03">
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
    </header>
</template>

<script>
import HeaderTop from '@/components/Header/HeaderTop';
import HeaderBottom from '@/components/Header/HeaderBottom';
import HeaderMiddle from '@/components/Header/HeaderMiddle';

export default {
    components: {
        HeaderBottom,
        HeaderTop,
        HeaderMiddle
    },
    setup() {
        return {
        }
    }
}
</script>

<style> 
</style>