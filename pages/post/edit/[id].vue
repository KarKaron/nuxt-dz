<template lang="pug">
  div
    h1 Редактировать пост
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth"
});

useSeoMeta({
  title: "Редактировать пост",
  description: "Редактировать пост",
})
</script>
