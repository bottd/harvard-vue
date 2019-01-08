<template>
  <div id="app">
    <Banner/>
    <div v-if='loading'>
      <h1>loading...</h1>
    </div>
    <div v-if="treasures">
      <Discover
        v-bind:treasure="treasures[treasureIndex]"
        @nextImg="cycleImage(1)"
        @prevImg="cycleImage(-1)"
      />
    </div>
  </div>
</template>

<script>
import Banner from './Banner.vue';
import Discover from './Discover.vue';
import { getTreasures } from '../utils';
const key = 'b8d08520-12d8-11e9-90d1-473127181d8c';

export default {
  name: 'app',
  components: {
    Banner,
    Discover,
  },
  data() {
    return {
      loading: false,
      treasureIndex: null,
      treasures: null,
      next: `https://api.harvardartmuseums.org/object?q=totalpageviews:0&size=10&apikey=${key}`,
      prev: '',
    };
  },
  created() {
    this.fetchTreasures(this.next);
  },
  methods: {
    async fetchTreasures(url) {
      this.loading = true;
      const apiResults = await getTreasures(url);
      const { treasures, next, prev } = apiResults;
      if (url === this.prev) {
        this.treasureIndex = treasures.length -1;
      } else {
        this.treasureIndex = 0;
      }
      this.next = next;
      this.prev = prev;
      this.treasures = treasures;
      this.loading = false;
    },
    cycleImage(num) {
      if (this.treasures[this.treasureIndex + num]) {
        this.treasureIndex += num;
      }
      else if (num === 1) {
        this.fetchTreasures(this.next);
      }
      else if (num === -1 && this.prev !== '') {
        this.fetchTreasures(this.prev);
      }
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #EFEEEA;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
</style>
