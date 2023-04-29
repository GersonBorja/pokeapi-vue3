import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/favoritos',
      name: 'favorito',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FavoritosView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/:pathMach(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
    
  ]
})

export default router
