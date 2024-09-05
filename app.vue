<template> 
  <div>
      <NuxtLayout>
          <NuxtPage class="bg-slate-950" />
      </NuxtLayout>
      <UNotifications />

  </div>
</template>

<script setup>

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
}
</style>