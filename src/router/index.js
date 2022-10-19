import { createRouter, createWebHistory } from 'vue-router';

import TheHome from '@/modules/home/views/TheHome';

const routes = [
  { 
    path: '/', 
    component: TheHome 
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
