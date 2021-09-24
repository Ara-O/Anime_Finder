<template>
  <div class="all">
    <h3 class="maximize" @click="maximize">Maximize</h3>

    <h3 class="first-text">Start your anime search</h3>
    <input
      type="text"
      class="inputfield"
      placeholder="Anime Name ( Optional )"
      v-model="chosenAnime.name"
    />
    <br />
    <div class="search_categories">
      <div class="select">
        <select
          name="search_categories"
          id="search_categories"
          v-model="chosenAnime.genre"
        >
          <option value="" selected="selected">Select your genre</option>
          <option value="1">Action</option>
          <option value="2">Adventure</option>
          <option value="4">Comedy</option>
          <option value="6">Demons</option>
          <option value="7">Mystery</option>
          <option value="10">Fantasy</option>
          <option value="14">Horror</option>
          <option value="16">Magic</option>
          <option value="22">Romance</option>
          <option value="24">Sci Fi</option>
          <option value="27">Shounen</option>
          <option value="36">Slice of life</option>
        </select>
      </div>
    </div>
    <!-- ANIME TYPE -->
    <div class="search_categories">
      <div class="select">
        <select
          name="search_categories"
          id="search_categories"
          v-model="chosenAnime.preferredtype"
        >
          <option value="" selected="selected">Preferred Anime Type</option>
          <option value="">Any</option>
          <option value="tv">TV</option>
          <option value="movie">Movie</option>
          <option value="special">Special</option>
          <option value="ona">ONA</option>
          <option value="ova">OVA</option>
        </select>
      </div>
    </div>
    <!-- STATUS -->
    <div class="flexcont">
      <div class="search_categories-2">
        <div class="select">
          <select
            name="search_categories"
            id="search_categories"
            class="select2"
            v-model="chosenAnime.status"
          >
            <option value="" selected="selected">Anime Status</option>
            <option value="">Any</option>
            <option value="tba">To be Aired</option>
            <option value="upcoming">Upcoming</option>
            <option value="airing">Airing</option>
            <option value="complete">Completed</option>
          </select>
        </div>
      </div>
      <!-- RATING -->
      <div class="search_categories-2">
        <div class="select">
          <select
            name="search_categories"
            id="search_categories"
            class="select2"
            v-model="chosenAnime.rating"
          >
            <option value="" selected="selected">Anime Rating</option>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg13">PG13</option>
            <option value="r">R</option>
            <option value="rx">RX</option>
            <option value="">Any</option>
          </select>
        </div>
      </div>
    </div>
    <button class="searchbtn" @click="startsearch">Start Search</button>
    <h3 class="minimize" @click="minimize">Minimize</h3>
    <h3
      v-if="$store.state.searchinprogress"
      style="font-weight: 400; width: 370px; line-height: 26px; font-size: 16px"
      class="loadingtext"
    >
      Loading...This may take a while
    </h3>
  </div>
</template>

<style scoped src="../styles/component-searchSection.css"></style>

<script>
import { scrollUp, scrollDown } from "../modules/minimize-animation.js";
export default {
  emits: ["initiatingsearch"],
  data() {
    return {
      chosenAnime: {
        name: "",
        genre: "",
        preferredtype: "",
        status: "",
        rating: "",
      },
    };
  },

  mounted() {
    this.$store.state.searchinprogress = false;

    window.document
      .querySelector(".inputfield")
      .addEventListener("change", this.startsearch);
  },

  methods: {
    startsearch() {
      this.$emit("initiatingsearch", this.chosenAnime);
    },

    minimize() {
      scrollUp("all", ".maximize");
    },

    maximize() {
      scrollDown("all", ".maximize");
    },
  },
};
</script>
