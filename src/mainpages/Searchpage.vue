<template>
  <div class="mainpage">
    <searchSect></searchSect>
    <div><h3>lol</h3></div>
  </div>
</template>

<script>
import searchSect from "../components/searchsection.vue";
export default {
  name: "HelloWorld",
  components: {
    searchSect,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpage {
  display: flex;
  justify-content: space-around;
  margin-top: 55px;
}
</style>
