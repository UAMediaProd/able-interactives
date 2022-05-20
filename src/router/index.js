import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/risks',
    name: 'risks',

    component: () => import(/* webpackChunkName: "about" */ '../views/RisksUncertainties.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
