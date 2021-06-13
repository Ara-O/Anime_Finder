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
