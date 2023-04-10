<template>
  <nav>
    <!-- <router-link :to="append($route.path, 'child1')">child1</router-link>
    <router-link :to="append($route.path, 'child2')">child2</router-link> -->
    <router-link to="child1">child1</router-link>
    <router-link to="child2">child2</router-link>
  </nav>

  <h2>Remote 2 webpack home view</h2>
  <router-view />
</template>

<script setup lang="ts">
const append = (path: any = '', pathToAppend = '') => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend;
};
</script>
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
