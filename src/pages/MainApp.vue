
<template>
    <main v-if="!isMobile" class='relative grid grid-cols-[16rem,auto,18rem] gap-4 p-4 bg-gray-100'>
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
  