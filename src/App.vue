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
  background: #18191a;
  font-family: Rajdhani;
  color: white;
  letter-spacing: 0.3px;
}
</style>
