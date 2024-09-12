<script setup>
  import { defineProps } from "vue";
  import defaultImage from "@/assets/images/default.png"
  defineProps({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
    default: "--"
  },
  imageUrl: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="overflow-hidden rounded relative transform hover:scale-95 transition-transform duration-300 ease-in-out"> 
    <div class="h-64 bg-cover bg-center" :style="imageUrl ? `background-image: url(${imageUrl})` : `background-image: url(${defaultImage})`"></div>
    <div class="absolute bottom-0 left-0 right-0 flex flex-col bg-[#1A000799] bg-opacity-60 p-2">
      <h2 class="text-brand-100 text-xl font-medium truncate ...">{{ title }}</h2>
      <h2 class="text-brand-200 text-lg truncate ...">{{ artist }}</h2>
    </div>
  </div>
</template>