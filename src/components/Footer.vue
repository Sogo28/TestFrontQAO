<script setup>
import logoFooter from '@/assets/images/logoFooter.png';
import youtube from '@/assets/icons/youtube.svg';
import twitter from '@/assets/icons/twitter.svg';
import instagram from '@/assets/icons/instagram.svg';
import facebook from '@/assets/icons/facebook.svg';
</script>

<template>
  <footer class="flex justify-between items-center py-8 px-32 bg-brand-900 rounded-t-3xl relative left-0 bottom-0 w-full">
    <div class="flex flex-row gap-2 items-center">
      <img :src="logoFooter" alt="footer image" class="h-10">
      <span class="text-sm">ART INSTITVTE CHICAGO</span>
    </div>
    <div class="flex flex-row gap-2">
      <img :src="youtube" alt="" class="text-white border-2 border-white rounded-lg p-1" />
      <img :src="twitter" alt="" class="text-white border-2 border-white rounded-lg p-1" />
      <img :src="instagram" alt="" class="text-white border-2 border-white rounded-lg p-1" />
      <img :src="facebook" alt="" class="text-white border-2 border-white rounded-lg p-1" />
    </div>
  </footer>
</template>