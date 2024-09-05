<template>
  <div id="back">
    <div
      id="cart"
      class="h-52 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100 flex justify-center items-center"
    >
    <img
    src="https://picsum.photos/300/150" class="rounded-md">
</div>
  </div>
</template>

<script lang="ts"></script>
<style lang="css" scoped>
#back {
  perspective: 1000px;
  transform-style: preserve-3d;
  position: absolute;
}

#cart {
  transform: rotateX(-30deg) rotateY(330deg) rotateZ(10deg);
  transform-style: preserve-3d;
}
</style>
;
