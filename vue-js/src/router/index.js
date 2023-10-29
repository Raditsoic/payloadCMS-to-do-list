  import { createRouter, createWebHistory } from 'vue-router'
  import { tasks } from '../data/task.js'

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('../views/List.vue'),
      },
      {
        path: '/list/:id', 
        name: 'task',
        component: () => import('../views/Task.vue'),
        
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
      },
      {
        path: '/createTask',
        name: 'createTask',
        component: () => import('../views/createTask.vue')
      }
    ]
  })

export default router;
