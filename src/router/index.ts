import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import PageError from '@/views/PageError.vue'

// Mock function to check if the user is logged in
const isLoggedIn = () => !!localStorage.getItem('token')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageError',
      component: PageError,
    },
  ],
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn()

  if ((to.path === '/' || to.path === '/register') && loggedIn) {
    next('/dashboard')
  } else if (to.path === '/dashboard' && !loggedIn) {
    next('/')
  }
  // Allow navigation for all other cases
  else {
    next()
  }
})

export default router
