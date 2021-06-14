<template>
  <div>
    <h3 class="first-text">Start your anime search</h3>
    <input
      type="text"
      class="inputfield"
      placeholder="Anime Name ( Optional )"
    />
    <br />
    <div class="search_categories">
      <div class="select">
        <select name="search_categories" id="search_categories">
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
          <option value="21">Sci Fi</option>
          <option value="27">Shounen</option>
          <option value="36">Slice of life</option>
        </select>
      </div>
    </div>
    <!-- ANIME TYPE -->
    <div class="search_categories">
      <div class="select">
        <select name="search_categories" id="search_categories">
          <option value="" selected="selected">Preferred Anime Type</option>
          <option value="TV">TV</option>
          <option value="Movie">Movie</option>
          <option value="Special">Special</option>
          <option value="OVA">OVA</option>
          <option value="">Any</option>
        </select>
      </div>
    </div>
    <!-- STATUS -->
    <div class="search_categories">
      <div class="select">
        <select name="search_categories" id="search_categories">
          <option value="" selected="selected">Anime Status</option>
          <option value="TBA">To be Announced</option>
          <option value="Airing">Airing</option>
          <option value="Completed">Completed</option>
          <option value="">Any</option>
        </select>
      </div>
    </div>
    <!-- RATING -->
    <div class="search_categories">
      <div class="select">
        <select name="search_categories" id="search_categories">
          <option value="" selected="selected">Anime Status</option>
          <option value="TBA">To be Announced</option>
          <option value="Airing">Airing</option>
          <option value="Completed">Completed</option>
          <option value="">Any</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.first-text {
  font-size: 29px;
  font-weight: 500;
  margin-bottom: 37px;
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
  box-shadow: 0px 0px 5px #717171;
}

.search_categories {
  font-size: 13px;
  padding: 12px 8px 12px 88px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 9px;
  overflow: hidden;
  position: relative;
  margin-top: 23px;
  box-shadow: 0px 0px 5px #717171;
}

.search_categories .select {
  width: 123%;
  background: url("../assets/dropdown.png") no-repeat;
  background-position: 76% center;
  background-size: 17px;
}

.search_categories .select select {
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

#select_categories:focus-visible {
  outline: rebeccapurple;
}
</style>
