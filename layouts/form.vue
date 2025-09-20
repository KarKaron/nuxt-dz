<template lang="pug">
  layout-sidebar
  main.main
    .main-sidebar
      icon.icon( name="icons:add" )
    slot
</template>

<style scoped>
.main {
  margin-left: 216px;
  display: flex;

  &-sidebar {
    position: relative;
    height: calc(100vh - 38px);
    margin-right: 34px;
    border-right: 1px solid #e6e6e6;

    .icon {
      position: absolute;
      left: -17px;
      width: 34px;
      height: 34px;
    }
  }
}
</style>
