<template>
    <div class="h-full flex justify-center flex-col items-center w-full">
        <navbar></navbar>
        <div class="flex flex-col items-center h-screen justify-center">
            <heroTexte></heroTexte>
        </div>
        <div class="flex flex-col justify-center  items-center w-5/6">
            <bentoTop class=""></bentoTop>  
            <div class="flex w-5/6 items-center justify-center">
                <bentoLeft class="w-2/6"></bentoLeft>
                <bentoRight class="w-4/6"></bentoRight>
                </div>
        </div>
    </div>
</template>

<script lang="ts"></script>

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
