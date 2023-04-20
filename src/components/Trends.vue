<template>
    <aside class='flex flex-col gap-8'>
      <div class="flex mt-4 justify-between">
        <span class='w-6 h-6'><OhVueIcon name="md-home" class="w-6 h-6 cursor-pointer text-stone-700" /></span>
        <span class='w-6 h-6'><OhVueIcon name="md-notifications" class="w-6 h-6 cursor-pointer text-stone-700" /></span>
        <span class='w-6 h-6'><OhVueIcon name="md-comment-sharp" class="w-6 h-6 cursor-pointer text-stone-700" /></span>
        <span class='w-6 h-6'><OhVueIcon name="md-settings" class="w-6 h-6 cursor-pointer text-stone-700" /></span>
      </div>

      <div v-for="(trend, index) in trends" :key="index" class="flex flex-col gap-2">
        <span className='font-semibold'>#{{trend.name}}</span>
        <span className='text-xs'>{{trend.shares}}k shares</span>    
      </div>

      <button class='h-12 w-4/5 self-center'>
        Share
      </button>
    </aside>
</template>

<script setup lang="ts">

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    MdNotifications,
    MdCommentSharp,
    MdSettings,
    MdHome,
    MdComment
} from "oh-vue-icons/icons";

const trends = [1,1,1,1].map(
    (el, i) => { return {
        name: i == 0 ? "TheSopranos" : i == 1 ? "Ozark" : i == 2 ? "BreakingBad" : "TheWire",
        shares: Math.floor(Math.random() * 138)
    }}
);


addIcons(
    MdNotifications,
    MdHome,
    MdSettings,
    MdCommentSharp
)
</script>