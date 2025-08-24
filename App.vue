<template lang="pug">
  nuxt-layout
    nuxt-page
</template>

<script setup lang="ts">
import "~/assets/styles/index.css";
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
