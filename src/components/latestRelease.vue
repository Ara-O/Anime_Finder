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

<style scoped>
.imgcontainer {
  height: 270px;
  width: auto;
  border-radius: 7px;
  box-shadow: 0px 0px 7px #5d5d5d;
}

.releasename {
  font-weight: 500;
  margin-bottom: -8px;
  font-size: 21px;
  width: 205px;
  margin-top: 16px;
}

.releasedate {
  font-weight: 400;
  margin-top: 17px;
  font-size: 16px;
}
</style>
