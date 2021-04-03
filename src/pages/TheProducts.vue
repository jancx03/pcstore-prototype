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
import items from '#/items.js';
import TheSearchBar from 'components/TheSearchBar.vue';
import TheProductView from 'components/TheProductView.vue';

export default {
  components: {BaseItem, TheSearchBar, TheProductView},
  data() {
    return {
      items: [...items],
      windowSize: window.innerWidth,
      displaySearchBar: false,
      productViewItem: null,
      showProductView: false,
    };
  },
  watch: {
    $route() {
      if (this.$route.query.search) {
        this.search(this.$route.query.search);
      } else {
        this.items = items;
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
        this.displaySearchBar = false;
      }
    },
    search(_term) {
      const term = _term.toUpperCase();
      this.items = this.filter(items, term);
    },
    filter(items, term) {
      if (this.moreThanOne(term)) {
        const terms = term.split(' ');
        return this.filterMany(terms, items);
      } else {
        return this.filterOne(term, items);
      }
    },
    filterOne(term, items) {
      const results = [];
      items.find((item) => {
        const keywords = item.keywords.toUpperCase();
        if (keywords.includes(term)) {
          results.push(item);
        }
      });
      return results;
    },
    filterMany(terms, items) {
      const results = [...items];
      const didNotMatch = [];
      results.find((item, i) => {
        const keywords = item.keywords.toUpperCase().split(' ');
        terms.find((term) => {
          if (!(keywords.indexOf(term) >= 0)) {
            return didNotMatch.push(i);
          }
        });
      });

      didNotMatch.sort((a, b) => a - b);
      didNotMatch.reverse();

      didNotMatch.find((index) => {
        console.log(index);
        results.splice(index, 1);
      });
      console.log(results);
      return results;
    },
    openProduct(item) {
      this.productViewItem = item;
      this.showProductView = true;
    },
    moreThanOne(term) {
      if (term.split(' ').length > 1) {
        return true;
      } else return false;
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
