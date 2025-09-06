<template lang="pug">
  nuxt-link( :to="`/post/${post.id}`" )
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
              :class="{ 'icon-dislike cursor-default': store.checkActive(post.id, ELike.dislike) }"
              @click.stop.prevent="!store.checkActive(post.id, ELike.dislike) && store.addToLiked(post.id, ELike.dislike)"
            )
        .post__card-footer-edit
          icon.icon.cursor-pointer( name="icons:arhive" )
          nuxt-link( :to="`/post/edit/${post.id}`" )
            icon.icon( name="icons:pencil" )
            .color-dark Изменить
</template>

<script setup lang="ts">
import { ELike } from "~/common.enum";
import type { IPost } from "~/common.types";

const store = useLikedStore();

const post = defineProps<IPost>();
</script>

<style scoped>
@import url("../assets/styles/card.css");

a {
  text-decoration: none;
}

.post__card {
  border-bottom: 1px solid var(--color-grey-light);

  &-footer-edit {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;

      .icon {
        width: 11px;
        height: 14px;
      }
    }

    .icon {
      width: 17px;
      height: 17px;
    }
  }
}
</style>
