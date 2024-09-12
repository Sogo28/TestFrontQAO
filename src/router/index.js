import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';
import Home from '@/views/Home.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'login',
          name: 'Login',
          component: LoginView
        },
        {
          path: 'signup',
          name: 'Signup',
          component: SignUpView
        },
      ]
    }
  ]
})

export default router
