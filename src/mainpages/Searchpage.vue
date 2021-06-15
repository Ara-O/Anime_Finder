<template>
  <div class="mainpage">
    <searchSect></searchSect>
    <div>
      <h3 class="sorting">Popular animes</h3>
      <div class="result">
        <component
          :is="renderedComponent"
          v-for="animelist in startingList"
          :key="animelist.mal_id"
          :animename="animelist.title"
          :animedescr="animelist.synopsis"
          :animeimg="animelist.image_url"
          :anime="animelist"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import searchSect from "../components/searchsection.vue";
import searchResults from "../components/searchResults.vue";
import animeNotFound from "../components/animeNotFound.vue";
const axios = require("axios").default;
export default {
  name: "HelloWorld",
  components: {
    searchSect,
    searchResults,
  },
  data() {
    return {
      startingList: [],
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

  mounted() {
    // axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.chosenAnime.name}&page=${this.currentpage}&genre=${this.chosenAnime.genre}&type=${this.chosenAnime.type}&status=${this.chosenAnime.status}&rated=${this.chosenAnime.rating}`);
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=&order_by=score&sort=desc`)
      .then((res) => {
        console.log(res);
        this.startingList = res.data.results.slice(1);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpage {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 70px;
}

.result {
  display: flex;
  justify-content: space-around;
  column-gap: 21px;
  width: 934px;
  flex-wrap: wrap;
  height: 670px;
  overflow: auto;
}

.result::-webkit-scrollbar {
  background: transparent;
  width: 10px;
}

.result::-webkit-scrollbar-button {
  background: transparent;
  width: 10px;
}

.result::-webkit-scrollbar-thumb {
  background: #252525;
  width: 10px;
  border-radius: 4px;
}

.sorting {
  font-weight: 500;
}
</style>
