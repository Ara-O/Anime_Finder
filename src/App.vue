<template>
  <div>
    <navbar> </navbar>
    <!-- navbar goes here -->
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar";
export default {
  components: {
    navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
body {
  background: linear-gradient(45deg, #0e0f12, #21232c);
  font-family: Rajdhani;
  color: white;
}
</style>
