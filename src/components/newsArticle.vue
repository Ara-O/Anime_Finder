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

<style scoped>
.button-2 {
  height: 46px;
  width: 110px;
  background: #252525;
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Rajdhani";
  cursor: pointer;
}

.button:hover {
  background: black;
}

.newsblock--sect {
  display: flex;
  flex-wrap: wrap;
}

.newsblock {
  margin-right: 21px;
}

.newsblock--h5 {
  width: 254px;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  margin-top: 0px;
}

.newsblock--img {
  background: white;
  height: 133px;
  width: 237px;
  margin-top: 41px;
  object-fit: cover;
  border-radius: 11px;
  box-shadow: 0px 0px 7px #5d5d4d;
}

.newsblock--name {
  font-weight: 500;
  font-size: 20px;
  width: 243px;
}
</style>

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
