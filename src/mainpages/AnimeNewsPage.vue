<template>
  <div>
    <div class="main">
      <section class="leftsection">
        <h3 class="searchtext">Search for anime news</h3>
        <div class="searchsect">
          <input
            type="text"
            class="inputfield"
            placeholder="Anime Name ( Optional )"
            v-model="newsSearch"
          />
          <button class="button" @click="searchNews">Search</button>
        </div>
        <div class="newsblock--sect">
          <h3 v-if="loading" style="font-weight: 400">Loading...</h3>
          <newsArticle
            v-for="animeNew in animeNews"
            :key="animeNew.id"
            :allnews="animeNew"
            :synopsis="animeNew.description"
            :img="animeNew.urlToImage"
            :title="animeNew.title"
            @selectedArticle="articleSelected"
          ></newsArticle>
        </div>
      </section>
      <section class="rightsection">
        <div class="rightarticle">
          <div v-if="newsSearchNotStarted">
            <img
              src="../assets/waiting.png"
              alt="Waiting image"
              class="waitingimg"
            />
          </div>
          <div v-else>
            <h3 class="articletitle">{{ selectedArticle.title }}</h3>
            <h4 class="content">{{ selectedArticle.content }}</h4>
            <a :href="selectedArticle.url" target="_blank"
              ><button class="readon">Read on</button></a
            >

            <div class="extras">
              <div class="extrainfo">
                Source: {{ selectedArticle.source.name }}
              </div>
              <div class="extrainfo">Published At: {{ getPublishedDate }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import newsArticle from "../components/newsArticle.vue";
export default {
  components: { newsArticle },
  data() {
    return {
      newsSearch: "",
      animeNews: [],
      newsSearchNotStarted: true,
      selectedArticle: {},
      page: 1,
      loading: true,
    };
  },
  computed: {
    getPublishedDate() {
      const newdate = new Date(this.selectedArticle.publishedAt);
      return String(newdate).slice(0, -42);
    },
  },
  methods: {
    searchNews() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${
            this.newsSearch
          }&apiKey=461d782f9ca64ec38148e156ce502307&language=en&page=${Number(
            this.page
          )}&pageSize=100`
        )
        .then((res) => {
          this.loading = false;
          console.log(res.data.articles);
          this.animeNews = res.data.articles;
          // this.newsSearchNotStarted = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },

    articleSelected() {
      this.selectedArticle = this.$cookies.get("selectedArticle");
      this.newsSearchNotStarted = false;
      console.log(this.selectedArticle);
    },
  },

  mounted() {
    this.$cookies.remove("selectedArticle");
    var that = this;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=latest+anime&apiKey=461d782f9ca64ec38148e156ce502307&language=en&page=${Number(
          that.page
        )}&pageSize=100`
      )
      .then((res) => {
        that.loading = false;
        that.animeNews = res.data.articles;
        console.log(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.main {
  margin-top: 115px;
  display: flex;
  justify-content: space-around;
}

.inputfield {
  height: 44px;
  width: 330px;
  border-radius: 9px;
  border: 0px;
  box-shadow: 0px 0px 5px #d5d5d5;
}

input {
  margin-top: 10px;
  font-family: Rajdhani;
  text-align: center;
  font-size: 16px;
}

.searchtext {
  font-weight: 500;
  font-size: 20px;
}

.searchsect {
  display: flex;
  align-items: flex-end;
}

.button {
  height: 46px;
  width: 110px;
  background: #252525;
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Rajdhani";
  cursor: pointer;
  margin-left: 21px;
}
.rightsection {
  width: 700px;
}

.leftsection {
  width: 550px;
  overflow: auto;
  height: 650px;
}

.leftsection::-webkit-scrollbar {
  display: none;
}
.newsblock--sect {
  display: flex;
  flex-wrap: wrap;
}

.rightarticle {
  border-radius: 7px;
  box-shadow: 0px 0px 7px #5d5d5d;
  height: 538px;
  background: white;
  padding: 0px 55px;
}

.waitingimg {
  width: 474px;
  padding-left: 70px;
  padding-top: 10px;
}

.articletitle {
  padding-top: 74px;
  font-size: 28px;
}

h4.content {
  font-weight: 400;
  line-height: 30px;
}

.extras {
  display: flex;
  column-gap: 30px;
}

.extrainfo {
  background: black;
  color: white;
  width: auto;
  padding: 13px 14px;
  border-radius: 7px;
  margin-top: 29px;
  font-size: 14px;
}

.readon {
  background: none;
  border: none;
  color: blue;
  font-family: "Rajdhani";
  font-size: 15px;
  cursor: pointer;
}

.readon:hover {
  text-decoration: underline;
}

.nextarticle {
  background: black;
  color: white;
  padding: 9px 17px;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
  font-family: "Rajdhani";
  cursor: pointer;
}
</style>
