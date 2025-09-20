<template lang="pug">
  .textarea
    textarea(
      v-model="textarea"
      :placeholder="placeholder"
    )
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string;
}>();

const textarea = defineModel<string>();
</script>

<style scoped>
.textarea textarea {
  width: 100%;
  height: 400px;
  outline: none;
  border: none;

  &::placeholder {
    color: var(--color-black-light);
    font-weight: 300;
  }
}
</style>
