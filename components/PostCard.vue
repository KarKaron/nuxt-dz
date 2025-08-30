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
            icon.icon( name="icons:like" )
          .cursor-pointer
            .color-dark {{ post.dislikes }}
            icon.icon( name="icons:dis-like" )
        .post__card-footer-edit
          icon.icon.cursor-pointer( name="icons:arhive" )
          .cursor-pointer
            icon.icon( name="icons:pencil" )
            .color-dark Изменить
</template>

<script setup lang="ts">
  import type { IPost } from '~/common.types';

  const post = defineProps<IPost>()
</script>

<style scoped>
@import url('../assets/styles/card.css');

a {
  text-decoration: none;
}

.post__card {
  border-bottom: 1px solid var(--color-grey-light);

  &-footer-edit {
    display: flex;
    align-items: center;
    gap: 20px;

    .cursor-pointer {
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
