<script setup>
  import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="bg-dark navbar navbar-light bg-light p-4">
      <router-link class="navbar-brand text-light" to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        POKE API
      </router-link>
      <div class="text-light">
        <RouterLink to="/" class="text-light me-2" active-class="link-secondary">Home</RouterLink>
        <RouterLink to="/pokemons" class="text-light me-2" active-class="link-secondary">Pokemons</RouterLink>
        <RouterLink to="/favoritos" class="text-light" active-class="link-secondary">Favoritos</RouterLink>
      </div>
    </nav>
  </header>
  
  <RouterView />
</template>
<style scoped>
  * {
    text-decoration: none;
  }
</style>