<script>
import ManufacturersService from '../../services/ManufacturersServices';

  export default {
    name: 'ManufacturersComponent',
    data() {
      return {
        manufacturers: [],
        error: '',
        blob: ''
      }
    },
    async created() {
      try {
        this.manufacturers = await ManufacturersService.getManufacturers()
      } catch(err) {
        this.error = err.message
      }
    }
  }
</script>

<template>
    <p v-if="error">{{ error }}</p>
      <div
      class="w-full bg-white rounded-md p-8 mb-4"
      v-for="(manufacturer, index) in manufacturers"
      v-bind:item="manufacturer"
      v-bind:index="index"
      v-bind:key="manufacturer._id"
      >
        <h2>{{ manufacturer.name }}</h2>
        <!-- <img :src="require(`../assets/img/brands/Abarth.svg`)" alt=""> -->
        <!-- <img :src="require(`../assets/img/brands/AC.svg`)"> -->
      </div>

</template>

<style scoped>

</style>
