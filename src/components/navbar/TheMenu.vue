<template>
  <section class="menu" @click="$emit('toggleMenu')">
      <i class="fas fa-bars menu"></i>
  </section>
</template>

<style scoped>
section {
  font-size: 6rem;
  color: aliceblue;
  display: inline-block;
}

.menu {
  cursor:pointer;
}
</style>
