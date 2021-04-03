<template>
  <dialog @click="toggleDialog" :open="showProduct" class="dialog">
    <BaseButton class="close" className="flat inactive-white"><i class="fas fa-times"></i></BaseButton>
    <main :class="mainClass">
      <div class="column">
        <img :src="product.img">
      </div>
      <div class="column text">
        <p class="header">{{product.brand}} {{product.model}}</p>
        <p class="description">{{product.brand}} {{product.model}} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p class="price">PRICE: {{product.price}}</p>
        <p class="keywords">KEYWORDS: {{product.keywords}}</p>
      </div>
      <div class="column action-items">
        <BaseButton className="flat inactive-white" class="action">Add to Cart</BaseButton>
        <BaseButton className="flat inactive-white" class="action">Finance</BaseButton>
        <BaseButton className="flat inactive-white" class="action">Whishlist</BaseButton>
        <BaseButton className="flat inactive-white" class="action">Get Support</BaseButton>
      </div>
    </main>
  </dialog>
</template>

<script>
export default {
  props: ['item', 'showProduct', 'windowSize'],
  emits: ['closeProductView'],
  data() {
    return {
      product: {},
      gridSize: this.windowSize,
    };
  },
  watch: {
    item() {
      if (Object.keys(this.item).length >= 4) {
        this.product = this.item;
      }
    },
    windowSize() {
      this.gridSize = this.windowSize;
    },
  },
  computed: {
    titles() {
      const titles = Object.keys(this.product);
      titles.splice(titles.indexOf('img'), 1);
      return titles;
    },
    mainClass() {
      if (this.windowSize > 1024) {
        return ['product-view', 'grid-3-col'];
      } else {
        return ['product-view', 'grid-1-col'];
      }
    },
  },
  methods: {
    toggleDialog() {
      this.$emit('closeProductView');
    },
  },
};
</script>

<style scoped>
.dialog {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 98;
  outline: none;
  border: none;
}

.product-view {
  min-height: 100vh;
  background-color: white;
  display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  transition: all .3s linear;
  justify-items: center;
}

.grid-3-col {
  grid-template-columns:  40% 40% 20%;
}

.grid-1-col {
  grid-template-columns:  100%;
}

.column {
  display: block;
  /* border: 1px solid black; */
}

img {
  width: 100%;
  max-width: 100%;
}

.header {
  display: inline-block;
  font-size: 4rem;
}


.description {
  font-size: 2rem;
  letter-spacing: 1.5;
  font-weight: 300;
  margin: 4rem;
  text-align: justify;
}

.text {
  text-align: center;
}

.price {
  font-size: 2rem;
}

.keywords {
  font-size: 1rem;
  color: grey;
}

.action {
  width: 100%;
  /* margin-bottom: 2rem; */
}

.action-items {
  padding-top: 7rem;
}

.close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  margin-bottom: 5rem;
  z-index: 99;
}

i {
  font-size: 3rem;
}
</style>
