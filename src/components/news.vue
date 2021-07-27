<template>
  <div class="news">
    <div class="news--left">
      <img :src="getThumbnail" alt="" />
    </div>
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
  computed: {
    getThumbnail() {
      if (this.image.cse_image) {
        return this.image.cse_image[0].src;
      } else {
        return "https://tse3.mm.bing.net/th?id=OIP.Ff4Xm0w1vjsZqI9BBZbKBwHaEK&pid=Api";
      }
    },
  },
};
</script>

<style scoped src="../styles/component-newsPage.css"></style>
<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
