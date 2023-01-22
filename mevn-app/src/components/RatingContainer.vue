<template>
    <div class="w-full bg-white rounded-md p-8 mb-4">
        <div class="flex mb-2 items-center">
            <h2 class="text-xl text-brand-green font-bold mr-4">Reviews</h2>
            <img class="w-5 h-5 mr-1" src="../assets/img/star-full.png" alt="">
            <span class="text-xl">4.2</span>
        </div>

        <hr class="mb-2">

        <div class="flex">
            <div class="mr-24">
                <div class="flex items-center h-8">
                    <input type="checkbox" name="" id="" class="w-5 h-5 mr-2">
                    <span class="mr-2">5-star</span>
                    <progress class="h-5 rounded-md bg-gray-50" value="60" max="100"></progress>
                </div>
                <div class="flex items-center h-8">
                    <input type="checkbox" name="" id="" class="w-5 h-5 mr-2">
                    <span class="mr-2">4-star</span>
                    <progress class="h-5 rounded-md bg-gray-50" value="10" max="100"></progress>
                </div>
                <div class="flex items-center h-8">
                    <input type="checkbox" name="" id="" class="w-5 h-5 mr-2">
                    <span class="mr-2">3-star</span>
                    <progress class="h-5 rounded-md bg-gray-50" value="11" max="100"></progress>
                </div>
                <div class="flex items-center h-8">
                    <input type="checkbox" name="" id="" class="w-5 h-5 mr-2">
                    <span class="mr-2">2-star</span>
                    <progress class="h-5 rounded-md bg-gray-50" value="9" max="100"></progress>
                </div>
                <div class="flex items-center h-8">
                    <input type="checkbox" name="" id="" class="w-5 h-5 mr-2">
                    <span class="mr-2">1-star</span>
                    <progress class="h-5 rounded-md bg-gray-50" value="10" max="100"></progress>
                </div>
            </div>
            <div class="hidden lg:block">
                <h2 class="font-bold text-xl">Own an Audi S3?</h2>
                <p class="mb-4 w-64">Let everyone know your experiences with your car.</p>
                <button class="bg-brand-blue text-white px-4 py-2 rounded-md mr-2">Write a Review</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ReviewContainer'
    }
</script>

<style lang="scss" scoped>

</style>