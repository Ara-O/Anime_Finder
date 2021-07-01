<template>
  <h3>oop</h3>
</template>

<script>
export default {
  mounted() {
    // this.$store.state.watchList.forEach((anime) => {
    //   console.log(JSON.parse(JSON.stringify(anime)));
    // });
    console.log(this.$cookies.get("animewatchlist"));
  },
};
</script>
