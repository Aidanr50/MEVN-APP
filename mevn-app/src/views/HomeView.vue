<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavComponent from '../components/NavComponent.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FlexContainer from '../components/FlexContainer.vue';
</script>

<template>
  <main>
    <HeaderComponent />
    <FlexContainer />
  </main>
</template>
