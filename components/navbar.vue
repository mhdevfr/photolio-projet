<template>
  <div class="absolute top-0 w-full h-20 flex items-center justify-center">
    <div class="w-1/6 m-8 brico-800">
      <nuxt-link to="/">
        <h1 class="text-3xl flex items-center">
          Photofoli
          <Icon
            name="material-symbols:camera"
            class="animate-spin-slow"
            size="24"
            color="yellow"
          />
        </h1>
      </nuxt-link>
    </div>
    <div class="w-5/6 justify-center items-center m-8 brico-200">
      <ul class="flex justify-end">
        <li>
          <nuxt-link
            to="/contact"
            class="px-10 py-2 underline-offset-4 underline decoration-sky-500"
            >Home</nuxt-link
          >
          <nuxt-link to="/contact" class="px-10 py-2">Plans</nuxt-link>
          <nuxt-link to="/contact" class="px-10 py-2">Contact</nuxt-link>
          <nuxt-link
            to="/login"
            class="px-4 mx-4 py-2 bg-gray-100 text-black rounded-md"
            >Login</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="css">


</style>
