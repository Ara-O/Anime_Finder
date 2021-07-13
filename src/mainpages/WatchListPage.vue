<template>
  <div>
    <div class="result">
      <div class="mainsect" v-for="list in lists" :key="list.mal_id">
        <div class="resultcont">
          <div class="resultimg">
            <img :src="list.image_url" alt="Anime Image" />
          </div>
          <div class="bottomresult">
            <h3 class="resultname">{{ list.title }}</h3>
            <h5 class="resulttext">
              {{ list.synopsis }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
<style scoped src="../styles/component-searchResults.css"></style>
<style scoped>
.result {
  display: flex;
  justify-content: center;
  /* -moz-column-gap: 21px; */
  column-gap: 21px;
  /* column-gap: 21px; */
  flex-wrap: wrap;
  margin-top: 101px;
  /* height: 85vh; */
  overflow: hidden;
}
</style>
