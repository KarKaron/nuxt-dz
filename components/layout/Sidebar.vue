<template lang="pug">
  aside.sidebar
    nuxt-link( to="/" )
      icon.icon( name="icons:home" )
    .cursor-pointer
      icon.icon(
        name="icons:exit"
        @click="useAuthStore().clearToken"
      )
</template>

<style scoped>
.sidebar {
  width: 80px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #e6e6e6;
  padding: 45px 0;
}
</style>
