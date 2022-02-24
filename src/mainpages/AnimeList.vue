<template>
  <div class="main">
    <section v-if="notSignedIn">
      <div class="overlay">
        <div class="signup">
          <div class="signup-popup" v-if="noAccount">
            <h2 class="signup-title">Sign Up!</h2>
            <h3 class="signup-input-texts" ref="useremail">Email:</h3>
            <input
              type="text"
              class="signup-input-fields"
              ref="email"
              value="Oladipoara@gmail.com"
            />
            <h3 class="signup-input-texts" ref="userpassword">Password:</h3>
            <input
              class="signup-input-fields"
              type="password"
              ref="password"
              value="cbrehhehe"
            />
            <button @click="registerUser" class="signup-btn">Sign Up</button>
            <h3 class="signup-helpers" @click="this.$router.go(-1)">
              Go back to previous page
            </h3>
            <h3 class="signup-helpers" @click="this.noAccount = false">
              Already have an account
            </h3>
          </div>
          <!-- !SIGN IN -->
          <div class="signin-popup" v-else>
            <!-- <img src="../assets/cancelicon.png" alt="Cancel icon" class="cancel-icon" @click="cancelPopup"> -->
            <h2 class="signup-title">Sign In!</h2>
            <h3 class="signup-input-texts" ref="useremail">Email:</h3>
            <input
              type="text"
              class="signup-input-fields"
              ref="email"
              value="Oladipoara@gmail.com"
            />
            <h3 class="signup-input-texts" ref="userpassword">Password:</h3>
            <input
              class="signup-input-fields"
              type="password"
              ref="password"
              value="cbrehhehe"
            />
            <button @click="logInUser" class="signup-btn">Sign In</button>
            <h3 class="signup-helpers" @click="this.$router.go(-1)">
              Go back to previous page
            </h3>
            <h3 class="signup-helpers" @click="this.noAccount = true">
              I don't have an account
            </h3>
          </div>
        </div>
      </div>
      <h3>You need to sign up first!</h3>
    </section>
    <!-- USER IS LOGGED IN -->
    <section v-else>
      <h3 class="animelist-instruction">
        You can now add animes to your wishlist by clicking the plus icon on the
        main page
      </h3>
      <button @click="signOut" class="sign-out">Sign out</button>
      <div class="anime-lists-full">
        <div
          v-for="animeList in animeLists"
          :key="animeList.id"
          class="anime-list"
        >
          <img
            :src="animeList.image_url"
            alt="image url"
            class="anime-list-img"
          />
          <h3 class="anime-list-title">{{ animeList.title }}</h3>
          <button @click="removeAnimeFromWatchlist(animeList)" class="remove-btn">Remove</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("../styles/animeListPage.css");
</style>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as firebaseServices from "../services/firebaseService";
export default {
  data() {
    return {
      notSignedIn: true,
      animeLists: {},
      userIsSigningIn: false,
      noAccount: true,
    };
  },
 

  methods: {
    //Check whether user is signe din and update status
    checkSignedInStatus() {
      const auth = getAuth();
      let that = this;
      auth.onAuthStateChanged(function (user) {
        if (user) {
          that.notSignedIn = false;
          that.getAnimeList();
        } else {
          if (firebaseServices.checkStatus() === true) {
            that.notSignedIn = false;
          } else {
            that.notSignedIn = true;
          }
        }
      });
    },

    registerUser() {
      firebaseServices.registerUser(this);
    },

    logInUser() {
      firebaseServices.signInUser(this)
    },

    signOut() {
      firebaseServices.logOut();
      this.checkSignedInStatus();
    },

    getAnimeList() {
      firebaseServices.getUserAnimeList(this);
    },

    removeAnimeFromWatchlist(animeList){
      firebaseServices.removeAnime(animeList)
    }
  },

  mounted() {
    this.checkSignedInStatus();
  },
};
</script>
