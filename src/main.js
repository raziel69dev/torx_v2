import './assets/styles/styles.scss'
import './assets/font/stylesheet.css'
import Notifications from '@kyvg/vue3-notification'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {addToCart, updateCounter, userCart} from "@/Stores/userCart.js";
import { initYandexMetrika } from 'yandex-metrika-vue3';

const app = createApp(App)

app.use(router, Notifications)
app.use(initYandexMetrika, {
  id: 99621195,
  env: 'production',
  options: {
    accurateTrackBounce:true,
    defer: true,
    clickmap: true,
    webvisor: true
  }
})

app.mount('#app')



if (localStorage.getItem('userCart')) {
  userCart.cart = JSON.parse(localStorage.getItem('userCart'))
  console.log(userCart)
  updateCounter
}
