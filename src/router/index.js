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
    component: () => import('../views/CourseRoadmap.vue')
  },
  {
    path: '/roadmapDraft',
    name: 'APP Course Roadmap Draft',
    component: () => import('../views/CourseRoadmapDraft.vue')
  },
  {
    path: '/glossary',
    name: 'Pedagogy Glossary',
    component: () => import('../views/PDIET.vue')
  },
  {
    path: '/grantapps',
    name: 'Grant Application Activity',
    component: () => import('../views/GrantApps.vue')
  },
  {
    path: '/wheel',
    name: 'Wheel of Fortune',
    component: () => import('../views/WheelOfFortune.vue')
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
