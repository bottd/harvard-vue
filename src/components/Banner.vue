<template>
  <div class="banner">
    <h1>💰Hidden Treasures💰</h1>
    <h2>Search for treasures lost in the Harvard Museum API.  All of these images have never been viewed on their website</h2>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  height: 20vh;
  width: 100vw;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
