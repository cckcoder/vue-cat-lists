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
    img: "https://cdn-fastly.petguide.com/media/2022/02/16/8260283/scottish-straight.jpg?size=1200x628"
  },
  {
    id: 32414,
    name: "Heng",
    age: "4 yrs",
    weight: "7 kg",
    favoriteFood: "What ever",
    img: "https://penntoday.upenn.edu/sites/default/files/2020-02/cat-behavior-social.jpg"
  },
  {
    id: 32415,
    name: "Thao",
    age: "N/A",
    weight: "4 kg",
    favoriteFood: "What ever",
    img: "https://www.bubblypet.com/wp-content/uploads/2021/11/Beautiful-grey-cat-breed-portrait.jpg"
  }
])
</script>

<template>
  <div class="row">
    <h1>My Cat Here</h1>
    <CatCard v-for="cat in cats" :key="cat.id" :cat="cat"/>
  </div>
</template>
