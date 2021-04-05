<template>
  <dialog @click="showMenu = false" :open="showMenu">
    <div class="menu-header">
      <div class="menu-items">
        <div class="logo">PC STORE</div>
        <BaseButton @click="home" className="flat inactive" class="menu-item">Home</BaseButton>
        <BaseButton className="flat inactive" class="menu-item">Search</BaseButton>
        <BaseButton className="flat inactive" class="menu-item">Products</BaseButton>
        <BaseButton className="flat inactive" class="menu-item">Contact Us</BaseButton>
        <BaseButton className="flat inactive" class="menu-item">Job Offers</BaseButton>
        <BaseButton className="flat inactive" class="menu-item">Support</BaseButton>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  props: ['toggle'],
  data() {
    return {
      showMenu: this.toggle,
    };
  },
  watch: {
    toggle() {
      this.showMenu = this.toggle;
    },
  },
  methods: {
    home() {
      this.showMenu= false;
      this.$router.push('/');
    },
    outOfFocus() {
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
dialog {
  width: 100vw;
  background-color: transparent;
  z-index: 2;
  height: 100vh;
  outline: none;
  border: none;
  top: 8.2rem;
  left: 0;
  transition: opacity 1s;
  opacity: 0;
}

.menu-items {
  text-align: center;
}

dialog[open] {
  animation: fade-in .3s linear forwards;
}

.close {
  animation: fade-out .3s linear forwards;
}

.menu-header {
  width: 20rem;
  transition: all .4s linear;
  position: relative;
  z-index: 3;
}

.menu-item {
  display: block;
  width: 100%;
  margin-left: 10%;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 13%;
  background-color: midnightblue;
  color: aliceblue;
  writing-mode: tb-rl;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1rem;
  text-shadow: .4rem .3rem 1rem rgba(64, 64, 64, 0.5);
}

@keyframes fade-in {
  from {
    opacity: .3;
    left: -20rem;
  }
  50% {
    opacity: .6;
    left: -10rem;
  }
  to {
    opacity: 1;
    left: 0;
  }
}

</style>
