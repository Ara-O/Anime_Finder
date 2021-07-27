<template>
  <div class="mainsect">
    <section class="section--left">
      <div class="anime--desc__sect">
        <button class="button back-btn" @click="$router.go(-1)">Go back</button>
        <div class="animeimg">
          <img :src="anime.image_url" alt="" class="animeimg--img" />
        </div>
        <h3 class="title">{{ anime.title }}</h3>
        <h4 class="descrheader">Description</h4>
        <h5 class="descriptiontext">{{ anime.synopsis }}</h5>

        <a :href="anime.url" target="_blank" class="readmore"
          ><button class="button">Read More</button></a
        >
      </div>
    </section>
    <section class="section--right">
      <div class="summarysect">
        <div class="summary summ-1">
          <div class="summ-1_extension">
            <h3 class="dates">Started -</h3>
            <h4>{{ getStartDate }}</h4>
            <div class="hr"></div>
            <h3 class="dates">Ended -</h3>
            <h4>{{ getEndDate }}</h4>
          </div>
        </div>
        <div class="summary summ-2">
          <div class="viewers">
            <h3>Total Viewers</h3>
            <h3 class="number">{{ anime.members.toLocaleString() }}</h3>
          </div>
        </div>
        <div class="summary summ-3">
          <div class="viewers">
            <h3 style="font-size: 15px">Episodes</h3>
            <h3 class="episodeno number">{{ anime.episodes }}</h3>
          </div>
        </div>
        <div class="summary" :class="score">
          <div class="watchers">
            <h3>Score among watchers</h3>
            <h3 class="episodeno percent">
              {{ (anime.score * 10).toFixed(2) }}%
            </h3>
          </div>
        </div>
      </div>
      <div class="animenews">
        <h3 class="latestnewstext">Latest {{ anime.title }} news</h3>
        <div v-if="newsloaded">
          <h3 class="loading">
            Loading news
            <img
              src="../assets/loading.gif"
              alt="loading animation"
              class="loadinggif"
            />
          </h3>
        </div>
        <div class="newssect" v-else>
          <news
            v-for="animenew in animenews"
            :key="animenew.id"
            :description="animenew.snippet"
            :title="animenew.title"
            :link="animenew.url"
            :image="animenew.pagemap"
          ></news>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import news from "../components/news.vue";
import axios from "axios";

export default {
  components: {
    news,
  },

  data() {
    return {
      anime: this.$store.state.animeSearch,
      animename: "",
      animenews: [],
      newsloaded: true,
    };
  },

  computed: {
    score() {
      if (this.anime.score * 10 > 50) {
        return `summ-4`;
      } else {
        return `summ-4_bad`;
      }
    },

    getStartDate() {
      const newdate = new Date(this.anime.start_date);
      return String(newdate).slice(0, -42);
    },

    getEndDate() {
      const newdate = new Date(this.anime.end_date);
      let date2 = String(newdate).slice(0, -42);
      if (date2 === "Wed Dec 31 1969") {
        return "Still going!";
      } else {
        return date2;
      }
    },
  },

  methods: {
    getNews() {
      var that = this;
      // const options = {
      //   method: "GET",
      //   url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
      //   params: {
      //     q: that.anime.title,
      //     pageNumber: "1",
      //     pageSize: "10",
      //     autoCorrect: "true",
      //   },
      //   headers: {
      //     "x-rapidapi-key":
      //       "af5d8d5742msh534d84026431d68p158043jsn6b112d5a470f",
      //     "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      //   },
      // };

      // axios.request(options);
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyCOHLs1kP6p8tcnhnJX90wFzji0o2NPiWw&cx=b09f9169eef29a298&imgType=photo&num=10&q=${this.anime.title}&lr=lang_en`
        )
        .then(function (response) {
          let data = response.data.items;
          // // const filtereddata = data.filter((anime) => anime.image.url);
          that.newsloaded = false;
          that.animenews = data;
          // console.log(data);
        });
      //   .catch(function (error) {
      //     console.error(error);
      //   });
    },
  },

  mounted() {
    const animeData = this.$cookies.get("selectedAnime");
    this.anime = animeData;
    this.getNews();
  },

  beforeRouteEnter(to, from, next) {
    if (from.name === "Redirecting") {
      next();
    } else {
      next("/");
    }
  },
};
</script>

<style scoped src="../styles/selectedAnimePage.css"></style>
