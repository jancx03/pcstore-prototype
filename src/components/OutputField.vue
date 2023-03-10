<template>
  <div :style="style" :class="className" class="parent">
    <p class="title">{{title.toUpperCase()}}</p>
    <p class="value">{{value}}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'value', 'style', 'className'],
};
</script>

<style scoped>
.parent {
  /* none */
}

.title {
  display: inline-block;
  background-color: rgb(245, 245, 245);
  padding: 1rem;
  font-size: 2rem;
  font-weight: 600;
  max-width: 50%;
  width: 50%;
}

.value {
  display: inline-block;
  padding: 1rem;
  font-size: 1.5rem;
}

</style>
