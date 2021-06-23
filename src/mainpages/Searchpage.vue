<template>
  <div class="mainpage">
    <searchSect @initiatingsearch="startSearch"></searchSect>

    <div>
      <h3 class="sorting">{{ descriptiontext }}</h3>
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
        <!-- <search-results
          v-for="animelist in startingList"
          :key="animelist.mal_id"
          :animename="animelist.title"
          :animedescr="animelist.synopsis"
          :animeimg="animelist.image_url"
          :anime="animelist"
        ></search-results> -->
        <img
          src="https://www.pngarts.com/files/2/Next-Download-PNG-Image.png"
          class="nextarrow"
          alt=""
          @click="nextResults"
          v-if="$store.state.currentList"
        />
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
      descriptiontext: "Popular Animes",
      startingList: [],
      page: 1,
    };
  },

  methods: {
    handleError(err) {
      this.$store.state.currentList = false;
      this.startingList = ["err"];
      this.$store.state.animefound = false;
      this.descriptiontext = "";
      this.$store.state.searchinprogress = false;
      console.log(err);
    },

    startSearch(chosenAnime) {
      this.$store.state.searchinprogress = true;

      let obj = chosenAnime;
      let { name, genre, preferredtype, status, rating } = obj;
      // Setting cookies to the value of what is being searched
      this.$cookies.set("searchinganime", obj);

      if (name.trim() === "") {
        axios
          .get(
            `https://api.jikan.moe/v3/search/anime?q=&order_by=score&sort=desc&page=${this.page}&rated=${rating}&genre=${genre}&type=${preferredtype}&status=${status}
`
          )
          .then((res) => {
            this.$store.state.searchinprogress = false;
            this.$store.state.animefound = true;
            this.descriptiontext = "Sorting by popular shows";
            this.startingList = res.data.results.slice(1);
            this.$store.state.currentList = true;
          })
          .catch((err) => {
            this.handleError(err);
          });
      }

      if (name) {
        axios
          .get(
            `https://api.jikan.moe/v3/search/anime?q=${name}&page=${this.page}&genre=${genre}&type=${preferredtype}&status=${status}&rated=${rating}`
          )
          .then((res) => {
            this.$store.state.searchinprogress = false;
            this.$store.state.animefound = true;
            this.descriptiontext = "Search Results";
            this.startingList = res.data.results;
            this.$store.state.currentList = true;
          })
          .catch((err) => {
            this.handleError(err);
          });
      }
    },
    nextResults() {
      this.page++;
      this.startSearch(this.$cookies.get("searchinganime"));
      window.document.querySelector(".result").scroll({
        top: 0,
        behavior: "smooth",
      });
    },
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
    // Searching for if someone has started their search, if not, then it loads default. If so, when the page loads
    //it gets the last searched value and shows it as the results
    // this.$cookies.set("searchinganime", "");
    if (this.$cookies.get("searchinganime")) {
      this.startSearch(this.$cookies.get("searchinganime"));
    } else {
      axios
        .get(
          `https://api.jikan.moe/v3/search/anime?q=&order_by=score&sort=desc`
        )
        .then((res) => {
          this.startingList = res.data.results.slice(1);
        })
        .catch((err) => {
          this.handleError(err);
        });
    }
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
  height: 582px;
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

.nextarrow {
  width: 54px;
  position: relative;
  right: 58px;
  height: 55px;
  top: 152px;
  cursor: pointer;
}
</style>
