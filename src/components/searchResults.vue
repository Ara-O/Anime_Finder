<template>
  <div class="mainsect">
    <div class="resultcont">
      <div class="resultimg">
        <img :src="animeimg" alt="Anime Image" />
      </div>
      <div class="bottomresult">
        <h3 class="resultname">{{ animename }}</h3>
        <h5 class="resulttext">
          {{ animedescr }}
        </h5>
        <div class="routerlinks">
          <router-link to="/selectedanime">
            <button class="interested-btn" @click="showSelectedAnime">
              I'm Interested
            </button>
          </router-link>

          <button class="interested-btn__2" @click="addtowaitlist">
            <span class="addtowaitlist">
              <img
                src="../assets/addwaitlist.png"
                alt="Add to watchlist"
                class="addtowaitlist"
                title="Add to watchlist"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../styles/component-searchResults.css"></style>

<script>
export default {
  props: ["animename", "animedescr", "animeimg", "anime"],
  data() {
    return {
      dataofanime: "",
      copyofanime: {},
      animeWatchlist: [],
    };
  },
  methods: {
    showSelectedAnime() {
      this.dataofanime = this.anime;
      const target_copy = Object.assign({}, this.dataofanime);
      this.$store.state.animeSearch = target_copy;
      this.$cookies.set("selectedAnime", this.$store.state.animeSearch);
    },

    addtowaitlist() {
      this.showSelectedAnime();
      //Searchig for if anime already exists
      if (
        this.$store.state.watchList.find(
          (anime) => anime.mal_id === this.dataofanime.mal_id
        ) === undefined
      ) {
        this.$store.state.watchList.push(this.dataofanime);
        this.animeWatchlist = this.$store.state.watchList;
        console.log("Anime of that does not exist in file");
      } else {
        console.log("Anime exist");
      }

      // currentwatchitem.push(this.dataofanime);
      // console.log(currentwatchitem[currentwatchitem.length - 1]);
      // this.$store.state.watchList.forEach((anime) => {
      //  });
    },
  },

  watch: {
    animeWatchlist() {
      console.log("-------------------");
      console.log(this.animeWatchlist);
      this.$cookies.set(
        "animewatchlist",
        Object.assign({}, this.animeWatchlist)
      );
    },
  },
};
</script>
