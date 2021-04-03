<template>
  <div class="search-items">
    <div class="input-wrapper">
      <BaseButton
      v-show="isSearching"
      @focus="clearSearch"
      class="clear-button"
      className="inactive left-rounded flat">
      Clear
      </BaseButton>
      <input :class="{'rounder-border': !isSearching}"
      @keyup.enter="submit"
      v-model="term"
      placeholder="Search"
      type="text"
      name="search">
    </div>
    <BaseButton @click="submit" className="inactive">
      <i class="fas fa-search"></i>
    </BaseButton>
  </div>
</template>

<script>
import sanitizer from 'sanitizer';
import BaseButton from './BaseButton.vue';
// eslint-disable-next-line no-extend-native

export default {
  components: {BaseButton},
  data() {
    return {
      term: '',
      isSearching: false,
    };
  },
  watch: {
    $route() {
      if (this.$route.query.search) {
        this.isSearching = true;
        this.term = this.$route.query.search;
      } else {
        this.isSearching = false;
        this.term = '';
      }
    },
  },
  methods: {
    submit() {
      if (!this.term.length) {
        return;
      };
      console.log('Search clicked');
      const term = sanitizer.escape(this.term);
      this.isSearching = true;
      this.$router.push({name: 'products', query: {search: term}});
    },
    clearSearch() {
      this.isSearching = false;
      this.$router.push({name: 'products'});
    },
  },
};
</script>

<style scoped>
section {
  display: inline-block;
  font-size: 3rem;
}

.input-wrapper {
  background-color: white;
  border-radius: 3rem 0 0 3rem;
  height: 4rem;
  display: flex;
  justify-items: center;
  align-items: center;
}

input {
  font-size: 2rem;
  min-width: 20rem;
  width: 30vw;
  height: 4rem;
  display: inline-block;
  border:none;
  outline: none;
}

input::placeholder {
  color: black;
}

input:focus::placeholder {
  color: grey;
}

input:focus {
  background-color: rgb(240, 235, 235);
}

.search-items {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:center;
}

.clear-button {
  font-size: 1.6rem;
}

.rounder-border {
  border-radius: 3rem 0 0 3rem;
  margin-left: .3rem;
}

</style>
