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
      <RouterLink to="/cat/32413">
        <button class="btn btn-info">See more.</button>
      </RouterLink>
    </div>
  </div>
</template>
