<template>
  <div class="mainsect">
    <div class="resultcont">
      <div class="resultimg">
        <img :src="animeimg" alt="Anime Image" />
      </div>
      <div>
        <h3 class="resultname">{{ animename }}</h3>
        <h5 class="resulttext">
          {{ animedescr }}
        </h5>
        <router-link to="/selectedanime">
          <button class="interested-btn" @click="showSelectedAnime">
            I'm Interested
          </button>
        </router-link>
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
    };
  },
  methods: {
    showSelectedAnime() {
      this.dataofanime = this.anime;
      const target_copy = Object.assign({}, this.dataofanime);
      this.$store.state.animeSearch = target_copy;
      this.$cookies.set("selectedAnime", this.$store.state.animeSearch);
    },
  },
};
</script>
