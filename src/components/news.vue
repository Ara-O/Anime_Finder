<template>
  <div class="news">
    <div class="news--left"></div>
    <div class="news--right">
      <h5 class="newsdescription">{{ title }}</h5>
      <h5 class="newsdescription--text" v-html="description"></h5>
      <a :href="link" target="_blank"
        ><button class="readmore">Read More</button></a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["description", "title", "image", "link"],
};
</script>

<style scoped src="../styles/component-newsPage.css"></style>
