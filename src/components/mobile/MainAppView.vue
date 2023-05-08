<template>
    <main class="m-2 mb-4">
        <div class="flex items-center mt-4">
            <div class="w-4/5 mx-2 space-y-1">
                <div class="text-neutral-400 text-xs font-light">
                    Hello, {{ username }}
                </div>
                <h5 class="font-poppins font-medium">
                    What would you like to cook today?
                </h5>
            </div>
            <div class="w-1/5">
                <div class="rounded-full w-full flex justify-center items-center">
                    <img class="object-conntain w-8 h-8 rounded-full" src="https://api.dicebear.com/5.x/avataaars/svg?flip=false" alt="">
                </div>
            </div>
        </div>

        <form class="m-3 rounded-2xl">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Search Recipes, Ingredients..." required>
                <button type="submit"
                    class="absolute right-1 bottom-2.5 bg-transparent focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>

                </button>
            </div>
        </form>

        <div class="m-[unset]">
            <h5 class="font-poppins font-medium text-lg ml-[0.3rem] mb-[0.4rem]">Categories</h5>
            <!-- <div class="flex flex-wrap justify-center">
            </div> -->
            <swiper
                :slides-per-view="4"
                :space-between="30"
                class="ml-[.4rem_!important]"
            >
                <swiper-slide
                    v-for="category in categories"
                    :key="category.name"
                    v-slot="{ isActiveSlide }"
                >
                    <CategoryCard
                        :name="category.name"
                        :active="isActiveSlide"
                        :image="category.img"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="m-[unset] my-4">
            <h5 class="font-poppins font-medium text-lg ml-[0.3rem] mb-[0.4rem]">Recommendation</h5>
            <swiper
                :slides-per-view="2"
                :space-between="30"
                class="ml-[.4rem_!important] h-[288px]"
            >
                <swiper-slide
                    v-for="recipe in recipes"
                    :key="recipe.id"
                    v-slot="{ isActiveSlide }"
                >
                    <RecipeCard
                        :name="recipe.name"
                        :author="recipe.author"
                        :image="recipe.image"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="m-[unset] my-4">
            <h5 class="font-poppins font-medium text-lg ml-[0.3rem] mb-[0.4rem]">Recipes of the week</h5>
            <swiper
                :slides-per-view="2"
                :space-between="30"
                class="ml-[.4rem_!important]"
                :autoplay="true"
                
            >
                <swiper-slide
                    v-for="recipe in recipes"
                    :key="recipe.id"
                    v-slot="{ isActiveSlide }"
                >
                    <RecipeCard
                        :name="recipe.name"
                        :author="recipe.author"
                        :image="recipe.image"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </main>
</template>

<script setup lang="ts">
import {CategoryCard, RecipeCard} from ".";
import {
    OhVueIcon, addIcons
} from "oh-vue-icons";
import {
    HiSolidUser
} from "oh-vue-icons/icons";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import breakfastImg from "../../assets/cat-breakfast-removebg-preview.png";
import dinnerImg from "../../assets/cat-dinner-removebg-preview.png";
import lunchImg from "../../assets/cat-lunch-removebg-preview.png";
import pastaImg from "../../assets/cat-pasta-removebg-preview.png";
import seafoodImg from "../../assets/cat-seafood-removebg-preview.png";
import dessertImg from "../../assets/cat-desssert-removebg-preview.png";

addIcons(HiSolidUser);
let username = "Sam";
let isActiveSlide: boolean;

const categories = [
    {name: "Breakfast", img: breakfastImg},
    {name: "Lunch", img: lunchImg},
    {name: "Dinner", img: dinnerImg},
    {name: "Dessert", img: dessertImg},
    {name: "Pasta", img: pastaImg},
    {name: "Seafood", img: seafoodImg}
];

const recipes = [
    {
        id: 1,
        name: 'Spaghetti Bolognese',
        author: 'John Smith',
        image: 'https://edamam-product-images.s3.amazonaws.com/web-img/99f/99f42a9f340f6786bb70cd0389a9f3bc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJGMEQCIBZHX1Anu%2BtSl9ZOt9ImTDCw5UEn8OVEfsmgi0%2B%2BAhd6AiAE7vSOJTSs4xLvbes%2BLs6rl2eQil3WG8Rpw4G%2BhDfUICq5BQhQEAAaDDE4NzAxNzE1MDk4NiIMc4Fj%2Flw5qTPQ5gDQKpYFqQ4s94%2Fi5LKDEMcqVOaMfKAdkaKW5Y6TNS%2FibONVqCpttXdyeuQfcaO1rD8qYGg8c%2Bo8VzHNQVgOO8O2mn%2B4gzhGxgptLVzksAmTDdbuHRjXav3B57Dlj6EXYBcAVvQT8vJRDRnyNQ1s1C7o%2Bw3sXkYD4WYwfl1Ds6ZN8i1inUj9jI7tAMr%2B63Ou41OLYYeuHUlN2T%2FfpzskOEHcf7QeKczO2jjXZfy%2BteC2dYXnNY32aMDu0s7qp0m%2BbXsgcS5IdUxKd82AR%2F%2FaDXkVkohsSFZ8d9bgmwUdpjSKNj0hjoSnwvZYVKmHTpci9Z5ivu8DQKdcLpztQS7kbUine9u4wA837JKlEsrJvRkAxzDhEt84CuHGcn9Orwvj3f3jb1VwQj8kDfkLiDjqiNNMvMhD4gx53eWi94BgB%2F2VxGk2FlMCTbK6K4shOFwfO%2BdPvgaDx2fiMCK9c6DsAsg0xu%2F7glRlx1byUnWpV%2F%2BXDREfxQ0ztkAGV8Zctqs1hCx233n6iL%2Fj426tbyd6clgypmnAx6vMAFoLBbj89OBE39NNLdMWwt%2BSoANNkghOEgmz255bOSn2MmDPQ4e6%2BzCe13vhAyT%2F%2Bpb4Fu1IAGwuVR25oJT3Hac3Jl91eiHMb31lqVcIzzy3F0oIfv8O40mD%2BKozydZsgl6c8UM6YJLTYXbF6zXrVj7VSnwA%2FPKyUiIcKfXDKP1ZjpJsQ5v0yuQbCIik3KoNn%2BDE0oPaNY2lLN6atHHlgNEInPCgbEKM0cLv7uahyvlgpvhYsCAYf3L0hgrPsq1q0MqEPRI%2B5v8X0rVwTfps9dusYI2GJyjsxmJ4086Ur%2FtqiKhnqv6urodz1OwxxvBVKnrkwunLlfhb1%2Bw04d2DEvXnYagwhNvgogY6sgFdJfTfRy%2FwIG%2Fcy0PkLIUjFRv%2BqtQCnmJhOZpp%2FlS7oH%2FZWIe4RaC0gRJYaxKet4Dcv1OAdeiSLH45DbKOR3fgLF4yeVZkMOOEWPDmJ9OJwNRDTjtokt6RwPNDVBDDYihhRP6fe%2BI7lvoJS%2BqBtyyBPlqJoTjnnlbSkYzck4ubeYp1AyKHqnG0Vf9xvkCbaKSircu1qTRqrrVJQXZM0zBzzDFb67qexygLd3bl3Tkvm7wD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230507T233112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFO3BJPU74%2F20230507%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fb9b69fb2a5e2eee56020e205dcc6242e5a9d37cdfbdea4079440e2b35b2be52'
    },
    {
        id: 2,
        name: 'Chicken Alfredo',
        author: 'Jane Doe',
        image: 'https://edamam-product-images.s3.amazonaws.com/web-img/ada/ada41baf0e5d3d62b7f2c3b494a4b22f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJGMEQCIBZHX1Anu%2BtSl9ZOt9ImTDCw5UEn8OVEfsmgi0%2B%2BAhd6AiAE7vSOJTSs4xLvbes%2BLs6rl2eQil3WG8Rpw4G%2BhDfUICq5BQhQEAAaDDE4NzAxNzE1MDk4NiIMc4Fj%2Flw5qTPQ5gDQKpYFqQ4s94%2Fi5LKDEMcqVOaMfKAdkaKW5Y6TNS%2FibONVqCpttXdyeuQfcaO1rD8qYGg8c%2Bo8VzHNQVgOO8O2mn%2B4gzhGxgptLVzksAmTDdbuHRjXav3B57Dlj6EXYBcAVvQT8vJRDRnyNQ1s1C7o%2Bw3sXkYD4WYwfl1Ds6ZN8i1inUj9jI7tAMr%2B63Ou41OLYYeuHUlN2T%2FfpzskOEHcf7QeKczO2jjXZfy%2BteC2dYXnNY32aMDu0s7qp0m%2BbXsgcS5IdUxKd82AR%2F%2FaDXkVkohsSFZ8d9bgmwUdpjSKNj0hjoSnwvZYVKmHTpci9Z5ivu8DQKdcLpztQS7kbUine9u4wA837JKlEsrJvRkAxzDhEt84CuHGcn9Orwvj3f3jb1VwQj8kDfkLiDjqiNNMvMhD4gx53eWi94BgB%2F2VxGk2FlMCTbK6K4shOFwfO%2BdPvgaDx2fiMCK9c6DsAsg0xu%2F7glRlx1byUnWpV%2F%2BXDREfxQ0ztkAGV8Zctqs1hCx233n6iL%2Fj426tbyd6clgypmnAx6vMAFoLBbj89OBE39NNLdMWwt%2BSoANNkghOEgmz255bOSn2MmDPQ4e6%2BzCe13vhAyT%2F%2Bpb4Fu1IAGwuVR25oJT3Hac3Jl91eiHMb31lqVcIzzy3F0oIfv8O40mD%2BKozydZsgl6c8UM6YJLTYXbF6zXrVj7VSnwA%2FPKyUiIcKfXDKP1ZjpJsQ5v0yuQbCIik3KoNn%2BDE0oPaNY2lLN6atHHlgNEInPCgbEKM0cLv7uahyvlgpvhYsCAYf3L0hgrPsq1q0MqEPRI%2B5v8X0rVwTfps9dusYI2GJyjsxmJ4086Ur%2FtqiKhnqv6urodz1OwxxvBVKnrkwunLlfhb1%2Bw04d2DEvXnYagwhNvgogY6sgFdJfTfRy%2FwIG%2Fcy0PkLIUjFRv%2BqtQCnmJhOZpp%2FlS7oH%2FZWIe4RaC0gRJYaxKet4Dcv1OAdeiSLH45DbKOR3fgLF4yeVZkMOOEWPDmJ9OJwNRDTjtokt6RwPNDVBDDYihhRP6fe%2BI7lvoJS%2BqBtyyBPlqJoTjnnlbSkYzck4ubeYp1AyKHqnG0Vf9xvkCbaKSircu1qTRqrrVJQXZM0zBzzDFb67qexygLd3bl3Tkvm7wD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230507T233301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFO3BJPU74%2F20230507%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f8916cc4b9de2bbe2dda06c1734d49bca43d3564cb6542dd373cb14ab0a1961'
    },
    {
        id: 3,
        name: 'Beef Stir Fry',
        author: 'Bob Johnson',
        image: 'https://edamam-product-images.s3.amazonaws.com/web-img/e55/e558fb5cfd3a944883f276aaac119e6e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJGMEQCIBZHX1Anu%2BtSl9ZOt9ImTDCw5UEn8OVEfsmgi0%2B%2BAhd6AiAE7vSOJTSs4xLvbes%2BLs6rl2eQil3WG8Rpw4G%2BhDfUICq5BQhQEAAaDDE4NzAxNzE1MDk4NiIMc4Fj%2Flw5qTPQ5gDQKpYFqQ4s94%2Fi5LKDEMcqVOaMfKAdkaKW5Y6TNS%2FibONVqCpttXdyeuQfcaO1rD8qYGg8c%2Bo8VzHNQVgOO8O2mn%2B4gzhGxgptLVzksAmTDdbuHRjXav3B57Dlj6EXYBcAVvQT8vJRDRnyNQ1s1C7o%2Bw3sXkYD4WYwfl1Ds6ZN8i1inUj9jI7tAMr%2B63Ou41OLYYeuHUlN2T%2FfpzskOEHcf7QeKczO2jjXZfy%2BteC2dYXnNY32aMDu0s7qp0m%2BbXsgcS5IdUxKd82AR%2F%2FaDXkVkohsSFZ8d9bgmwUdpjSKNj0hjoSnwvZYVKmHTpci9Z5ivu8DQKdcLpztQS7kbUine9u4wA837JKlEsrJvRkAxzDhEt84CuHGcn9Orwvj3f3jb1VwQj8kDfkLiDjqiNNMvMhD4gx53eWi94BgB%2F2VxGk2FlMCTbK6K4shOFwfO%2BdPvgaDx2fiMCK9c6DsAsg0xu%2F7glRlx1byUnWpV%2F%2BXDREfxQ0ztkAGV8Zctqs1hCx233n6iL%2Fj426tbyd6clgypmnAx6vMAFoLBbj89OBE39NNLdMWwt%2BSoANNkghOEgmz255bOSn2MmDPQ4e6%2BzCe13vhAyT%2F%2Bpb4Fu1IAGwuVR25oJT3Hac3Jl91eiHMb31lqVcIzzy3F0oIfv8O40mD%2BKozydZsgl6c8UM6YJLTYXbF6zXrVj7VSnwA%2FPKyUiIcKfXDKP1ZjpJsQ5v0yuQbCIik3KoNn%2BDE0oPaNY2lLN6atHHlgNEInPCgbEKM0cLv7uahyvlgpvhYsCAYf3L0hgrPsq1q0MqEPRI%2B5v8X0rVwTfps9dusYI2GJyjsxmJ4086Ur%2FtqiKhnqv6urodz1OwxxvBVKnrkwunLlfhb1%2Bw04d2DEvXnYagwhNvgogY6sgFdJfTfRy%2FwIG%2Fcy0PkLIUjFRv%2BqtQCnmJhOZpp%2FlS7oH%2FZWIe4RaC0gRJYaxKet4Dcv1OAdeiSLH45DbKOR3fgLF4yeVZkMOOEWPDmJ9OJwNRDTjtokt6RwPNDVBDDYihhRP6fe%2BI7lvoJS%2BqBtyyBPlqJoTjnnlbSkYzck4ubeYp1AyKHqnG0Vf9xvkCbaKSircu1qTRqrrVJQXZM0zBzzDFb67qexygLd3bl3Tkvm7wD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230507T233342Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFO3BJPU74%2F20230507%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5d9c4a641f3247e30f199b94a2b212b7b3d16598c4d8bf6242ec6e409b6c206a'
    }, {
        id: 4,
        name: 'Grilled Chicken Shawarma',
        author: 'Theodore Bagwell',
        image: 'https://edamam-product-images.s3.amazonaws.com/web-img/06d/06d35eb7b00387b77d2a474dfa5c99cc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJGMEQCIBZHX1Anu%2BtSl9ZOt9ImTDCw5UEn8OVEfsmgi0%2B%2BAhd6AiAE7vSOJTSs4xLvbes%2BLs6rl2eQil3WG8Rpw4G%2BhDfUICq5BQhQEAAaDDE4NzAxNzE1MDk4NiIMc4Fj%2Flw5qTPQ5gDQKpYFqQ4s94%2Fi5LKDEMcqVOaMfKAdkaKW5Y6TNS%2FibONVqCpttXdyeuQfcaO1rD8qYGg8c%2Bo8VzHNQVgOO8O2mn%2B4gzhGxgptLVzksAmTDdbuHRjXav3B57Dlj6EXYBcAVvQT8vJRDRnyNQ1s1C7o%2Bw3sXkYD4WYwfl1Ds6ZN8i1inUj9jI7tAMr%2B63Ou41OLYYeuHUlN2T%2FfpzskOEHcf7QeKczO2jjXZfy%2BteC2dYXnNY32aMDu0s7qp0m%2BbXsgcS5IdUxKd82AR%2F%2FaDXkVkohsSFZ8d9bgmwUdpjSKNj0hjoSnwvZYVKmHTpci9Z5ivu8DQKdcLpztQS7kbUine9u4wA837JKlEsrJvRkAxzDhEt84CuHGcn9Orwvj3f3jb1VwQj8kDfkLiDjqiNNMvMhD4gx53eWi94BgB%2F2VxGk2FlMCTbK6K4shOFwfO%2BdPvgaDx2fiMCK9c6DsAsg0xu%2F7glRlx1byUnWpV%2F%2BXDREfxQ0ztkAGV8Zctqs1hCx233n6iL%2Fj426tbyd6clgypmnAx6vMAFoLBbj89OBE39NNLdMWwt%2BSoANNkghOEgmz255bOSn2MmDPQ4e6%2BzCe13vhAyT%2F%2Bpb4Fu1IAGwuVR25oJT3Hac3Jl91eiHMb31lqVcIzzy3F0oIfv8O40mD%2BKozydZsgl6c8UM6YJLTYXbF6zXrVj7VSnwA%2FPKyUiIcKfXDKP1ZjpJsQ5v0yuQbCIik3KoNn%2BDE0oPaNY2lLN6atHHlgNEInPCgbEKM0cLv7uahyvlgpvhYsCAYf3L0hgrPsq1q0MqEPRI%2B5v8X0rVwTfps9dusYI2GJyjsxmJ4086Ur%2FtqiKhnqv6urodz1OwxxvBVKnrkwunLlfhb1%2Bw04d2DEvXnYagwhNvgogY6sgFdJfTfRy%2FwIG%2Fcy0PkLIUjFRv%2BqtQCnmJhOZpp%2FlS7oH%2FZWIe4RaC0gRJYaxKet4Dcv1OAdeiSLH45DbKOR3fgLF4yeVZkMOOEWPDmJ9OJwNRDTjtokt6RwPNDVBDDYihhRP6fe%2BI7lvoJS%2BqBtyyBPlqJoTjnnlbSkYzck4ubeYp1AyKHqnG0Vf9xvkCbaKSircu1qTRqrrVJQXZM0zBzzDFb67qexygLd3bl3Tkvm7wD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230507T233533Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFO3BJPU74%2F20230507%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b006cf27e86f97cc79f1a7a71ef8f535719ea096956991d90421d9a20cb005c5'
    }
]
</script>