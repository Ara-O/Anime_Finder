<template>
  <div class="mainsect">
    <div class="resultcont">
      <div class="resultimg">
        <img :src="animeimg" alt="Anime Image" />
      </div>
      <div>
        <h3 class="resultname">{{ animename }}</h3>
        <h5 class="resulttext">
          {{ animedescr }}
        </h5>
        <router-link to="/selectedanime">
          <button class="interested-btn" @click="showSelectedAnime">
            I'm Interested
          </button>
        </router-link>
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
  height: 317px;
  width: 210px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 9px #959595;
}

.resultcont {
  display: flex;
  flex-direction: column;
  width: 288px;
}

.resultname {
  font-weight: 500;
  font-size: 20px;
  margin-top: 31px;
  width: 221px;
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

.interested-btn:hover {
  background: black;
}
img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: 4px;
}
</style>

<script>
export default {
  props: ["animename", "animedescr", "animeimg", "anime"],
  data() {
    return {
      dataofanime: "",
    };
  },
  methods: {
    showSelectedAnime() {
      this.dataofanime = this.anime;
      const target_copy = Object.assign({}, this.dataofanime);
      this.$store.state.animeSearch = target_copy;
      this.$cookies.set("selectedAnime", this.$store.state.animeSearch);
    },
  },
};
</script>
