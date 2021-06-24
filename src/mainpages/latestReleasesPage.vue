<template>
  <div class="main">
    <div>
      <h3 class="latest">{{ text }}</h3>
    </div>
    <section class="releasessection">
      <release
        v-for="release in releases"
        :key="release.id"
        :img="release.cover"
        :name="release.title"
        :releasedate="release.date"
      ></release>
    </section>
  </div>
</template>

<style scoped>
.latest {
  margin-top: 100px;
  font-weight: 600;
  margin-left: 26px;
}

.main {
  margin-left: 42px;
}

.releasessection {
  margin-top: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 62px;
}
</style>

<script>
import release from "../components/latestRelease.vue";
import axios from "axios";
export default {
  components: {
    release,
  },
  data() {
    return {
      releases: [],

      text: "Loading....",
    };
  },

  mounted() {
    const options = {
      method: "GET",
      url: "https://simpleanime.p.rapidapi.com/anime/list/recent",
      headers: {
        "x-rapidapi-key": "af5d8d5742msh534d84026431d68p158043jsn6b112d5a470f",
        "x-rapidapi-host": "simpleanime.p.rapidapi.com",
      },
    };
    var that = this;
    axios
      .request(options)
      .then(function (response) {
        that.text = "Latest Releases";
        that.releases = response.data.data;
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
