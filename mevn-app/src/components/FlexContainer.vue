

<template>
    <main class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 ">
        <div class="sm:w-2/3">
            <RatingContainer />
            <ReviewComponent />
            
        </div>
        <div class="sm:w-1/3 bg-gray-400 h-96 rounded-md">

        </div>
    </main>
</template>

<script>
    import RatingContainer from './RatingContainer.vue';
    import ReviewComponent from './ReviewComponent.vue';

    export default {
        components: {
            RatingContainer,
            ReviewComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>