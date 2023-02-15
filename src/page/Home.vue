<template>

    <!-- Title -->
    <div class="pt-32  bg-white">
        <h1 class="text-center text-2xl font-bold text-gray-800">Categories</h1>
    </div>

    <!-- Tab Menu -->
    <NavCategorie @change="(newCatego) => currentCatego = newCatego"/>

    <!-- Product List -->
    <ListPlat :categorie="currentCatego"/>
</template>

<script setup>
    import ListPlat from '../components/ListPlat.vue';
    import NavCategorie from '../components/NavCategorie.vue'
    import { ref } from 'vue';

    const currentCatego = ref("Beef");

</script>