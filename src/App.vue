<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/cat_logo.jpeg" alt="Cat Logo" width="50" height="50">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav fs-4">
            <RouterLink :to="{ name: 'cat-list' }" class="nav-link">Cats</RouterLink>
            <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <RouterView />
    </div>
</template>

<style scoped>
img {
  border-radius: 50%;
}
</style>
