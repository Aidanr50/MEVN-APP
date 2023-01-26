<script>
import ReviewService from '../../services/ReviewService';

  export default {
    name: 'ReviewComponent',
    data() {
      return {
        reviews: [],
        error: '',
        blob: ''
      }
    },
    async created() {
      try {
        this.reviews = await ReviewService.getReviews()
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
      v-for="(review, index) in reviews"
      v-bind:item="review"
      v-bind:index="index"
      v-bind:key="review._id"
      >
        <div class="flex items-center mb-4">
          <img class="rounded-full w-10 h-10 mr-2" src="https://picsum.photos/200" alt="">
          <div>
            <h4 class="font-bold text-md">Anita Gofradump</h4>
            <div>
              <span class="mr-3 text-gray-500">{{ review.year }}</span>
              <span class="mr-3 text-gray-500">{{ review.displacement }}</span>
              <span class="mr-3 text-gray-500">{{ review.fuel }}</span>
              <span class="mr-3 text-gray-500">{{ review.transmission }}</span>
            </div>
          </div>
        </div>
        <hr class="mb-4">
        <div class="flex mb-2">
          <img class="w-5 h-5" src="../assets/img/star-full.png" alt="">
          <img class="w-5 h-5" src="../assets/img/star-full.png" alt="">
          <img class="w-5 h-5" src="../assets/img/star-full.png" alt="">
          <img class="w-5 h-5" src="../assets/img/star-full.png" alt="">
          <img class="w-5 h-5" src="../assets/img/star-full.png" alt="">
        </div>
        <h3 class="font-bold text-lg mb-2">{{ review.overview.substring(0,20) }}</h3>
        <p>{{ review.overview }}</p>
      </div>

</template>

<style scoped>

</style>
