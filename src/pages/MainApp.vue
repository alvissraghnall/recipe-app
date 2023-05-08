
<template>
    <main v-if="!isMobile" class='relative grid grid-cols-[16rem,auto,18rem] gap-4 p-4 bg-gray-100'>
        <div class="fixed top-0 left-0 right-0 max-h-12 z-50">
            <header class="w-full h-28 border-b-[rgba(102,102,102,1)] border-b border-solid">
                <a href="/" class="w-full h-full text-[rgba(215,215,215,1)] cursor-pointer">
                    <picture></picture>
                </a>
            </header>
        </div>
        <Trends />
        <Feed />
        <Profile />
    </main>

    <div v-else>
        <MobileView />
    </div>
    
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Feed, Profile, Trends, MobileView } from '../components';

let windowWidth = ref(window.innerWidth);
let isMobile = ref(windowWidth.value < 690);

const onResize = () => {
    windowWidth.value = window.innerWidth;
    isMobile.value = windowWidth.value < 768;
    console.log(windowWidth.value, isMobile.value);
}

onMounted(() => {
    window.addEventListener("resize", onResize);
})

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
})
</script>
  