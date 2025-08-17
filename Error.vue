<template lang="pug">
  .error__wrapper
    h1 {{ error.statusCode }} ошибка
    .error__message {{ errorMessageText[error.statusCode] }}
    action-button.secondary( @click="navigateTo('/')") На главную
</template>

<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

const { error } = defineProps<{
  error: NuxtError;
}>();

const errorMessageText = {
  404: "Страница не найдена, попробуйте перейти на главную страницу"
};
</script>

<style scoped>
.error__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.error__message {
  color: var(--color-dark-grey);
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 40px;
}
</style>
