<template>
  <div class="mainsect">
    <section class="section--left">
      <div class="anime--desc__sect">
        <div class="animeimg">
          <img :src="anime.image_url" alt="" class="animeimg--img" />
        </div>
        <h3 class="title">{{ anime.title }}</h3>
        <h4 class="descrheader">Description</h4>
        <h5 class="descriptiontext">{{ anime.synopsis }}</h5>
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
        <div class="newssect">
          <div class="news">
            <news
              v-for="animenew in animenews"
              :key="animenew.id"
              :description="animenew.snippet"
              :title="animenew.title"
              :image="animenew.image.url"
            ></news>
          </div>
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
      return String(newdate).slice(0, -42);
    },
  },

  mounted() {
    const animeData = this.$cookies.get("selectedAnime");
    this.anime = animeData;

    var that = this;
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
      params: {
        q: that.anime.title,
        pageNumber: "1",
        pageSize: "10",
        autoCorrect: "true",
        withThumbnails: "true",
        fromPublishedDate: "null",
        toPublishedDate: "null",
      },
      headers: {
        "x-rapidapi-key": "af5d8d5742msh534d84026431d68p158043jsn6b112d5a470f",
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        that.animenews = response.data.value;
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<style scoped>
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
  width: inherit;
}

.section--right {
  width: 896px;
  border: none;
  box-shadow: 0px 0px 7px #5d5d5d;
  height: 83vh;
  border-bottom: white;
  background: white;
  border-radius: 7px;
  margin-right: 35px;
  height: auto;
  text-align: center;
  overflow: auto;
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
}
.summ-1_extension h4 {
  font-weight: 500;
  margin-top: 0px;
  font-size: 20px;
  margin-bottom: 19px;
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
  font-size: 21px;
  margin: 30px 0px;
  margin-bottom: 53px;
}

.animenews {
  width: 100%;
}

.newsect {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
