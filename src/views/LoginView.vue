<script setup>
import login from "@/assets/images/login.png"
import logo from "@/assets/images/logo.png"
import email from "@/assets/icons/email.svg";
import lock from "@/assets/icons/lock.svg";
import Button from "@/components/Button.vue";
import { useRouter } from 'vue-router';
import { ref } from "vue";
import useAuthStore from "@/stores/authStore";

const authStore = useAuthStore();
const router = useRouter();

const goToSignup = () => {
  router.push('/signup')
}

const emailField = ref("");
const passwordField = ref("");

const generalError = ref("");

const submit = async () => {
  try {
    await authStore.logginUser(emailField.value, passwordField.value);
    router.push('/');
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      generalError.value = 'Invalid email or password';
    } else {
      generalError.value = 'An error has occured.';
    }
    console.log(error);
  }
}

</script>
<template>
  <section class="flex flex-row gap-8 w-full min-h-screen">
    <div class="flex flex-col w-1/2 h-full">
      <div class="h-10 w-10 bg-brand-900">
        <div class="rounded-bl-3xl h-full w-full bg-brand-150"></div>
      </div>
      <img :src="login" alt="test" class="py-12 rounded-r-xl w-full bg-brand-900">
      <div class="h-10 w-10 bg-brand-900">
        <div class="rounded-tl-3xl h-full w-full bg-brand-150"></div>
      </div>
    </div>
    <div class="w-1/2">
      <form @submit.prevent="submit" class="flex flex-col justify-center items-center h-full">

        <img :src="logo" alt="logo" class="mb-4 h-20">
        <h2 class="font-bold text-2xl mb-6">Hello Welcome back</h2>
        
        <div class="flex flex-col gap-2 w-1/2 mb-4">
          <label for="email" class="text-lg">Email</label>
          <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
            <img :src="email" alt="email">
            <input type="email" class="bg-brand-100 p-2 rounded-lg w-full focus:outline-none" name="email" id="email"
              placeholder="Enter your email address " v-model="emailField" required>
          </div>
        </div>

        <div class="flex flex-col gap-2 w-1/2 mb-4">
          <label for="password" class="text-lg">Password</label>
          <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
            <img :src="lock" alt="lock">
            <input type="password" class="bg-brand-100 p-2  w-full focus:outline-none " name="password" id="password"
              placeholder="Enter your password" required  v-model="passwordField">
          </div>
        </div>

        <div class="flex flex-row justify-between items-center w-1/2">
          <div>
            <input type="checkbox" name="rememberMe" id="rememberMe">
            <label for="rememberMe"> &nbsp; Remember me</label>
          </div>
          <Button type="text" label="Reset Password" />
        </div>

        <div class="w-1/2">
          <Button label="login" type="primary" class="self-start" />
        </div>

        <div class="flex flex-row justify-center items-center w-1/2 gap-4">
          <hr class="border border-brand-200 w-full">
          <span class="text-brand-200">or</span>
          <hr class="border border-brand-200 w-full">
        </div>

        <div class="flex flex-row w-1/2 justify-evenly items-center">
          <span>Dont have an account ?</span>
          <Button type="text" label="Create Account" :click-function="goToSignup"/>
        </div>
        <p v-if="generalError">{{ generalError }}</p>
      </form>
    </div>
  </section>
</template>
