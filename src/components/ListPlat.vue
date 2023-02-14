<template>
    <section class="py-10 bg-gray-100">
        <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <template v-for="plat in plats">
                <Carte :plat="plat" />
            </template>
        </div>
    </section>
</template>

<script setup>
    import axios from 'axios';
    import { ref,watch } from 'vue';
    import Carte from './Carte.vue';

    const props = defineProps({
        categorie: String
    })

    const plats = ref([]);

    async function getPlats() {
        await axios.get(`https:www.themealdb.com/api/json/v1/1/filter.php?c=${props.categorie}`)
            .then(response => {
                plats.value = response.data.meals;
            })
            .catch(error => {
                console.log(error)
            })
    }
    

    getPlats();

    watch(props.categorie, getPlats);

</script>