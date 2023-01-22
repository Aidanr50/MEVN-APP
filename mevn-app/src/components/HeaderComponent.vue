<template>
    <div class="w-full block bg-off-white sm:bg-white rounded-md mb-4 sm:flex">
        <div class="w-full sm:w-1/3 sm:flex justify-center items-center">
            <div>
                <div class="m-0 sm:mb-6 flex flex-col">
                    <h1 class="text-3xl lg:text-5xl mb-4 order-2 sm:order-1">Audi <span class="font-bold">S3</span></h1>
                    <div class="flex mb-4 order-3 sm:order-2">
                        <img src="../assets/img/star-full.png" alt="">
                        <img src="../assets/img/star-full.png" alt="">
                        <img src="../assets/img/star-full.png" alt="">
                        <img src="../assets/img/star-full.png" alt="">
                        <img src="../assets/img/star-empty.png" alt="">
                        <span class="text-brand-green text-xl ml-2">4.2</span>
                    </div>
                    <p class="text-gray-400 order-1 sm:order-3">Hatchback</p>
                </div>
                <div class="hidden sm:block">
                    <button class="bg-brand-blue text-white px-4 py-2 rounded-md mr-2">Write a Review</button>
                    <button class="hidden border-brand-blue border px-4 py-2 rounded-md text-brand-blue lg:inline">Read Review</button>
                </div>
            </div>
        </div>
        <img class="w-full sm:w-2/3 sm:rounded-tl-none sm:rounded-bl-none rounded-md" src="../assets/img/audi-s3.jpg" alt="">
        <div class="block mt-4 sm:hidden">
            <button class="w-full bg-brand-blue text-white px-4 py-2 rounded-md mr-2">Write a Review</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>

</style>