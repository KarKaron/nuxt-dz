<template lang="pug">
  aside.sidebar
    nuxt-link( to="/" )
      icon.icon( name="icons:home" )
    nuxt-link( to="#" )
      icon.icon( name="icons:exit" )
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
    border-right: 1px solid #E6E6E6;
    padding: 45px 0;
  }
</style>
