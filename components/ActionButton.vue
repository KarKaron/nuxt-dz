<template lang="pug">
  button.button(
    :class="color"
    :disabled="isDisabled"
  )
    slot
</template>

<script setup lang="ts">
const { color = "primary", isDisabled = false } = defineProps<{
  color?: "primary" | "secondary";
  isDisabled: boolean;
}>();
</script>

<style scoped>
.button {
  border-radius: 20px;
  border: 1px solid var(--color-black);
  cursor: pointer;
  padding: 12px;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 500;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}

.primary {
  background: var(--color-black);
  color: var(--color-white);

  &:hover {
    background: var(--color-black-hover);
    color: var(--color-white);
  }
}

.secondary {
  background: var(--color-white);
  color: var(--color-black);
}
</style>
