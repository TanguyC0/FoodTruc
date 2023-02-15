<template>
    <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
        <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
            <router-link :to="'/'" class="flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-6 text-blue-500 sm:h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>

                <span class="self-center whitespace-nowrap text-xl font-semibold">FoodTruc</span>
            </router-link>
        </div>
    </nav>
</template>