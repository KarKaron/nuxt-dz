<template lang="pug">
  .post__card
    .post__card-header
      icon.icon( name="icons:purple" )
      .color-dark PostUser
      .color-grey {{ post.published_at }}
    .post__card-content
      .post__card-content-title {{ post.title }}
      .post__card-content-text {{ post.content }}
    .post__card-footer
      .post__card-footer-likes
        .cursor-pointer
          .color-dark {{ post.likes }}
          icon.icon( name="icons:like" )
        .cursor-pointer
          .color-dark {{ post.dislikes }}
          icon.icon( name="icons:dis-like" )
</template>

<script setup lang="ts">
import type { IGetPostByIdResponse } from "~/common.types";

const { data: post } = await useFetch<IGetPostByIdResponse>(
  useRuntimeConfig().public.apiUrl + `/posts/${useRoute().params.id}`
);
</script>

<style scoped>
@import url('../../assets/styles/card.css');
</style>
