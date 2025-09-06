<template lang="pug">
  div
    h1 Add Post
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth"
});
</script>
