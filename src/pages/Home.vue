<template>
    <main class="max-h-screen h-screen bg-center bg-no-repeat bg-cover relative bg-[url('/src/assets/bg-sm-02.jpg')] lg:bg-[url('/src/assets/bg-lg-02.jpg')]">
        <div class="absolute top-3/4 text-center text-white/95 lg:text-right lg:float-right lg:relative lg:top-[78%] mr-2.5 space-y-3 lg:space-y-2 w-full">
            <h3 class="mr-2 lg:text-yellow-600 font-poppins text-2xl md:text-3xl lg:text-4xl font-bold lg:font-black">
                Cooking Experience Like A Chef
            </h3>
            <h6 class="text-slate-300 lg:text-gray-600 font-semibold text-xs -mt-3">
                Let's make a delicious dish with the best recipe for the family.
            </h6>

            <div class="flex justify-center">
                <router-link to="/get-started" class="absolute bg-yellow-600 rounded-xl p-3 text-white/95 lg:right-0.5 hover:text-yellow-600 hover:text-base hover:bg-transparent hover:font-medium hover:outline hover:outline-1">
                    Get Started
                </router-link>
            </div>
        </div>
    </main>
</template>
