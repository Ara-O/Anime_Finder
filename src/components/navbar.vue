<template>
  <nav>
    <ul>
      <router-link to="/search" class="link">Search</router-link>
      <router-link to="/news" class="link second">Anime News</router-link>
      <router-link to="/animewatchlist" class="link">My Anime List</router-link>
      <router-link to="/" @click="signOut" class="link"  v-if="!notSignedIn">Sign out</router-link>

      <!-- <router-link to="/watchlist" class="link">My Watchlist</router-link> -->
    </ul>
    <!-- PHONE NAVBAR -->
    <div class="phonenav--cont navbarAnimation">
      <div class="links">
        <router-link to="/search" class="link2">Search</router-link>
        <!-- <router-link to="/news" class="link2">Anime News</router-link> -->
        <router-link to="/animewatchlist" class="link2"
          >My Anime List</router-link
        >
        <router-link to="/" @click="signOut" class="link2"  v-if="!notSignedIn">Sign out</router-link>
        <!-- <router-link to="/watchlist" class="link2">Watchlist</router-link> -->
      </div>
      <img src="../assets/hamburgericon.png" alt="" class="hamburger" />
    </div>
  </nav>
</template>

<style scoped src="../styles/navbarStyles.css"></style>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import navbarAnimation from "../modules/navbarAnimation";
import * as firebaseServices from "../services/firebaseService";
export default {
  data() {
    return {
      notSignedIn: false,
    };
  },

  methods: {
    checkStatus(){
      const auth = getAuth();
      let that = this;
      auth.onAuthStateChanged(function (user) {
        if (user) {
          that.notSignedIn = false;
          console.log('theres a user')
        } else {
          if (firebaseServices.checkStatus() === true) {
            that.notSignedIn = false;
            console.log('theres a user')
          } else {
            that.notSignedIn = true;
            console.log('theres a not user')
            console.log( that.notSignedIn )
          }
        }
      });
  },
   signOut(){
      firebaseServices.logOut();
      this.checkStatus()
    }
  },

  mounted() {  
    this.checkStatus();
    navbarAnimation(".hamburger", ".phonenav--cont");
  },
}

</script>
