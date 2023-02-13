<script setup>
import { ref, onMounted } from 'vue'
import CatService from '@/services/CatService.js'

const cat = ref(null)
const id = ref(32413)

onMounted(() => {
  CatService.getCat(id.value)
  .then((resp) => {
    console.log(resp)
    cat.value = resp.data
  })
  .catch((error) => {
    console.log('Error:', error)
  })
})

</script>


<template>
<div v-if="cat">
  <h1>{{ cat.name }}</h1>
  <p>{{ cat.favoriteFood }}</p>
</div>
</template>
