/*
 * @Author: xutao xutao@infinidata.cc
 * @Date: 2022-08-09 14:34:42
 * @LastEditors: xutao xutao@infinidata.cc
 * @LastEditTime: 2023-03-03 15:34:08
 * @FilePath: \villataotao\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
