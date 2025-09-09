<template lang="pug">
  div
    h1 Добавить пост
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth"
});

useSeoMeta({
  title: "Добавить пост",
  description: "Добавить пост",
})
</script>
