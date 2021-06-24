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
            <h3 class="number">{{ anime.members }}</h3>
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
      const options = {
        method: "GET",
        url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
        params: {
          q: that.anime.title,
          pageNumber: "1",
          pageSize: "10",
          autoCorrect: "true",
        },
        headers: {
          "x-rapidapi-key":
            "af5d8d5742msh534d84026431d68p158043jsn6b112d5a470f",
          "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          let data = response.data.value;
          // const filtereddata = data.filter((anime) => anime.image.url);
          that.newsloaded = false;
          that.animenews = data;
          console.log(data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },

  mounted() {
    const animeData = this.$cookies.get("selectedAnime");
    this.anime = animeData;
    console.log(this.anime);
    this.getNews();
  },
};
</script>

<style scoped>
.loading {
  font-weight: 500;
}
.mainsect {
  display: flex;
  justify-content: space-between;
}

section {
  height: 556px;
  width: 504px;
  margin-top: 110px;
}

.anime--desc__sect {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
}

h3.title {
  font-size: 21px;
  width: 230px;
  text-align: center;
  font-weight: 600;
}

.descriptiontext {
  text-align: center;
  line-height: 22px;
  font-weight: 400;
  font-size: 15px;
  width: 306px;
}

.descrheader {
  margin: 0px;
  font-weight: 500;
  margin-bottom: -4px;
  font-size: 17px;
}

.animeimg--img {
  border-radius: 7px;
  box-shadow: 0px 0px 7px #5d5d5d;
  object-fit: cover;
  height: 300px;
  width: 212px;
}

.section--right {
  width: 896px;
  border: none;
  box-shadow: 0px 0px 7px #5d5d5d;
  height: 117vh;
  border-bottom: white;
  background: white;
  border-radius: 7px;
  margin-right: 35px;

  text-align: center;
  overflow: auto;
}

.section--right::-webkit-scrollbar {
  background: transparent;
  width: 10px;
}

.section--right::-webkit-scrollbar-button {
  background: transparent;
  width: 10px;
  height: 264px;
  margin-right: 30px;
}

.section--right::-webkit-scrollbar-thumb {
  background: #202020;
  width: 10px;
  border-radius: 4px;
}

.summarysect {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 35px;
}
.summary {
  background: linear-gradient(170deg, #5e5e5e, #363636);
  height: auto;
  width: 184px;
  display: flex;
  justify-content: center;
  color: white;
  border-radius: 7px;
  padding: 11px 0px;
}

.dates {
  font-size: 16px;
  font-weight: 400;
  text-align: left;
}
.summ-1_extension h4 {
  font-weight: 500;
  margin-top: 0px;
  font-size: 20px;
  margin-bottom: 19px;
  text-align: left;
}

.hr {
  border-radius: 25px;
  background: white;
  height: 4px;
  width: 95px;
}

.viewers {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.watchers {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.watchers h3 {
  font-size: 15px;
  font-weight: 400;
}

.viewers h3 {
  margin: 11px 0px;
  font-weight: 400;
}

.number {
  font-weight: 500 !important;
}

.summ-1 {
  width: 212px;
}

.summ-2 {
  width: 152px;
}

.episodeno {
  margin-top: 0px !important;
}

.summ-3 {
  width: 112px;
}

.summ-4 {
  background: linear-gradient(170deg, #2fb127, #095c1d);
}

.summ-4_bad {
  background: linear-gradient(170deg, #b12727, #310303);
}

h3.episodeno.percent {
  font-size: 23px;
  font-weight: 500;
}

.latestnewstext {
  font-weight: 500;
  font-size: 19px;
  margin: 35px 0px;
  margin-bottom: 53px;
}

.animenews {
  width: 100%;
}

.news {
  display: flex;
  flex-wrap: wrap;
}

.newsect {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.readmore {
  height: 40px;
  width: 110px;
  background: #252525;
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Rajdhani";
  cursor: pointer;
}

.button {
  height: 40px;
  width: 110px;
  background: #252525;
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Rajdhani";
  cursor: pointer;
}

.button:hover {
  background: black;
}
.back-btn {
  position: absolute;
  top: 28px;
  left: 36px;
}

.loadinggif {
  width: 15px;
  padding-top: 7px;
}
</style>
