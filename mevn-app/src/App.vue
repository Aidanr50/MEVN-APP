<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
import ReviewComponent from './components/ReviewComponent.vue';
import FlexContainer from './components/FlexContainer.vue';
</script>

<template>
  <div class="container mx-auto px-2">
    <NavComponent />
    <RouterView />
    <FlexContainer />
    <ReviewComponent />
  </div>

</template>

<style scoped>

</style>
