<template>
  <div class="mainsect">
    <div class="resultcont">
      <div class="resultimg">
        <img src="" alt="" />
      </div>
      <div>
        <h3 class="resultname">{{ animename }}</h3>
        <h5 class="resulttext">
          {{ animedescr }}
        </h5>
        <button class="interested-btn">I'm Interested</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainsect {
  width: auto;
  margin-top: 18px;
}

.resultimg {
  border: none;
  height: 222px;
  width: 210px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 9px #959595;
}

.resultcont {
  display: flex;
  flex-direction: column;
}

.resultname {
  font-weight: 500;
  font-size: 20px;
  margin-top: 31px;
}

.resulttext {
  width: 238px;
  font-weight: 400;
  font-size: 15.4px;
  line-height: 23px;
  margin-top: 0px;
}

.interested-btn {
  height: 46px;
  width: 110px;
  background: #252525;
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Rajdhani";
  cursor: pointer;
}
</style>

<script>
export default {
  props: ["animename", "animedescr", "anime"],
};
</script>
