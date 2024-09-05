<template>
    <div>
        <div class="flex justify-center items-center pb-1">
            <div class=" w-full bg-  h-1/2 flex justify-center items-center rounded-2xl">
                <form class="w-96 h-96 text-center     flex flex-col text-gray-100 items-center rounded-md">
                    <h1 class="text-4xl brico-800 text-center mt-4">👋 Welcome 
                    <span class="">Back</span>
                    </h1>
                    <button class="px-16 py-2 mt-6 mb-12 rounded-md items-center justify-between bg-slate-800 flex">
                        <Icon name="flat-color-icons:google" size="26" />
                        <h1 class="text-gray-100 text-sm">Google OAuth</h1>
                    </button>
                    <input type="email"  class="brico-200 h-12 w-3/4 mb-8 rounded-md text-start outline-none" placeholder="david.joe@gmail.com">
                    <input type="password"  class="brico-200 h-12 w-3/4 mb-8 rounded-md text-start outline-none" placeholder="yourpassword">
                    <nuxt-link to="/" class="underline-offset-2 ">Don't have account yet ?</nuxt-link>
                    <input type="submit" value="Log in" class="bg-green-400 flex items-center justify-center m-10 px-16 py-2 rounded-md">
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts"></script>
