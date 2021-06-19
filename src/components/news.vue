<template>
  <div class="news">
    <div class="news--left">
      <img :src="image" alt="" class="newsimg" />
      <h5 class="newsdescription">{{ title }}</h5>
    </div>
    <div class="news--right">
      <h5 class="newsdescription--text">
        {{ description }}
      </h5>
      <button class="readmore">Read More</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["description", "title", "image"],
};
</script>

<style scoped>
.news {
  display: flex;
  justify-content: center;

  margin-bottom: 40px;
}

.news--left {
  width: 162px;
}

.newsimg {
  height: 177px;
  box-shadow: 0px 0px 7px #5d5d5d;
  border-radius: 7px;
}

.newsdescription--text {
  width: 208px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  text-align: left;
}

.readmore {
  height: 43px;
  width: 104px;
  border: none;
  background: black;
  color: white;
  border-radius: 7px;
  font-family: "Rajdhani";
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
  margin-top: 9px;
}

.news--right {
  text-align: left;
  margin-top: -19px;
}
</style>
