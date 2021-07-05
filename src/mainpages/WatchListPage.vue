<template>
  <div>
    <div class="result">
      <searchResults
        v-for="list in lists"
        :key="list.mal_id"
        :animename="list.title"
        :animedescr="list.synopsis"
        :animeimg="list.image_url"
        :anime="list"
      ></searchResults>
    </div>
  </div>
</template>

<script>
import searchResults from "../components/searchResults.vue";
export default {
  components: {
    searchResults,
  },
  data() {
    return {
      lists: [],
    };
  },

  mounted() {
    // this.$store.state.watchList.forEach((anime) => {
    //   console.log(JSON.parse(JSON.stringify(anime)));
    // });
    localStorage.setItem(
      "updatedlist",
      JSON.stringify(JSON.parse(localStorage.getItem("animelist")))
    );
    this.lists = JSON.parse(localStorage.getItem("updatedlist"));
  },
};
</script>

<style scoped>
.result {
  display: flex;
  justify-content: space-evenly;
  column-gap: 21px;
  flex-wrap: wrap;
  margin-top: 131px;
  height: 85vh;
  overflow: hidden;
}
</style>
