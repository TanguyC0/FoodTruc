<script setup>
    import Fiche from '../components/Fiche.vue';
    import { ref } from 'vue';

    const current = ref("ingredient");

</script>

<template>
    <div class="pt-20  bg-white">
        <h1 class="text-center text-2xl font-bold text-gray-800">Recipe</h1>
    </div>
    <div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <div rel="noopener noreferrer" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 cursor-pointer" @click="current = 'ingredient'">
            <span class="font-semibold" :class="{'text-red-500 underline' : current == 'ingredient'}">Ingredient</span>
        </div>
        <div rel="noopener noreferrer" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 cursor-pointer" @click="current = 'instruction'">
            <span class="font-semibold" :class="{'text-red-500 underline' : current == 'instruction'}">Instruction</span>
        </div>
    </div>

    <div class=" p-10 bg-gray-100">
        <Fiche :idPlat=" $route.query.id " :vue="current" />
    </div>
</template>
