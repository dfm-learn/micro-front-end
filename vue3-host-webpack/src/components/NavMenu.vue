<template>
  <div>
    <ul class="nav">
      <li class="nav-link" v-for="(item, index) in routes" :key="index">
        <RouterLink :to="item.path">{{ item.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
const routes = [
  {
    title: 'home',
    path: '/',
  },
  {
    title: 'remote 1',
    path: '/remote1/',
  },
  {
    title: 'remote 2',
    path: '/remote2/',
  },
];
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  background-color: aquamarine;
  & .nav-link {
    margin: 20px;
  }
}
</style>
