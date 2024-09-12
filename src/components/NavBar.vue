<script setup>
  import logo from "@/assets/images/logo.png";
  import Button from "@/components/Button.vue";
  import useAuthStore from "@/stores/authStore";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const authStore = useAuthStore();
  const goToLogin = () => {
    router.push("/login");
  }

  const logout = () => {
    authStore.logoutUser();
    router.push("/login");
  }
</script>
<template>
  <nav class="flex flex-row justify-between py-2 px-32 bg-brand-900 rounded-b-3xl">
    <img :src="logo" alt="logo" class="h-20">
    <div class="flex justify-center items-center flex-row gap-16">
      <router-link to="/" class="text-brand-100 font-bold px-4 py-2 hover:underline-offset-4 hover:underline ">Accueil</router-link>
      <router-link to="/#" class="text-brand-100 font-bold px-4 py-2 hover:underline-offset-4 hover:underline ">Galerie</router-link>
      <router-link to="/#" class="text-brand-100 font-bold px-4 py-2 hover:underline-offset-4 hover:underline ">A propos</router-link>
      <div class="ml-20">
        <Button v-if="authStore.isLoggedIn" label="Déconnexion" type="secondary" :click-function="logout"/>
        <Button v-if="!authStore.isLoggedIn" label="connexion" type="primary" :click-function="goToLogin"/>
      </div>
    </div>
  </nav>
</template>