<template lang="pug">
  div
    post-card(
      v-for="post in posts.posts"
      :key="post.id"
      v-bind="post"
    )
</template>

<script setup lang="ts">
import type { IGetPostsResponse } from "~/common.types";

const { data: posts } = await useFetch<IGetPostsResponse>(
  useRuntimeConfig().public.apiUrl + "/posts",
  {
    query: {
      page: 1,
      page_size: 10,
      sort: "date"
    }
  }
);
</script>
