<script>
import ReviewService from '../../ReviewService';

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
              <span class="mr-3 text-gray-500">2017</span>
              <span class="mr-3 text-gray-500">2.0</span>
              <span class="mr-3 text-gray-500">petrol</span>
              <span class="mr-3 text-gray-500">automatic</span>
            </div>
          </div>
        </div>
        <hr class="mb-4">
        <h3 class="font-bold text-lg">{{ review.overview.substring(0,20) }}</h3>
        <p>{{ review.rating }}</p>
        <p>{{ review.overview }}</p>
        <p>{{ review.practicality[0].text }}</p>
        <p>{{ review.interior[0].text }}</p>
        <p>{{ review.driving[0].text }}</p>
      </div>

</template>

<style scoped>

</style>
