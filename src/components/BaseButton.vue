<template>
  <button :style="style" :class="className">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['className', 'style'],
};
</script>

<style scoped>

button {
  text-decoration: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  outline: none;
  border: .1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: .2rem .1rem .5rem rgba(0, 0, 0, 0.5);
  transition: all .2s ease-out;
}

button:active {
  box-shadow: .1rem 0 .1rem rgba(0, 0, 0, 0.3);
  transform: translateY(.2rem) translateX(.3rem);
}

.active {
  background-color: green;
}

.active:hover {
  background-color: rgb(48, 167, 48);
}

.inactive {
  background-color: rgb(245, 245, 245);
  background: linear-gradient(to right, teal 50%, rgb(245, 245, 245) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}

.inactive-white:hover,
.inactive:hover {
  background-position: left bottom;
}

.inactive-white {
  background-color: white;
  background: linear-gradient(to right, teal 50%, white 50%);
  background-size: 200% 100%;
  background-size: 200% 110%;
  background-position: right bottom;
}

.flat {
  box-shadow: none;
  border: none;
}

.flat:active {
  transform: none;
}
.left-rounded {
  border-radius: 3rem 0 0 3rem;
}

@keyframes hover-animation {
  0% {
    background-color: rgb(245, 245, 245);
  }

  25% {
    background-color: rgb(106, 226, 226);
  }

  50% {
    background-color: rgb(91, 202, 202);
  }

  75% {
    background-color: rgb(9, 179, 179);
  }

  100% {
    background-color: rgb(23, 155, 155);
  }
}

</style>
