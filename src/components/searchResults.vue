<template>
  <div class="mainsect">
    <div class="resultcont">
      <div class="resultimg">
        <img :src="animeimg" alt="Anime Image" />
      </div>
      <div class="bottomresult">
        <h3 class="resultname">{{ animename }}</h3>
        <h5 class="resulttext" :title="animedescr">
          {{ animedescr?.substring(0, 200) }}...
        </h5>
        <div class="routerlinks">
          <router-link to="/selectedanime">
            <button class="interested-btn" @click="showSelectedAnime">
              I'm Interested
            </button>
          </router-link>

          <button class="outsidelink">
            <a :href="anime.url" target="_blank"> Learn More </a>
          </button>

          <button
            class="interested-btn__2"
            @click="addtowaitlist"
            v-if="userIsSignedIn"
          >
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
import * as firebaseService from "../services/firebaseService";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  props: ["animename", "animedescr", "animeimg", "anime"],
  emits: ["addtowaitlist"],
  data() {
    return {
      dataofanime: {},
      copyofanime: {},
      notalreadyadded: true,
      userIsSignedIn: true,
    };
  },

  methods: {
    showSelectedAnime() {
      this.dataofanime = this.anime;
      console.log("anime ", this.anime)
      const target_copy = Object.assign({}, this.dataofanime);
      this.$store.state.animeSearch = target_copy;
      this.$cookies.set("selectedAnime", this.$store.state.animeSearch);
    },

    addtowaitlist() {
      this.notalreadyadded = false;
      this.$emit("addtowaitlist", this.anime);
    },
  },

  mounted(){
    let that = this;
    const auth = getAuth();
    auth.onAuthStateChanged(function (user) {
        if (user) {
            that.userIsSignedIn = true;
        } else {
            that.userIsSignedIn  = false;
        }
    });
   }
};
</script>
