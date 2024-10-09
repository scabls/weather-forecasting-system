import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Local',
      component: HomeView,
    },
    {
      path: '/:adcode(\\d+)',
      name: 'search',
      component: () => import('@/views/OtherPlaceView.vue'),
    },
  ],
})

export default router
