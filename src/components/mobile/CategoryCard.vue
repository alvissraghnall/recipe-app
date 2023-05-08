<template>
    <div 
        class="rounded-lg w-20 h-20 cursor-pointer"
        :class="active ? 'bg-green-400' : 'bg-gray-200'"
        @click="log"
    >
        <div class="w-full flex justify-center items-center flex-col">
            <img class="object-contain w-2/3" :src="image" alt="">
            <span class="block text-sm font-poppins text-zinc-700">{{ name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    active: boolean;
    name: string,
    image: string
}>();

const log = () =>{
    console.log(props.active);
}
const imgUrl = '../../assets/cat-' + props.name.toLowerCase() + '.jpg';
</script>