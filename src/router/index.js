import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Creations',
      name: 'Creations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Creations.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/Projets',
      name: 'Projets',
      component: () => import('../views/Projets.vue')
    },
  ]
})

export default router
