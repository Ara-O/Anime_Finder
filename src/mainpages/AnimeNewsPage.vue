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
            :synopsis="animeNew.snippet"
            :img="getThumbnail(animeNew.pagemap)"
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
            <h4 class="content">{{ selectedArticle.snippet }}</h4>
            <a :href="selectedArticle.formattedURL" target="_blank"
              ><button class="readon">Read on</button></a
            >

            <div class="extras">
              <div class="extrainfo">
                Source: {{ selectedArticle.displayLink }}
              </div>
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

  methods: {
    getThumbnail(data) {
      console.log(data);
      if (data.cse_image) {
        return data.cse_image[0].src;
      } else {
        return "https://tse3.mm.bing.net/th?id=OIP.Ff4Xm0w1vjsZqI9BBZbKBwHaEK&pid=Api";
      }
    },

    searchNews() {
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyCOHLs1kP6p8tcnhnJX90wFzji0o2NPiWw&cx=b09f9169eef29a298&imgType=photo&num=10&q=${this.newsSearch}&lr=lang_en"`
        )
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.animeNews = res.data.items;
          console.log(res.data.items);
          // this.newsSearchNotStarted = false;
        })
        .catch(() => {
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
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyCOHLs1kP6p8tcnhnJX90wFzji0o2NPiWw&cx=b09f9169eef29a298&imgType=photo&num=10&q=latest%anime%news&lr=lang_en "
`
      )
      .then((res) => {
        that.loading = false;
        that.animeNews = res.data.items;
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped src="../styles/newsPage.css"></style>
