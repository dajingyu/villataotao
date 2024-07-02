/*
 * @Date: 2022-06-25 14:04:19
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-11-16 10:34:04
 * @Description: 文件信息
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:Home,
    redirect:'/main',
    children:[
      {
        path: 'main',
        name: 'main',
        component: () => import( '../views/main.vue')
      },  
      {
        path: '/money',
        name: 'money',
        component: () => import( '../views/money.vue')
      }

    ]
  },
 
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
