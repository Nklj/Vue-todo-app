import { createRouter, createWebHistory } from 'vue-router'
import CreateView from '../views/CreateView.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: CreateView
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/TaskView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
