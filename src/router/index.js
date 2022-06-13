import { createRouter, createWebHashHistory } from 'vue-router'
import dashboard from '../components/dashboard.vue'
import history from '../components/history.vue'
import login from '../components/login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: dashboard
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
