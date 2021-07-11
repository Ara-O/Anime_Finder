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

<style scoped src="../styles/newsPage.css"></style>
