import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/manufacturers',
      name: 'manufacturers',
      component: () => import('../views/ManufacturersView.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReviewsView.vue')
    }
  ]
})

export default router
