<template>
    
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