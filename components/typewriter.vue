<template>
    <VueWriter :array="message" :eraseSpeed="200" :typeSpeed="100" :delay="1000" />
</template>
  
  
<script setup lang="ts">
  let message = ['Speed']
</script>


<style>

.is-typed span.typed {
  color: yellow;  
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}
.is-typed span.cursor.typing {
  animation: none;
}
@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

</style>