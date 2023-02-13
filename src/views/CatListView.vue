<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CatCard from '@/components/CatCard.vue'

const cats = ref(null)

onMounted(() => {
  axios.get("https://my-json-server.typicode.com/cckcoder/mockup-db/cats")
  .then((resp) => {
    cats.value = resp.data
  })
  .catch((error) => {
    console.log("Error")
  })
})

</script>

<template>
  <div class="row">
    <h1>My Cat Here</h1>
    <CatCard v-for="cat in cats" :key="cat.id" :cat="cat"/>
  </div>
</template>
