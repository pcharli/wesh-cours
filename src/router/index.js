import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/liked",
      name: "contact",
      component: ContactView
    },
    {
      path: "/user-settings",
      name: "settings",
      component: ContactView
    }
  ],
})

export default router
