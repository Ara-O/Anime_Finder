<template>
  <div class="mainsect">
    <section class="section--left">
      <div class="anime--desc__sect">
        <div class="animeimg">
          <img :src="anime.image_url" alt="" />
        </div>
        <h3 class="title">{{ anime.title }}</h3>
        <h4 class="descrheader">Description</h4>
        <h5 class="descriptinotext">{{ anime.synopsis }}</h5>
      </div>
    </section>
    <section class="section--right"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anime: this.$store.state.animeSearch,
    };
  },

  methods: {
    // updatethings() {
    //   console.log("ish");
    //   this.anime = this.$store.state.animeSearch;
    // },
  },

  mounted() {
    this.anime = this.$store.state.animeSearch;
    console.log(this.anime);
  },
  //   created() {
  //     window.addEventListener("beforeunload", this.updatethings);
  //   },
};
</script>

<style scoped>
.mainsect {
  display: flex;
  justify-content: center;
}

section {
  height: 556px;
  width: 504px;
  margin-top: 110px;
}

.section--right {
  width: 687px;
}

.anime--desc__sect {
  justify-content: center;
  flex-direction: column;
}
</style>
