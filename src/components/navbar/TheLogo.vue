<template>
  <div @click="home">
    <p :class="titleClass">PC STORE</p>
    <p :class="bannerClass">Premium Computers For Everyday Users.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 'lg',
    };
  },
  computed: {
    titleClass() {
      if (this.size == 'lg') {
        return ['title', 'title-lg'];
      } else {
        return ['title', 'title-sm'];
      }
    },
    bannerClass() {
      if (this.size == 'lg') {
        return ['banner', 'banner-lg'];
      } else {
        return ['banner', 'banner-sm'];
      }
    },
  },
  methods: {
    home() {
      this.$router.push('/');
    },
    onWindowResize() {
      if (window.innerWidth > 780) {
        this.size = 'lg';
      } else {
        this.size = 'sm';
      }
    },
  },
  mounted() {
    if (window.innerWidth > 780) {
      this.size = 'lg';
    } else {
      this.size = 'sm';
    }
    // watch resize for styling
    window.addEventListener('resize', this.onWindowResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onWindowResize);
  },
};
</script>

<style scoped>
.title {
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 1rem;
  text-shadow: .4rem .3rem 1rem rgba(64, 64, 64, 0.5);
  color: aliceblue;
  /* -webkit-text-stroke: .3rem rgba(0, 0, 0, 0.3); */
}

.title-lg {
  font-size: 5rem;
}

.title-sm {
  font-size: 3rem;
}

.banner {
  font-weight: 300;
  color: aliceblue;
}

.banner-lg {
  font-size: 2rem;
}

.banner-sm {
  font-size: 1.5rem;
}

div {
  display: inline-block;
  cursor: pointer;
  position: relative;
}
</style>
