<script setup>
import signup from "@/assets/images/signup.png"
import logo from "@/assets/images/logo.png"
import email from "@/assets/icons/email.svg";
import lock from "@/assets/icons/lock.svg";
import account from "@/assets/icons/account.svg";
import Button from "@/components/Button.vue";
import { useRouter } from 'vue-router';
import {ref} from 'vue';
import useAuthStore from "@/stores/authStore.js";


const router = useRouter();
const goToLogin = () => {
  router.push("/login");
}

const authStore = useAuthStore();

const nameField = ref("");
const emailField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");

const nameError = ref("");
const emailError = ref("");
const passwordError = ref("");
const confirmPasswordError = ref("");
const generalError = ref("");

const validate = () => {
  
  let isValid = true;

  if(nameField.value.length < 2 ){
    nameError.value= "Invalid Name";
    isValid = false;
  }
  else{
    nameError.value = "";
  }
  
  if(passwordField.value.length < 8){
    passwordError.value = "Please type a strong password";
    isValid = false;
  }
  else{
    passwordError.value = "";
  }

  if(passwordField.value !== confirmPasswordField.value){
    confirmPasswordError.value = "Passwords do not match!"
    isValid = false;
  } else{
    confirmPasswordError.value = "";
  }

  return isValid;
}

const register = async () => {
  if (validate()) {

    try {
      await authStore.registerUser(emailField.value, passwordField.value);
      router.push('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        generalError.value = 'This email is already in use. Please use another email.';
      } else {
        generalError.value = 'An error occurred during registration.';
      }
    }
  }
}

</script>
<template>
  <section class="flex flex-row gap-8 w-full min-h-screen">
    <div class="flex flex-col w-1/2 h-full">
      <div class="h-10 w-10 bg-brand-900">
        <div class="rounded-bl-3xl h-full w-full bg-brand-150"></div>
      </div>
      <img :src="signup" alt="test" class="py-12 rounded-r-xl w-full bg-brand-900">
      <div class="h-10 w-10 bg-brand-900">
        <div class="rounded-tl-3xl h-full w-full bg-brand-150"></div>
      </div>
    </div>
    <div class="w-1/2">
      <form @submit.prevent="register" class="flex flex-col justify-center items-center h-full">

        <img :src="logo" alt="logo" class="mb-4 h-20">
        <h2 class="font-bold text-2xl mb-6">Create an account</h2>

        <div class="flex flex-col gap-2 w-1/2 mb-4">
          <label for="name" class="text-lg">Name</label>
          <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
            <img :src="account" alt="name">
            <input type="name" class="bg-brand-100 p-2 rounded-lg w-full focus:outline-none" name="name" id="name"
              placeholder="Enter your name" required v-model="nameField">
          </div>
          <p v-if="nameError">{{ nameError }}</p>
        </div>
        
        <div class="flex flex-col gap-2 w-1/2 mb-4">
          <label for="email" class="text-lg">Email</label>
          <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
            <img :src="email" alt="email">
            <input type="email" class="bg-brand-100 p-2 rounded-lg w-full focus:outline-none" name="email" id="email"
            placeholder="Enter your email address " required v-model="emailField">
          </div>
          <p v-if="emailError">{{ emailError }}</p>
        </div>
        
        <div class="flex flex-col gap-2 w-1/2 mb-4">
          <label for="password" class="text-lg">Password</label>
          <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
            <img :src="lock" alt="lock">
            <input type="password" class="bg-brand-100 p-2  w-full focus:outline-none " name="password" id="password"
            placeholder="Enter your password" required v-model="passwordField">
          </div>
          <p v-if="passwordError">{{ passwordError }}</p>
        </div>
        
        <div class="flex flex-col gap-2 w-1/2 mb-4">
          <label for="confirmPassword" class="text-lg">Confirm Password</label>
          <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
            <img :src="lock" alt="lock">
            <input type="password" class="bg-brand-100 p-2  w-full focus:outline-none " name="confirmPassword" id="confirmPassword"
            placeholder="Enter your password" required v-model="confirmPasswordField">
          </div>
          <p v-if="confirmPasswordError">{{ confirmPasswordError }}</p>
        </div>

        <div class="w-1/2">
          <Button label="Register" type="primary" class="self-start" />
        </div>

        <div class="flex flex-row justify-center items-center w-1/2 gap-4">
          <hr class="border border-brand-200 w-full">
          <span class="text-brand-200">or</span>
          <hr class="border border-brand-200 w-full">
        </div>

        <div class="flex flex-row w-1/2 justify-evenly items-center">
          <span>You have an account!</span>
          <Button type="text" label="Sign in" :click-function="goToLogin"/>
        </div>
        <p v-if="generalError" class="text-lg text-brand-500">{{ generalError }}</p>
      </form>
    </div>
  </section>
</template>
