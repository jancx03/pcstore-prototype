<template>
  <header class="header">
    <TheMenu @click="$emit('toggleMenu')" />
    <TheLogo class="logo"/>
  </header>
</template>

<script>
import TheMenu from 'components/navbar/TheMenu.vue';
import TheLogo from 'components/navbar/TheLogo.vue';

export default {
  components: {TheMenu, TheLogo},
  emits: ['toggleMenu'],
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.logo {
  margin-left: 1rem;
}
</style>
