<template lang="pug">
  .sort-wrapper
    .sorting(
      v-for="item in SORT_DATA"
      :key="item.id"
      :class="{ 'sorting--is-active':  sort === item.id }"
      @click="emit('change-sort', item.id)"
    ) {{ item.name }}
</template>

<script setup lang="ts">
import { ESort } from "~/common.enum";

const SORT_DATA = [
  {
    id: ESort.date,
    name: "По дате"
  },
  {
    id: ESort.rating,
    name: "По рейтингу"
  }
];

const { sort } = defineProps<{
  sort: ESort;
}>();

const emit = defineEmits<(e: "change-sort", value: ESort) => void>();
</script>

<style scoped>
.sort-wrapper {
  width: 692px;
  display: flex;
  align-items: center;
  gap: 42px;
  border-bottom: 1px solid var(--color-grey-light);
  padding-bottom: 17px;
  cursor: pointer;

  .sorting {
    font-size: 16px;
    font-weight: 300;
    color: var(--color-black);

    &--is-active,
    &:hover {
      color: var(--color-grey);
    }
  }
}
</style>
