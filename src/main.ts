/*
 * @Date: 2022-08-09 14:34:42
 * @LastEditors: xutao xutao@infinidata.cc
 * @LastEditTime: 2023-03-06 15:13:34
 */
// import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/home.less';
const app = createApp(App);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
// for (const [key, components] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, components);
// }
app.use(store).use(router).use(ElementPlus).mount('#app');
