<template>
  <nav>
    <ul>
      <router-link to="/search" class="link">Search</router-link>
      <router-link to="/news" class="link">Anime News</router-link>
      <router-link to="/latestReleases" class="link"
        >Latest Releases</router-link
      >
      <router-link to="/watchlist" class="link"
        >My Watchlist</router-link
      >
      <!-- <li><router-link>Anime News</router-link></li> -->
    </ul>
    <div class="phonenav--cont navbarAnimation">
      <div class="links">
        <router-link to="/search" class="link2">Search</router-link>
        <router-link to="/news" class="link2 second">Anime News</router-link>
        <router-link to="/latestReleases" class="link2"
          >Latest Releases</router-link
        >
      </div>
      <img src="../assets/hamburgericon.png" alt="" class="hamburger" />
    </div>
  </nav>
</template>

<style scoped src="../styles/navbarStyles.css"></style>

<script>
import navbarAnimation from "../modules/navbarAnimation";

export default {
  mounted() {
    navbarAnimation(".hamburger", ".phonenav--cont");
  },
};
</script>
