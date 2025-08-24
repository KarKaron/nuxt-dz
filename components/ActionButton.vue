<template lang="pug">
  button.button( :class="color" )
    slot
</template>

<script setup lang="ts">
const { color = "primary" } = defineProps<{
  color?: "primary" | "secondary";
}>();
</script>

<style scoped>
.button {
  border-radius: 4px;
  border: 1px solid var(--color-black);
  cursor: pointer;
  padding: 16px;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
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
