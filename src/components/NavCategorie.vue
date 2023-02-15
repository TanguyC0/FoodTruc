<template>
    <div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <template v-for="categorie in categories">
            <div rel="noopener noreferrer" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 cursor-pointer" @click="current = categorie.strCategory">
                <span class="font-semibold" :class="{'text-red-500 underline' : current == categorie.strCategory}">{{ categorie.strCategory }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
    import axios from 'axios'
    import { ref, watch } from 'vue'

    const categories = ref([]);
    const current = ref("Beef");

    const emit = defineEmits(['change']);

    async function getCategories() {
        await axios.get('www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                categories.value = response.data.categories;
            })
            .catch(error => {
                console.log(error)
            })
    }

    function changeCategorie() {
        emit('change', current.value);
    }

    getCategories();

    watch(current, changeCategorie);


</script>