<template lang="pug">
  .input__wrapper
    icon.icon.input__icon( v-if="iconName" :name="iconName" )
    input.input(
      v-model="input"
      :placeholder="placeholder"
    )
</template>

<script setup lang="ts">
const { iconName } = defineProps<{
  iconName?: string;
  placeholder: string;
}>();
const input = defineModel<string>();
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px 14px 8px 48px;
  background: none;
  border: 1px solid rgba(230, 230, 230, 0.8);
  border-radius: 20px;
  outline: none;
  color: var(--color-black);

  &::placeholder {
    color: rgba(0, 0, 0, 0.8);
  }

  &__wrapper {
    position: relative;
  }

  &__icon {
    position: absolute;
    top: 4px;
    left: 16px;
  }
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
