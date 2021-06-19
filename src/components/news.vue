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

<style scoped>
.news {
  display: flex;
  justify-content: center;
  justify-content: left;
  padding-left: 94px;
  margin-bottom: 40px;
  column-gap: 41px;
}

.news--left {
  width: 162px;
  border-radius: 7px;
  background: white;
  border: none;
  box-shadow: 0px 0px 7px #5d5d5d;
}

.newsimg {
  height: 177px;
  box-shadow: 0px 0px 7px #5d5d5d;
  border-radius: 7px;
}

.newsdescription--text {
  width: 445px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  text-align: left;
}

.readmore {
  height: 43px;
  width: 104px;
  border: none;
  background: #252525;
  color: white;
  border-radius: 7px;
  font-family: "Rajdhani";
}

.readmore:hover {
  background: black;
}
.newssect {
  display: flex;
  flex-wrap: wrap;
  width: 865px;
  justify-content: center;
  -moz-column-gap: 41px;
  column-gap: 41px;
  margin-left: 20px;
  overflow: auto;
}

.newsdescription {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: -1px;
  width: 500px;
  line-height: 23px;
}
.news--right {
  text-align: left;
  margin-top: -19px;
}
button {
  cursor: pointer;
}
</style>
