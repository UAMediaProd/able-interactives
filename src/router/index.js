import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'ABLE Interactives',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/risks-and-uncertainties',
    name: 'Risks and Uncertainties',

    component: () => import('../views/RisksUncertainties.vue')
  },
  {
    path: '/elc',
    name: 'ELC Active Learning Tasks',
    component: () => import('../views/ELC.vue'),
  },
  {
    path: '/elc-landing',
    name: 'ELC Landing Page',
    component: () => import('../views/ELCLanding.vue')
  },
  {
    path: '/roadmap',
    name: 'APP Course Roadmap',
    component: () => import('../views/CourseRoadmapDraft.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
