<template>
  <div class="mainpage">
    <searchSect></searchSect>
    <component :is="renderedComponent"></component>
  </div>
</template>

<script>
import searchSect from "../components/searchsection.vue";
import searchResults from "../components/searchResults.vue";
import animeNotFound from "../components/animeNotFound.vue";
export default {
  name: "HelloWorld",
  components: {
    searchSect,
    searchResults,
  },
  data() {
    return {};
  },

  computed: {
    renderedComponent() {
      if (this.$store.state.animefound) {
        console.log("anime found");
        return searchResults;
      } else {
        console.log("anime not found");
        return animeNotFound;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpage {
  display: flex;
  justify-content: space-around;
  margin-top: 95px;
}
</style>
