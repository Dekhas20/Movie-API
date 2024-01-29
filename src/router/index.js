import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/search',
      component: Main
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/search'
    }
  ]
})

export default router