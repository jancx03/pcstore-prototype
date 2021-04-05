<template>
  <div ref="parent">
    <div id="menu-placeholder"></div>
    <TheNavbar/>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from 'components/TheNavbar.vue';
import items from '#/items.js';

export default {
  components: {TheNavbar},
  provide: [items],
};
</script>


<style>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 65%;
}

body {
  box-sizing: border-box;
  background-color: rgb(226, 222, 222);
  height: 100%;
}


</style>
