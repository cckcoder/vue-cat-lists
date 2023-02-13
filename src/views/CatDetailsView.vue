<script setup>
import { ref, onMounted } from 'vue'
import CatService from '@/services/CatService.js'

const props = defineProps({
  id: {
    required: true
  }
})

const cat = ref(null)
const id = ref(props.id)

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
<div class="row" v-if="cat">
  <div class="card mb-3 col-md-8 offset-md-2 ">
    <div class="row g-0">
      <div class="col-md-6">
        <img :src="cat.img" class="img-fluid" :alt="cat.name">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{ cat.name }}</h5>
          <p class="card-text">Age: {{ cat.age }}</p>
          <p class="card-text">Weight: {{ cat.weight }}</p>
          <p class="card-text">Favorite Food: {{ cat.favoriteFood }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
