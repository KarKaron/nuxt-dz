<template lang="pug">
  .post__card
    .post__card-header
      icon.icon( name="icons:purple" )
      .color-dark {{ post.iconName }}
      .color-grey {{ post.createDate }}
    .post__card-content
      .post__card-content-title {{ post.title }}
      .post__card-content-text {{ post.text }}
    .post__card-footer
      .post__card-footer-likes
        .cursor-pointer
          .color-dark {{ post.likes }}
          icon.icon( name="icons:like" )
        .cursor-pointer
          .color-dark {{ post.disLikes }}
          icon.icon( name="icons:dis-like" )
      .post__card-footer-edit
        icon.icon.cursor-pointer( name="icons:arhive" )
        .cursor-pointer
          icon.icon( name="icons:pencil" )
          .color-dark Изменить
</template>

<script setup lang="ts">
  import type { IPost } from '~/common.types';

  const { post } = defineProps<{
    post: IPost
  }>()
</script>

<style scoped>
.post__card {
  width: 692px;
  margin: 38px 0;
  padding: 0 174px 36px 0;
  border-bottom: 1px solid var(--color-grey-light);
  color: var(--color-black);
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;

  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .icon {
      margin-right: 8px;
    }

    .color-dark {
      margin-right: 17px;
    }
  }

  &-content {
    margin-bottom: 9px;

    &-title {
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 8px;
    }

    &-text {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 8px;
      color: var(--color-black-hover);
    }
  }

  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-likes {
      display: flex;
      align-items: center;
      gap: 12px;

      .cursor-pointer {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .icon {
        width: 18px;
        height: 18px;
      }
    }

    &-edit {
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
}
</style>
