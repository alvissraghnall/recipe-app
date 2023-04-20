<template>
    <aside class="flex flex-col gap-4 items-center overflow-auto">
        <!-- top -->
        <div class="flex gap-3">
            <img :src="recipeImg" alt="logo" class="w-12 h-12" />
            <div class="flex bg-inputColor rounded-xl p-1">
                <input type="text" placeholder="#explore" class="outline-none bg-transparent border-none" />
                <div class="flex justify-center items-center rounded-md p-1 text-white/95 cursor-pointer bg-rose-600 h-9 w-9">
                    <OhVueIcon
                        name="md-search-outlined"
                    />
                </div>
            </div>
        </div>

        <!--Profile Card -->
        <section class="flex flex-col gap-4 rounded-3xl relative overflow-x-clip bg-[rgba(255,255,255,0.64)]">
            <div class="relative flex flex-col items-center">
                <img :src="coverImg" alt="" class="w-full" />

                <div class="flex justify-center">
                    <img :src="follower1Img" alt="" class="rounded-full absolute w-24 -bottom-12 shadow-profileBoxShadow" />
                </div>
            </div>

            <div class="flex flex-col items-center mt-12 gap-2">
                <span class="font-bold ">
                    Harry Calsberg
                </span>
                <span>
                    Chief Cook, Asquire
                </span>
            </div>

            <div class="flex gap-3 items-center flex-col">
                <hr class="w-10/12 border border-solid border-hrColor" />
                <div class="w-4/5 gap-4 justify-around flex items-center">
                    <div class="flex flex-col justify-center items-center gap-2">
                        <span class="font-semibold">240</span>
                        <span class="text-slate-600 text-sm font-extralight">followers</span>
                    </div>
                    <div class="h-full border-l-2 border-solid border-hrColor"></div>
                    <div class="flex flex-col justify-center items-center gap-2">
                        <span class="font-bold">3802</span>
                        <span class="text-slate-600 text-sm font-extralight">following</span>
                    </div>
                </div>
                <hr class="w-10/12 border border-solid border-hrColor mb-1.5" />
            </div>

            <span class="font-semibold self-center mb-4 text-yellow-500">
                My Profile
            </span>
        </section>

        <!-- Followers Card -->
        <section class="flex flex-col gap-4 rounded-xl w-full text-xs ">
            <h3 class="text-xs font-normal font-poppins">Your followers:</h3>
            <div class="flex justify-between items-center">
                <div class="flex gap-2.5">
                    <img :src="follower1Img" alt="" class="rounded-full h-12 w-12" />
                    <div class="flex flex-col justify-center items-start">
                        <p class="font-semibold">Sam Atkins</p>
                        <span>@samatkins009</span>
                    </div>
                </div>
                <button class="button h-8 px-5"> follow </button>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-2.5">
                    <img :src="follower2Img" alt="" class="rounded-full h-12 w-12" />
                    <div class="flex flex-col justify-center items-start">
                        <p class="font-semibold">Thomas Christians</p>
                        <span>@samatkins009</span>
                    </div>
                </div>
                <button class="button h-8 px-5 bg-yellow-600"> follow </button>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-2.5">
                    <img :src="follower3Img" alt="" class="rounded-full h-12 w-12" />
                    <div class="flex flex-col justify-center items-start">
                        <p class="font-semibold">King Proctor</p>
                        <span>@proctor__</span>
                    </div>
                </div>
                <button class="button h-8 px-5"> follow </button>
            </div>
        </section>
    </aside>
</template>

<script setup lang="ts">
import recipeImg from "../assets/recipe app.jpg";
import coverImg from "../assets/cover.jpg";
// import profileImg from "../assets/profile.jpg";
import follower1Img from "../assets/img1.png";
import follower2Img from "../assets/img2.png";
import follower3Img from "../assets/img3.png";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    MdSearchOutlined
} from "oh-vue-icons/icons";

addIcons(
    MdSearchOutlined
);
</script>