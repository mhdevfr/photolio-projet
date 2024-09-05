<template>

    <div class="h-screen w-full flex justify-center items-center flex-col">
        <navbar/>
        <loginForm/>
        <elementCard class="absolute drop-shadow-2xl	 left-24 z-[-1]" v-motion-slide-top />
        <secondElementCard class="absolute drop-shadow-2xl	 right-24 bottom-24 z-[-1]" v-motion-slide-right/>
        <thirdElementCard class="absolute drop-shadow-2xl	 right-52 top-24 z-[-1]" v-motion-slide-bottom />
        <fourthElementCard class="absolute drop-shadow-2xl	 left-48 bottom-10 z-[-1]" v-motion-slide-left/>
    </div>

</template>

<script setup lang="ts">




</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap'); 
    .brico-800{
      font-family: "Bricolage Grotesque", sans-serif;
      font-optical-sizing: auto;
      font-weight: 800;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }
    .brico-200{
        font-family: "Bricolage Grotesque", sans-serif;
      font-optical-sizing: auto;
      font-weight: 200;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }

    *{
        padding: 0;
        margin: 0;
    }
</style>
