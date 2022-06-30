<template>  
    <Header />
    <div class="page-contain">
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
    <Footer />
</template>

<script>  
 import Header from '@/components/Header/Header';
 import Footer from '@/components/Footer/Footer';
  export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
  }
</script>

<style>

</style>

