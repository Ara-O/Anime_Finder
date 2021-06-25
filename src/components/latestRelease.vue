<template>
  <div>
    <div>
      <img :src="img" alt="" class="imgcontainer" />
      <br />
      <h5 class="releasename">{{ name }}</h5>
      <h6 class="releasedate">Released {{ releasedate }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "releasedate"],
};
</script>

<style scoped src="../styles/component-latestRelease.css"></style>
