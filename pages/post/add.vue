<template lang="pug">
  .form
    div
      input-field(
        v-model="title"
        placeholder="Тема"
      )
      textarea-field(
        v-model="content"
        placeholder="Текст..."
      )
    action-button(
      :is-disabled="!title || !content"
      @click="createPost"
    ) Добавить
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "form"
});

useSeoMeta({
  title: "Добавить пост",
  description: "Добавить пост"
});

const title = ref("");
const content = ref("");

async function createPost() {
  try {
    await $fetch(`${useAPI().GET_POSTS}/create`, {
      method: "POST",
      headers: { Authorization: `Bearer ${useAuthStore().token}` },
      body: {
        title: title.value,
        content: content.value
      }
    });
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
@import url("../../assets/styles/form.css");
</style>
