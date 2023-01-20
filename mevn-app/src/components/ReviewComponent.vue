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
  <div>
    <h1>Latest Reviews</h1>
    <hr>
    <p v-if="error">{{ error }}</p>
    <div>
      <div 
      v-for="(review, index) in reviews"
      v-bind:item="review"
      v-bind:index="index"
      v-bind:key="review._id"
      >
        <p>{{ review.rating }}</p>
        <p>{{ review.overview }}</p>
        <p>{{ review.practicality[0].rating }}</p>
        <p>{{ review.practicality[0].text }}</p>
        <p>{{ review.interior[0].rating }}</p>
        <p>{{ review.interior[0].text }}</p>
        <p>{{ review.driving[0].rating }}</p>
        <p>{{ review.driving[0].text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
