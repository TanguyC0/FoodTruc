<script setup>
    import axios from 'axios';
    import { ref,onMounted } from 'vue';

    const props = defineProps({
        idPlat: String,
        vue: String
    })

    const plat = ref({});

    async function getPlat() {
        await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.idPlat}`)
            .then(response => {
                plat.value = response.data.meals[0];
            })
            .catch(error => {
                console.log(error)
            })

            console.log(plat.value);
    }

    onMounted(() => {
        getPlat();
    })

</script>

<template>
    <section>
        <div class="container mx-auto px-4">
            
            <div class="flex flex-wrap items-center mt-16">
                <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <h2 class="text-4xl mb-2 font-bold leading-normal">
                        {{ plat.strMeal }}
                    </h2>
                    <div v-if="vue == 'ingredient'">
                        <h3 class="text-3xl mb-2 font-semibold leading-normal">
                            Ingredients
                        </h3>
                        <ul class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            <li v-for="i in 20" :key="ingredient">
                                {{ plat[`strIngredient${i}`] }} - {{ plat[`strMeasure${i}`] }}
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <h3 class="text-3xl mb-2 font-semibold leading-normal">
                        Instructions
                        </h3>
                        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            {{ plat.strInstructions }}
                        </p>
                    </div>
                </div>
                <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div class=" flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg">
                        <img :alt="plat.strMeal" :src="plat.strMealThumb" class="rounded-t-lg">
                            
                        <blockquote class="relative p-8  bg-orange-800 rounded-b-lg" >
                            
                
                            <h4 class="text-xl font-bold text-white">
                                More Information
                            </h4>
                            <p class="text-md font-light mt-2 text-white">
                                <em class="font-semibold">Area :</em> {{ plat.strArea }}
                            </p>
                            <p class="text-md font-light mt-2 text-white">
                                <em class="font-semibold">Category :</em> {{ plat.strCategory }}
                            </p>
                            <p class="text-md font-light mt-2 text-white">
                                <em class="font-semibold">Tags :</em> {{ plat.strTags }}
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>