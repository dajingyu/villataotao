/*
 * @Date: 2022-06-25 14:04:19
 * @LastEditors: tao.xu
 * @LastEditTime: 2023-01-30 16:35:03
 * @Description: 文件信息
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'


import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import { createPinia } from 'pinia'
import './style/home.less'
const pinia = createPinia()

const app = createApp(App)
// 创建pinia 实例

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// 挂载到 Vue 根实例上
app.use(pinia);
// 使用element 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).mount('#app')



