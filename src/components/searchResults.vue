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
          <router-link to="/watchlist">
            <button class="interested-btn__2" @click="addtowaitlist">
              <span class="addtowaitlist">
                <img
                  src="../assets/addwaitlist.png"
                  alt="Add to waitlist"
                  class="addtowaitlist"
                  title="Add to watchlist"
                />
              </span>
            </button>
          </router-link>
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
    };
  },
  methods: {
    showSelectedAnime() {
      this.dataofanime = this.anime;
      const target_copy = Object.assign({}, this.dataofanime);
      this.$store.state.animeSearch = target_copy;
      this.$cookies.set("selectedAnime", this.$store.state.animeSearch);
    },

    addtowaitlist() {},
  },
};
</script>
