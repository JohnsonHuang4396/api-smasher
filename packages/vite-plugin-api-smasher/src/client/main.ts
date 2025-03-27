import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import 'vfonts/FiraCode.css'
import './styles/cm.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
