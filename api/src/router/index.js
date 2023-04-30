import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AnimalData',
      name: 'AnimalData',
      component: () => import('../views/AnimalData.vue')
    },
    {
      path: '/BarGraph',
      name: 'BarGraph',
      component: () => import('../views/BarGraph.vue')
    },
    {
      path: '/PieGraph',
      name: 'PieGraph',
      component: () => import('../views/PieGraph.vue')
    },
  ]
})

export default router
