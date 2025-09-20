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
      @click="updatePost"
    ) Сохранить изменения
</template>

<script setup lang="ts">
import type { IPost, IGetPostByIdResponse } from '~/common.types';

definePageMeta({
  middleware: "auth",
  layout: "form"
});

const API_URL_POSTS = useAPI().GET_POSTS + "/" + useRoute().params.id

const title = ref<IPost["title"]>("");
const content = ref<IPost["content"]>("");

try {
  const { data: post } = await useFetch<IGetPostByIdResponse["post"]>(API_URL_POSTS);

  title.value = post.value!.title
  content.value = post.value!.content

  useSeoMeta({
    title: `${title.value} | Редактировать пост`,
    description: content.value
  });
} catch (error) {
  console.log(error);
}

async function updatePost() {
  try {
    await $fetch(API_URL_POSTS, {
      method: "PUT",
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
@import url("../../../assets/styles/form.css");
</style>
