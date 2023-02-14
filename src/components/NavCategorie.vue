<template>
    <div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <template v-for="categorie in categories">
            <a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600" @click="current = categorie.strCategory">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		        </svg> -->
                <span class="font-semibold" :class="{'text-red-500 underline' : current == categorie.strCategory}">{{ categorie.strCategory }}</span>
            </a>
        </template>
    </div>
    {{ current  }}
</template>

<script setup>
    import axios from 'axios'
    import { ref, watch } from 'vue'

    const categories = ref([]);
    const current = ref("Beef");

    const emit = defineEmits(['change']);

    async function getCategories() {
        await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                categories.value = response.data.categories;
                console.log(categories.value);
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