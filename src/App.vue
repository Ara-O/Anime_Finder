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
  background: #e8e8e8;
  font-family: Rajdhani;
}
</style>
