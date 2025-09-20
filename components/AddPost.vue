<template lang="pug">
  nuxt-link.create-post-link( to="/post/add" )
    icon.icon( name="icons:add" )
    | Добавить новое обновление для голосования
</template>

<style scoped>
.create-post-link {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
  font-size: 16px;
  font-weight: 300;
  color: var(--color-black-light);
  text-decoration: none;
}
</style>
