<script setup>
import { RouterLink } from 'vue-router';


defineProps({
  cat: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <div class="col-md-4">
    <img class="img-thumbnail" :src="cat.img" :alt="cat.name">
    <h2>{{ cat.name }}</h2>
    <span>Age: {{ cat.age }}</span>
    <div>
      <RouterLink 
        class="btn btn-info mt-2 mb-2" 
        :to="{ name: 'cat-details', params: { id: cat.id } }"
      >
        See more.
      </RouterLink>
    </div>
  </div>
</template>
