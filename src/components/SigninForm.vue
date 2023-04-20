<template>
    <form @submit.prevent="handleSubmit" class="divide-y divide-gray-200 max-h-[90%]">
        <div class="pb-8 sm:pt-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative mt-3">
              <input 
                autocomplete="off" 
                name="email" 
                type="email"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" 
                placeholder="E-mail Address"
                v-model.trim="formData.email.value"
                @blur="() => {formData.email.touched = true; formData.email.error = !validators.email(formData.email.value) ? true : false; }"
                :class="{'border-green-500 text-green-900 text-sm focus:ring-green-500 focus:border-green-500 block dark:bg-green-100 dark:border-green-400': !formData.email.error, 'border-red-500 text-sm focus:ring-red-500 focus:border-red-500 block dark:bg-red-100 dark:border-red-400': formData.email.error && formData.email.touched }"
              />
              <label 
                for="email" 
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                :class="{ 'text-red-700': formData.email.error && formData.email.touched }"
              >
                E-mail Address
              </label>
              <div class="text-red-600 my-1 text-sm" v-if="formData.email.touched && !validators.email(formData.email.value)">
                Please enter a valid email.
              </div>
            </div>

            <div class="relative mt-3">
              <input 
                autocomplete="off" 
                name="password" 
                type="password"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                placeholder="Password"
                v-model.trim="formData.password.value"
                @blur="() => {formData.password.touched = true; formData.password.error = !validators.password(formData.password.value) ? true : false; }"
                :class="{'border-green-500 text-green-900 text-sm focus:ring-green-500 focus:border-green-500 block dark:bg-green-100 dark:border-green-400': !formData.password.error, 'border-red-500 text-sm focus:ring-red-500 focus:border-red-500 block dark:bg-red-100 dark:border-red-400': formData.password.error && formData.password.touched }"
              />
              <label 
                for="password" 
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                :class="{ 'text-red-700': formData.password.error && formData.password.touched }"
              >
                Password
              </label>
              <div class="text-red-600 my-1 text-sm" v-if="formData.password.touched && !validators.password(formData.password.value)">
                Password must have at least 8 characters and 1 number.
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
import { validators } from '../misc';

let formData = ref({
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
});


const handleSubmit = (ev: Event) => {
    console.log(Object.values(formData.value).every(s => !s.error));
    if (Object.values(formData.value).every(s => s.error)) {
        console.log("ha!");
        //proceed with submission
    } else {
        //throw hands !!
    }
    console.log(formData.value);
}

</script>