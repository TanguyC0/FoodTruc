import { createRouter, createWebHistory } from 'vue-router';
import Home from './page/Home.vue';
import Recette from './page/Recette.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Home', component: Home },
        { path: '/recette', component: Recette },
    ]
});

export default router;