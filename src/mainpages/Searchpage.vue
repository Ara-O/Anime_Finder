<template>
  <div class="mainpage">
    <searchSect></searchSect>
    <div>
      <h3 class="sorting">Most popular anime</h3>
      <div class="result">
        <component
          :is="renderedComponent"
          v-for="tes in test"
          :key="tes.e"
          :animename="tes.e"
          :animedescr="tes.lola"
          :anime="tes.ee"
        ></component>
      </div>
    </div>
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
    return {
      test: [
        {
          lol: "e",
          lola: "ee",
          e: "ro",
        },
        {
          lol: "ee",
          lola: "eee",
          e: "reo",
        },
      ],
    };
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 95px;
}

.result {
  display: flex;
  justify-content: space-around;
  column-gap: 35px;
}

.sorting {
  font-weight: 500;
}
</style>
