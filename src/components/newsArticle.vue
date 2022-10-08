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

  data() {
    return {
      test: "",
    };
  },

  methods: {
    selectArticle() {
      this.test = JSON.parse(JSON.stringify(this.allnews));
      console.log("seectted article: ", this.test)
      let that = this;
      this.$cookies.remove("selectedArticle");
      this.$cookies.set("selectedArticle", Object.assign({}, that.test));
      this.$emit("selectedArticle");
    },
  },
};
</script>
