<script lang="ts" setup>
defineProps<{ jawir: string }>()
</script>
<template>
  <div>
    <img :src="jawir" class="rounded-2xl fixed top-80 size-64 lg:size-80" />
  </div>
</template>

<style scoped>
img {
  animation: slide 2s ease-in-out forwards;
}

@keyframes slide {
  0% {
    margin-left: 100vw;
  }
  100% {
    margin-left: -75vw;
  }
}

@media screen and (min-width: 1024px) {
  @keyframes slide {
    0% {
      margin-left: 100vw;
    }
    100% {
      margin-left: -30vw;
    }
  }
}
</style>
