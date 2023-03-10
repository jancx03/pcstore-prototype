<template>
  <div ref="parent">
    <div id="menu-placeholder"></div>
    <TheNavbar/>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from 'components/TheNavbar.vue';
import Db from '#/db.js';
Db.populate();

export default {
  components: {TheNavbar},
  provide() {
    return {
      items: Db.getItems(),
    };
  },
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
