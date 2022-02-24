<template>
  <div class="mainpage">
    <searchSect @initiatingsearch="startSearch" class="searchSect"></searchSect>
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
          @addtowaitlist="addwaitlist"
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
import * as firebaseServices from "../services/firebaseService"
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
      animeWatchlist: [],
    };
  },

  methods: {
    updateState(text) {
      this.$store.state.searchinprogress = false;
      this.$store.state.animefound = true;
      this.$store.state.currentList = true;
      this.descriptiontext = text;
      window.document.querySelector(".result").scroll({
        top: 0,
        behavior: "smooth",
      });
    },

    handleError(err) {
      this.$store.state.currentList = false;
      this.startingList = ["err"];
      this.$store.state.animefound = false;
      this.descriptiontext = "";
      this.$store.state.searchinprogress = false;
      this.handleError(err);
    },

    startSearch(chosenAnime) {
      this.$store.state.searchinprogress = true;
      let obj = chosenAnime;
      let { name, genre, preferredtype, status, rating } = obj;
      // Setting cookies to the value of what is being searched
      this.$cookies.set("searchinganime", obj);
      //Searching for empty state
      if (name.trim() === "") {
        axios
          .get(
            `https://api.jikan.moe/v3/search/anime?q=&order_by=score&sort=desc&page=${this.page}&rated=${rating}&genre=${genre}&type=${preferredtype}&status=${status}`
          )
          .then((res) => {
            this.updateState("Sorting by popular shows");
            this.startingList = res.data.results.slice(1);
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
            this.updateState("Search Results");
            this.startingList = res.data.results;
            if (this.startingList.length === 0) {
              this.$store.state.currentList = false;
              this.$store.state.animefound = false;
            }
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

    // !HERE ------- 

    addwaitlist(animebeingadded) {
      firebaseServices.storeUserData(animebeingadded)
      console.log(animebeingadded)

    },
  },

  computed: {
    renderedComponent() {
      if (this.$store.state.animefound) {
        return searchResults;
      } else {
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
<style scoped src="../styles/searchPage.css"></style>
