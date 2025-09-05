<template lang="pug">
  .paginator
    .page(
      v-for="item in pages"
      :key="item"
      :class="{ 'page--is-active': page === item }"
      @click="emit('change-page', item)"
    ) {{ item }}
</template>

<script setup lang="ts">
const { page, pages } = defineProps<{
  page: number;
  pages: number;
}>();

const emit = defineEmits<(e: "change-page", value: number) => void>();
</script>

<style scoped>
.paginator {
  width: 692px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-grey-alpha);

  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 22px;
    width: 40px;
    border-right: 1px solid var(--color-grey-light);

    &:last-of-type {
      border-right: none;
    }

    &--is-active {
      color: var(--color-black);
    }
  }
}
</style>
