<script setup>
  import NavBar from "@/components/NavBar.vue"
  import Footer from "@/components/Footer.vue"
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <NavBar/>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>