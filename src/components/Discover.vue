<template>
  <div class="discover" v-on:keyup.39="emitNext" v-on:keyup.37="emitPrev">
    <h2> Currently viewing: {{ treasure.title }}</h2>
    <div class="img" v-bind:style="{ backgroundImage: 'url(' + treasure.imageUrl + ')'}">
      <button class="left" v-on:click="emitPrev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="right" v-on:click="emitNext" >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'discover',
  props: {
    treasure: Object,
  },
  methods: {
    emitPrev() {
      this.$emit('prevImg');
    },
    emitNext() {
      this.$emit('nextImg');
    },
  },
};
</script>

<style scoped>
.discover {
  position: relative;
  height: 80vh;
  width: 100vw;
}

.img {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

i {
  font-size: 36px;
}

button {
  background-color: transparent;
  border: none;
  height: 100%;
  position: absolute;
  width: 50%;
}

button:focus {
  outline: 0;
}

.left {
  left: 0;
  text-align: left;
}

.right {
  right: 0;
  text-align: right;
}
</style>
