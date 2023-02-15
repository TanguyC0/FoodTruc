<script setup>
    import Hero from './components/Hero.vue';
    import Footer from './components/Footer.vue';

</script>

<template>

    <body class="bg-white">
        <!-- Header Navbar -->
        <Hero />
    
        <router-view></router-view>

        <!-- Footer -->
        <Footer />
    </body>
</template>
