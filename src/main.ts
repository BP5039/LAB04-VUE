// import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'nprogress/nprogress.css'
import router from './router'
import { inject } from '@vercel/analytics'
inject()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
