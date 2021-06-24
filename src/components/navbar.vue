<template>
  <nav>
    <ul>
      <router-link to="/search">Search</router-link>
      <router-link to="/news">Anime News</router-link>
      <router-link to="/latestReleases">Latest Releases</router-link>
      <!-- <li><router-link>Anime News</router-link></li> -->
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style-type: none;
  position: absolute;
  display: inline;
  top: 24.5px;
  right: 111px;
  font-size: 16.2px;
}

a {
  display: inline;
  margin-left: 155px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  color: black;
  text-decoration: none;
}
</style>
