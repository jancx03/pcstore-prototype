<template>
  <div class="root" :style="rootStyle">
    <p ref="brand" class="brand">{{item.brand}}</p>
    <BaseButton @click="$emit('buttonPress')" class="button" className="inactive">
      <i class="fas fa-plus"></i>
    </BaseButton>
    <p class="model">{{item.model}}</p>
    <img class="image" :src="item.img" alt="">
    <p v-if="!discounted" class="price">{{'$' + item.price}}</p>
    <div v-if="discounted">
      <p class="price discounted">{{'$' + item.price}}</p>
      <p class="model">Now</p>
      <p class="price discount">{{'$' + (item.price / 2).toFixed(2)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  emits: ['buttonPress'],
  data() {
    return {
      brandWidth: 0,
      discounted: false,
    };
  },
  computed: {
    rootStyle() {
      const _width = this.brandWidth + 200;
      const minWidth = _width.toString() + 'px';

      return {
        minWidth: minWidth,
      };
    },
  },
  mounted() {
    this.brandWidth = this.$refs.brand.getBoundingClientRect().width;
    if (Math.floor(Math.random() * 10) > 5) {
      this.discounted = true;
    }
  },
};
</script>

<style scoped>
.brand {
  font-size: 3rem;
  font-weight: 600;
  display: inline-block;
}
.model {
  font-size: 2rem;
  font-weight: 300;
}
.image {
  /* height: 20rem; */
  width: 100%;
  max-height: 20rem;
}
.discounted {
  text-decoration: line-through black;
}

.discount {
  color: green;
}

.price {
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2;
}


.root {
  text-align: center;
  padding: 2rem;
  /* margin: 1rem; */
  /* box-shadow: .2rem .1rem .3rem rgba(0, 0, 0, 0.5), -.2rem 0 .2rem rgba(0, 0, 0, 0.5); */
  display: inline-block;
  background-color: rgb(240, 235, 235);
  /* min-width: 25rem; */
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
