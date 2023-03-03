/*
 * @Date: 2022-08-09 14:34:42
 * @LastEditors: xutao xutao@infinidata.cc
 * @LastEditTime: 2023-03-03 16:36:46
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('../views/main.vue'),
      },
      {
        path: '/money',
        name: 'money',
        component: () => import('../views/money.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
