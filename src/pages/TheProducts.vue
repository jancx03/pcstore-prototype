<template>
  <section>
    <header v-show="displaySearchBar" class="search-bar">
      <TheSearchBar />
    </header>
    <TheProductView :item="productViewItem"
    :showProduct="showProductView"
    :windowSize="windowSize"
    @closeProductView="showProductView = false"/>
    <main :class="gridSize">
      <BaseItem v-for="(item, index) in items"
      :item="item"
      :key="index"
      @buttonPress="openProduct(item)"/>
    </main>
  </section>
</template>

<script>
import BaseItem from 'components/BaseItem.vue';
import TheSearchBar from 'components/TheSearchBar.vue';
import TheProductView from 'components/TheProductView.vue';

const __initialState__ = false;

export default {
  components: {BaseItem, TheSearchBar, TheProductView},
  inject: {_items: 'items'},
  data() {
    return {
      items: this._items,
      windowSize: window.innerWidth,
      displaySearchBar: __initialState__,
      productViewItem: null,
      showProductView: __initialState__,
    };
  },
  watch: {
    $route() {
      if (this.$route.query.search) {
        this.search(this.$route.query.search);
      } else {
        this.items = this._items;
      }
    },
  },
  computed: {
    gridSize() {
      if (this.windowSize > 1500) {
        return 'grid-5-col';
      } else if (this.windowSize > 1256) {
        return 'grid-4-col';
      } else if (this.windowSize > 1024) {
        return 'grid-3-col';
      } else if (this.windowSize > 665) {
        return 'grid-2-col';
      } else {
        return 'grid-1-col';
      }
    },

  },
  methods: {
    onWindowResize() {
      // grid
      this.windowSize = window.innerWidth;
      // search bar
      if (window.innerWidth < 991) {
        this.displaySearchBar = true;
      } else {
        this.displaySearchBar = __initialState__;
      }
    },
    search(term) {
      const terms = term.toUpperCase().split(' ');
      this.items = this.filter(this._items, terms);
    },
    filter(items, terms) {
      const results = [];
      //
      items.find((item, i) => {
        const keywords = item.keywords.toUpperCase();
        let doesNotMatch = __initialState__;
        terms.find((term) => {
          if (!(keywords.includes(term))) {
            return doesNotMatch = true;
          }
        });
        if (/* doesMatch */ !doesNotMatch) {
          results.push(item);
        }
      });

      return results;
    },
    openProduct(item) {
      this.productViewItem = item;
      this.showProductView = true;
    },
  },
  mounted() {
    // search split include pop
    if (this.$route.query.search) {
      this.search(this.$route.query.search);
    }
    // search bar
    if (window.innerWidth < 991) {
      this.displaySearchBar = true;
    } else {
      this.displaySearchBar = false;
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
main {
  /* display: flexbox; */
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start; */

  display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  transition: all .3s linear;
}

.grid-5-col {
  grid-template-columns:  20% 20% 20% 20% 20%;
}

.grid-4-col {
    grid-template-columns:  25% 25% 25% 25%;
}

.grid-3-col {
    grid-template-columns:  33% 33% 33%;
}

.grid-2-col {
    grid-template-columns:  50% 50%;
}

.grid-1-col {
    grid-template-columns:  100%;
}

section {
  padding: 1rem 5rem;
}

.search-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  z-index: 4;
}
</style>
