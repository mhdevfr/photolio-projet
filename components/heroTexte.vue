<template>
  <div v-motion-pop-visible-once class="flex flex-col items-center">
    <h1
      class="text-slate-900 w-3/5 dark:text-gray-100 font-raleway text-center lg:text-7xl text-4xl font-bold mt-11 mb-6 brico-800"
    >
      Design Your Portfolio at Lightning
      <typewriter class="text-yellow-300"/>

    </h1>
    <p
      class="text-slate-900 dark:text-gray-100 opacity-60 text-center font-raleway lg:text-2xl text-xl font-normal w-4/6 brico-200"
    >
      Showcase your creativity with a stunning portfolio thats ready in no time,
      without compromising on quality or style.
    </p>
    <heroButton/>
    <Transition name="bounce">

    <Icon name="iconamoon:mouse-fill"  size="48" class="mt-16 animate-bounce" />

    </Transition>
  </div>
</template>
<script setup lang="ts">
</script>

