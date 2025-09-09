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
          icon.icon(
            :name="store.checkActive(post.id, ELike.like) ? 'icons:like-filled' : 'icons:like'"
            :class="{ 'cursor-default': store.checkActive(post.id, ELike.like) }"
            @click.stop.prevent="!store.checkActive(post.id, ELike.like) && store.addToLiked(post.id, ELike.like)"
          )
        .cursor-pointer
          .color-dark {{ post.dislikes }}
          icon.icon(
            :name="store.checkActive(post.id, ELike.dislike) ? 'icons:like-filled' : 'icons:dislike'"
            :class="{ 'icon-dislike': store.checkActive(post.id, ELike.dislike) }"
            @click.stop.prevent="!store.checkActive(post.id, ELike.dislike) && store.addToLiked(post.id, ELike.dislike)"
          )
</template>

<script setup lang="ts">
import { ELike } from "~/common.enum";
import type { IGetPostByIdResponse } from "~/common.types";

const router = useRoute();
const API_URL = useAPI();
const store = useLikedStore();

const { data: post } = await useFetch<IGetPostByIdResponse['post']>(
  `${API_URL.GET_POSTS}/${router.params.id}`
);

useSeoMeta({
  title: post.value?.title,
  description: post.value?.content.slice(0, 255),
})
</script>

<style scoped>
@import url("../../assets/styles/card.css");
</style>
