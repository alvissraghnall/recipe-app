<template>
    <div class="bg-white font-poppins min-h-full rounded-lg overflow-hidden">
      <img class="h-48 w-full object-cover rounded-xl" :src="image" :alt="name">
      <div class="p-2">
        <div class="text-gray-800 font-medium text-lg mb-2">{{ name }}</div>
        <div class="text-gray-600 font-normal text-sm mb-2">By {{ author }}</div>
      </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        name: string,
        author: string,
        image: string
    }>();
</script>

<style scoped>
/* Optional styling for the card component */
</style>
  