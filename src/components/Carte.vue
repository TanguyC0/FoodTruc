<template>
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <router-link :to="`/Recette?id=${plat.idMeal}`">
            <div class="relative flex items-end overflow-hidden rounded-xl">
                <img :src="plat.strMealThumb" alt="plat Photo" />
            </div>

            <div class="mt-1 p-2">
                <h2 class="text-slate-700 font-bold">{{ plat.strMeal }}</h2>


                
            </div>
        </router-link>
    </article>
</template>

<script setup>

    const props = defineProps({
        plat: {
            type: Object,
            required: true
        }
    })
    
</script>