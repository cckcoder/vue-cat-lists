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
      path: '/cat/:id',
      name: 'cat-details',
      props: true,
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
