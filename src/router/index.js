import { createRouter, createWebHistory } from 'vue-router'
import LocalWeather from '@/views/LocalWeather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Local',
      component: LocalWeather,
    },
    {
      path: '/:adcode(\\d+)',
      name: 'search',
      component: () => import('@/views/SearchWeather.vue'),
    },
  ],
})

export default router
