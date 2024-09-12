<script setup>
  import Card from "@/components/Card.vue";
  import { onMounted, ref } from "vue";
  import axios from "axios";
  import search from "@/assets/icons/search.svg";

  const searchField = ref("");
  const arts = ref([]);
  const isLoading = ref(true);
  onMounted(async () => {
    try {
      const response = await axios.get("https://api.artic.edu/api/v1/artworks?limit=15");
      arts.value = response.data.data;
      isLoading.value = false;
    } catch (error) {
      console.log(error);
    }
  })
</script>

<template>
  <section class="py-12 px-32 flex flex-col gap-12">
    <div class="w-80">
      <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
        <img :src="search" alt="search">
        <input type="text" class="bg-brand-100 p-2 rounded-lg w-full focus:outline-none" name="search" id="search" placeholder="Recherche ... " v-model="searchField" required>
      </div>
    </div>
    <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
    <div v-else class="grid grid-cols-5 gap-6">
      <Card v-for="art in arts" :key="art.id" :title="art.title" :artist="art.artist_title" :image-link="`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`"/>
    </div>
  </section>
</template>