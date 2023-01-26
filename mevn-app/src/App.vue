<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FlexContainer from './components/FlexContainer.vue';
</script>

<template>
  <div class="container mx-auto px-2">
    <NavComponent />
    <RouterView />
  </div>

</template>

<style scoped>

</style>
