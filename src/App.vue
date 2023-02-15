<script setup>
    import Hero from './components/Hero.vue';
    import Footer from './components/Footer.vue';

</script>

<template>

    <body class="bg-white min-h-screen flex flex-col justify-between ">
        <!-- Header Navbar -->
        <Hero />
    
        <router-view></router-view>

        <!-- Footer -->
        <Footer />
    </body>
</template>
