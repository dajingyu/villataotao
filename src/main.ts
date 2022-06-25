import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(store).use(router).use(ElementPlus).mount('#app')