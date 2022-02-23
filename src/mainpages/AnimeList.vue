<template>
  <div class="main">
    <section v-if="notSignedIn">
      <div class="overlay">
        <div class="signup">
          <div class="signup-popup">
            <!-- <img src="../assets/cancelicon.png" alt="Cancel icon" class="cancel-icon" @click="cancelPopup"> -->
            <h2 class="signup-title">Sign Up!</h2>
            <hr class="divisor" />
            <h3 class="signup-input-texts" ref="username">Username:</h3>
            <input
              type="text"
              class="signup-input-fields"
              value="Ara Oladipo"
            />
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
            <h3 class="signup-helpers">Already have an account</h3>
          </div>
        </div>
      </div>
      <h3>You need to sign up first!</h3>
    </section>
    <section v-else>
      <h3>You can now add animes to your wishlist by clicking the plus icon on the main page</h3>
      <button @click="signOut">Sign out</button>
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
    };
  },

  methods: {
    checkSignedInStatus() {
      const auth = getAuth();
      let that = this;
      auth.onAuthStateChanged(function (user) {
        if (user) {
          console.log("User is already signed in");
          console.log(user);
          that.notSignedIn = false;
        } else {
          if (firebaseServices.checkStatus() === true) {
            console.log("the user is here, but signed in immediately")
            that.notSignedIn = false;
          } else {
            console.log('not signed in at all')
            that.notSignedIn = true;
          }
        }
      });
    },

    registerUser() {
      console.log("registering user");
      firebaseServices.registerUser(this);
    },

    signOut() {
      firebaseServices.logOut();
    },

    // cancelPopup(){
    //   document.querySelector(".overlay").style.display = "none"
    // }
  },

  mounted() {
    this.checkSignedInStatus();
  },
};
</script>
