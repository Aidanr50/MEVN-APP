<template>
    <div class="sticky top-0 bg-off-white">
        <header class="text-gray-600 body-font">
            <div class="flex flex-wrap py-5 flex-row justify-between">
                <router-link to="/about" class="flex title-font font-medium items-center text-gray-900">
                    <img class="hidden sm:block" src="../assets/img/AUTOTRUSTED.desktop.png" alt="">
                    <img class="block sm:hidden" src="../assets/img/AUTOTRUSTED-mobile.png" alt="">

                </router-link>
                <nav class="hidden sm:ml-auto sm:flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">Manufacturers</a>
                    <a class="mr-5 hover:text-gray-900">Reviews</a>
                </nav>
                <button class="hidden sm:inline-flex items-center text-white bg-brand-green border-0 py-2 px-4 focus:outline-none hover:bg-green-700 text-base sm:mt-0 md:mt-0">Sign Up
                </button>
                <button class="hidden sm:inline-flex items-center text-white bg-brand-blue border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 text-base sm:mt-0">Login
                </button>
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <nav :class="showMenu ? 'flex' : 'hidden'" class="bg-gray-100 p-4 flex-wrap flex-col items-end text-base justify-center sm:hidden sm:ml-auto">
                    <router-link to="/manufacturers" class="py-2 block hover:text-gray-900">Manufacturers</router-link>
                    <router-link to="/reviews" class="py-2 block hover:text-gray-900">Reviews</router-link>
                    <div class="py-2">
                        <button class="sm:inline-flex items-center text-white bg-brand-green border-0 py-2 px-4 focus:outline-none hover:bg-green-700 text-base sm:mt-0 md:mt-0">Sign Up
                        </button>
                        <button class="sm:inline-flex items-center text-white bg-brand-blue border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 text-base sm:mt-0">Login
                        </button>
                    </div>
                </nav>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            showMenu: false,
        };
        },
        methods: {
        toggleNav: function () {
            this.showMenu = !this.showMenu;
        },
        },
    };
</script>

<style lang="scss" scoped>

</style>