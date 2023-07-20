import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-plus/dist/index.css'
import ru from 'element-plus/dist/locale/ru.mjs'
import App from './App.vue'
import store from './store'
import CafeFeed from '@/page/CafeFeed'
import RandomCafe from '@/page/RandomCafe'
import OneCafe from '@/page/OneCafe'




const router = createRouter({
    routes: [{
        path: '/', component: CafeFeed,
    },
    {
      path: '/random', component: RandomCafe,
  },
  {
    path: '/cafe/:id', component: OneCafe,
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
app.use(VueAxios, axios)
app.mount('#app')