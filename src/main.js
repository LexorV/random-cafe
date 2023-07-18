import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createRouter, createWebHistory } from 'vue-router'
import 'element-plus/dist/index.css'
import ru from 'element-plus/dist/locale/ru.mjs'
import App from './App.vue'
import store from './store'
import CafeFeed from '@/components/CafeFeed'




const router = createRouter({
    routes: [{
        path: '/', component: CafeFeed,
    },
],
    history: createWebHistory()
  })
const app = createApp(App);
app.use(ElementPlus, {
    locale: ru,
  })
app.use(router)
app.use(store)
app.mount('#app')