<template>
    <form @submit.prevent="handleSubmit" class="divide-y divide-gray-200 max-h-[90%]">
        <div class="pb-8 sm:pt-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative mt-3">
              <input 
                autocomplete="off" 
                name="username" 
                type="text"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                placeholder="Full Name"
                v-model.trim="formData.username.value"
                @blur="() => formData.username.touched = true"
              />
              <label 
                for="username" 
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Full Name
              </label>
              <div class="text-red-600 my-1 text-sm" v-if="formData.username.touched && !validators.name(formData.username.value)">
                Name must have at least 5 characters.
              </div>
            </div>

            <div class="relative mt-3">
              <input 
                autocomplete="off" 
                name="email" 
                type="email"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                placeholder="E-mail Address"
                v-model.trim="formData.email.value"
                @blur="() => formData.email.touched = true"
              />
              <label 
                for="email" 
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                E-mail Address
              </label>
              <div class="text-red-600 my-1 text-sm" v-if="formData.email.touched && !validators.email(formData.email.value)">
                Please enter a valid email.
              </div>
            </div>

            <div class="relative mt-3">
                <select name="gender" id="gender" class="cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option selected disabled>Select a gender</option>
                    <option v-for="g in Object.keys(Gender)" :value="g" class="cursor-pointer">{{ g.split("_").join(" ").toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) }}</option>
                </select>
                <label for="gender" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm sr-only">
                    Gender
                </label>
            </div>

            <div class="relative mt-3">
              <input 
                autocomplete="off" 
                name="password" 
                type="password"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                placeholder="Password"
                v-model.trim="formData.password.value"
                @blur="() => formData.password.touched = true"
              />
              <label 
                for="password" 
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Password
              </label>
              <div class="text-red-600 my-1 text-sm" v-if="formData.password.touched && !validators.password(formData.password.value)">
                Password must consist of at least 1 number, and at least 8 characters.
              </div>
            </div>

            <div class="relative mt-3">
              <input 
                autocomplete="off" 
                name="confirmPassword" 
                type="password"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                placeholder="Confirm Password"
                v-model.trim="formData.confirmPassword.value"
                @blur="() => formData.confirmPassword.touched = true"
              />
              <label 
                for="confirmPassword" 
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Confirm Password
              </label>
              <div class="text-red-600 my-1 text-sm" v-if="formData.confirmPassword.touched && !validators.confirmPassword(formData.confirmPassword.value, formData.password.value)">
                Passwords must match!
              </div>
            </div>

            <div class="relative mt-5">
                <button type="submit" class="outline-none border-none bg-gradient-to-br to-blue-600 from-blue-300 text-white rounded-lg p-2">
                    Submit
                </button>
            </div>
        </div>
        
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Gender } from "../model";
import { validators } from '../misc';

let formData = ref({
    username: {
        touched: false,
        error: true,
        value: ''
    },
    email: {
        touched: false,
        error: true,
        value: ''
    },
    password: {
        touched: false,
        error: true,
        value: ''
    },
    confirmPassword: {
        touched: false,
        error: true,
        value: ''
    },
    gender: {
        touched: false,
        error: true,
        value: Gender.NON_BINARY
    },
});



const handleSubmit = (ev: Event) => {
    console.log(formData);
}

/**
 * full name
 * email
 *  password
 * confirm password
 * gender
 * 
 * loginForm.get('username')?.invalid && (loginForm.get('username')?.dirty)
 */
</script>