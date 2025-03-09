import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import admin from './admin';
import auth from './auth';
// import client from './client'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'e-commerce',
        meta: {
          breadcrumb: ['E-Commerce Dashboard']
        },
        component: () => import('@/views/dashboards/Ecommerce.vue')
      },
      {
        path: '/dashboard-banking',
        name: 'dashboard-banking',
        meta: {
          breadcrumb: ['Banking Dashboard']
        },
        component: () => import('@/views/dashboards/Banking.vue')
      },
      
      
    ]
  } 
];

routes.push(auth);
routes.push(admin);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});


export default router;
