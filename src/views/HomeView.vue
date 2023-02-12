<script setup>
import CatCard from '@/components/CatCard.vue'
import { ref } from 'vue'

const cats = ref([
  {
    id: 32413,
    name: "Choke",
    age: "2 yrs",
    weight: "5 kg",
    favoriteFood: "shrimp",
    img: "https://cdn.shopify.com/s/files/1/2195/6819/files/Screen_Shot_2020-04-14_at_3.46.02_PM_large.png?v=1586854010"
  }
])
</script>

<template>
  <div class="row">
    <h1>My Cat Here</h1>
    <CatCard />
  </div>
</template>
