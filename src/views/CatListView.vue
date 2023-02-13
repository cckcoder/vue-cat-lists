<script setup>
import { ref, onMounted } from 'vue'
import CatService from '@/services/CatService.js'
import CatCard from '@/components/CatCard.vue'

const cats = ref(null)

onMounted(() => {
  CatService.getCats()
  .then((resp) => {
    cats.value = resp.data
  })
  .catch((error) => {
    console.log('Error:', error)
  })
})

</script>

<template>
  <div class="row">
    <h1>My Cat Here</h1>
    <CatCard v-for="cat in cats" :key="cat.id" :cat="cat"/>
  </div>
</template>
