import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Torneios from '../views/Torneios.vue';
import Ranking from '../views/Ranking.vue';
import Contact from '../views/Contact.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => HomePage
    },
  
    {
      path: '/ranking',
      component: Ranking
    },
    {
      path: '/torneios',
      component: Torneios
    },
    {
      path: '/contact',
      component: Contact,
    }
  ]
})

export default router
