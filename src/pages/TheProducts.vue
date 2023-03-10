<template>
  <section>
    <header class="search-bar">
      <TheSearchBar />
    </header>
    <TheProductView :item="productViewItem"
    :showProduct="showProductView"
    @closeProductView="showProductView = false"/>
    <main v-show="!showProductView">
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
  methods: {
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


/* Grid */
@media screen and (max-width: 528px) {
  main {
    grid-template-columns:  1fr;
  }
}
@media screen and (min-width: 768px) {
  main {
    grid-template-columns:  repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  main {
    grid-template-columns:  repeat(3, 1fr);
  }
}
@media screen and (min-width: 1256px) {
  main {
    grid-template-columns:  repeat(4, 1fr);
  }
}
@media screen and (min-width: 1500px) {
  main {
    grid-template-columns:  repeat(5, 1fr);
  }
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

/* Search Bar */
@media screen and (min-width: 1024px) {
  .search-bar {
    display: none;
  }
}

</style>
