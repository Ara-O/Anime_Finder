<template>
  <div>
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
    <h4 class="filterstext">More filters</h4>
    <button class="searchbtn" @click="search">Start Search</button>
  </div>
</template>

<style scoped>
.first-text {
  font-size: 29px;
  font-weight: 500;
  margin-bottom: 37px;
  margin-top: 132px;
}

input {
  font-family: Rajdhani;
  text-align: center;
  font-size: 16px;
}

.inputfield {
  height: 46px;
  width: 330px;
  border-radius: 9px;
  border: 0px;
  box-shadow: 0px 0px 5px #d5d5d5;
}

.search_categories {
  font-size: 13px;
  padding: 12px 8px 12px 84px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 9px;
  overflow: hidden;
  position: relative;
  margin-top: 23px;
  box-shadow: 0px 0px 5px #d5d5d5;
  width: 221px;
}
.search_categories-2 {
  font-size: 13px;
  padding: 12px 8px 12px 25px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 9px;
  overflow: hidden;
  position: relative;
  margin-top: 23px;
  box-shadow: 0px 0px 5px #d5d5d5;
  width: 221px;
}

.select {
  width: 123%;
  background: url("../assets/dropdown.png") no-repeat;
  background-position: 76% center;
  background-size: 14px;
}

.select select {
  background: transparent;
  font-size: 16px;
  line-height: 1;
  border: 0;
  padding: 0;
  border-radius: 0;
  width: 90%;
  position: relative;
  z-index: 10;
  outline: none;
  font-family: Rajdhani;
  font-size: 16px;
  color: #737373;
}

.select .select2 {
  width: 95%;
}

#select_categories:focus-visible {
  outline: rebeccapurple;
}

.flexcont {
  display: flex;
  width: 376px;
  column-gap: 29px;
}

.filterstext {
  font-weight: 400;
}

.searchbtn {
  height: 46px;
  width: 110px;
  background: #252525;
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Rajdhani";
  cursor: pointer;
}

.searchbtn:hover {
  background: black;
}
</style>

<script>
export default {
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

  methods: {
    search() {
      console.log(this.chosenAnime);
    },
  },
};
</script>
