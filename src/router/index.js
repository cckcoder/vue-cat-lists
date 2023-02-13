import { createRouter, createWebHistory } from 'vue-router'
import CatListView from '../views/CatListView.vue'
import CatDetailsView from '../views/CatDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cat-list',
      component: CatListView
    },
    {
      path: '/cat/32413',
      name: 'cat-details',
      component: CatDetailsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
