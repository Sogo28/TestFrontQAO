import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';
import Home from '@/views/Home.vue';
import useAuthStore from '@/stores/authStore';

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
router.beforeEach(async (to, from) => {

  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;

  if (
    !isLoggedIn &&
    to.name !== 'Login' && to.name != 'Signup'
  ) {
    return { name: 'Login' }
  }
})
export default router
