<script setup>
  import Card from "@/components/Card.vue";
  import { onMounted, ref, computed, watch} from "vue";
  import axios from "axios";
  import search from "@/assets/icons/search.svg";
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  const searchField = ref("");
  const arts = ref([]);
  const isLoading = ref(true);

  onMounted(async () => {

    try {
      const response = await axios.get("https://api.artic.edu/api/v1/artworks?limit=15");
      arts.value = response.data.data;
      isLoading.value = false;

      if(route.query.q) {
        searchField.value=route.query.q;
      }
    } 
    catch (error) {
      console.log(error);
    }

    
  })

  const filteredArts = computed(() => {
      if (!searchField.value) {
        return arts.value;
      }
      return arts.value.filter(art =>
        art.title.toLowerCase().includes(searchField.value.toLowerCase())
      );
    });

  const updateSearch = () => {
    const query = searchField.value ? { q: searchField.value } : {};
    router.push({ query });
  }

  watch(
      () => route.query.q,
      (newQuery) => {
        searchField.value = newQuery || '';
      }
  );

</script>

<template>
  <section class="py-12 px-32 flex flex-col gap-12">
    <div class="w-80">
      <div class="flex flex-row w-full bg-brand-100 rounded-lg px-4 py-1 gap-4 border border-brand-200">
        <img :src="search" alt="search">
        <input type="text" class="bg-brand-100 p-2 rounded-lg w-full focus:outline-none" name="search" id="search" placeholder="Recherche ... " v-model="searchField" required @input="updateSearch">
      </div>
    </div>
    <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
    <div v-else class="grid grid-cols-5 gap-6">
      <div v-if="filteredArts.length == 0">Aucun resultat.</div>
      <Card v-for="art in filteredArts" :key="art.id" :title="art.title" :artist="art.artist_title ? art.artist_title : '--' " :image-url="art.image_id ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg` : null"/>
    </div>
  </section>
</template>