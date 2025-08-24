<template lang="pug">
  post-card( :post="post" )
</template>

<script setup lang="ts">
  const post = {
    icon: 'purple',
    iconName: 'PurpleSchool',
    createDate: '4 дня назад',
    title: 'Добавить функцию голосования',
    text: 'Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется...',
    likes: 10,
    disLikes: 1,
  }
</script>
