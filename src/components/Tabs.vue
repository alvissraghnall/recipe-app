<template>
    <div class="mb-10">
      <ul class="flex justify-start p-0 list-none">
          <li class="my-0 mx-4 text-gray-500 cursor-pointer" v-for="(item, index) in props.items" :key="index" @click="$emit('tabClick', index)">
              <div :class="{ 'pb-2 border-b-2 border-solid border-[#d91b42] text-[#d91b42]': item === activeItem }">
                  {{ item }}
              </div>
          </li>
      </ul>
    </div>
</template>


<script setup lang="ts">
// import { defineProps } from 'vue';

const props = defineProps<{
    items: string[],
    activeItem: string
}>();
</script>