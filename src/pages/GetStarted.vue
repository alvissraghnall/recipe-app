<template>
    <div class="pt-[-10%] h-screen max-h-screen bg-cover bg-[url('/src/assets/bg-sm.jpg')] md:bg-[url('/src/assets/get-started.jpg')] bg-no-repeat py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl mx-auto w-[70%] sm:w-[30rem]">
            <div class="absolute hidden -right-8 -top-8 z-10 w-32 h-32">
                <img src="../assets/top-right.png" alt="" class="" />
            </div>
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 -rotate-[5deg] sm:rounded-3xl rounded-2xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl rounded-xl sm:p-7">
                <div>
                    <Tabs
                        :items="items"
                        :active-item="activeItem"
                        @tabClick="(event) => handleTabChange(event)"
                    />
                </div>
                <div class="max-w-md mx-auto">
                    <div v-if="activeItem === items[0]">
                        <SignupForm />
                    </div>
                    <div v-else-if="activeItem === items[1]">
                        <SigninForm />
                    </div>
                </div>
            </div>
        </div>


            <!-- 
            <div class="sign-up-in">
                <Tabs
                    :items="this.items"
                    :activeItem="this.activeItem"
                    @tabClick="(event) => this.handleTab(event)"
                />
                <div v-if="this.activeItem === 'Sign Up'">
                    <SignUpForm />
                </div>
                <div v-else-if="this.activeItem === 'Sign In'">
                    <SignInForm />
                </div>
            </div>
       -->
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Tabs, SignupForm, SigninForm } from '../components';

const items: string[] = ["Sign Up", "Sign In"];
let activeItem: Ref<string> = ref(items[0]);

const handleTabChange = (id: number): void => {
    activeItem.value = items[id];
    // console.log(id, activeItem.value);
}
</script>