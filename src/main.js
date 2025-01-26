import './assets/styles/styles.scss'
import './assets/font/stylesheet.css'
import Notifications from '@kyvg/vue3-notification'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router, Notifications)

app.mount('#app')
