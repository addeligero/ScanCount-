import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/Dashboard.vue'

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
  ],
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn()

  // Redirect logged-in users away from Welcome and Register pages
  if ((to.path === '/' || to.path === '/register') && loggedIn) {
    next('/dashboard')
  }
  // Prevent logged-out users from accessing the Dashboard
  else if (to.path === '/dashboard' && !loggedIn) {
    next('/')
  }
  // Allow navigation for all other cases
  else {
    next()
  }
})

export default router
