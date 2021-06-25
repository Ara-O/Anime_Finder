<template>
  <div class="newsblock">
    <img class="newsblock--img" :src="img" />
    <h3 class="newsblock--name">{{ title }}</h3>
    <h5 class="newsblock--h5">
      {{ synopsis }}
    </h5>
    <button class="button-2" @click="selectArticle">I'm interested</button>
  </div>
</template>

<style scoped src="../styles/component-newsArticle.css"></style>

<script>
export default {
  props: ["title", "img", "synopsis", "allnews"],
  emits: ["selectedArticle"],

  methods: {
    selectArticle() {
      this.$cookies.set("selectedArticle", this.allnews);
      this.$emit("selectedArticle");
    },
  },
};
</script>
