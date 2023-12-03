import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tasks'
  },
  {
    path: '/',
    component: () => import('@/views/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/tasks'
      },
      {
        path: 'tasks',
        component: () => import('@/views/Tasks.vue')
      },
      {
        path: 'events',
        component: () => import('@/views/Events.vue')
      },
      {
        path: 'groceries',
        component: () => import('@/views/Groceries.vue')
      },
      {
        path: 'utilities',
        component: () => import('@/views/Utilities.vue')
      },
      {
        path: 'expenses',
        component: () => import('@/views/Expenses.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
