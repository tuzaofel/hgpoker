<script setup>
import { RouterView } from 'vue-router'
import SidebarMenu from './components/sidebar/SidebarMenu.vue';

</script>

<template>
  <div id="root">
    <SidebarMenu class="sidebar" />
    <RouterView />
  </div>
</template>

<style scoped>
#root {
  display: grid;
  grid-template-areas: 'sidebar router-view';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}

.sidebar {
  grid-area: 'sidebar';
}


</style>