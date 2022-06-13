import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Notifications from '@kyvg/vue3-notification'
import Vue3TouchEvents from "vue3-touch-events";

createApp(App).use(Vue3TouchEvents).use(store).use(router).use(Notifications).mount('#app')

