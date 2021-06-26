<template>
  <div class="mainsect">
    <img src="../assets/404img.png" alt="Error image" class="img404" />
    <h3 class="notfoundtext">Anime not found</h3>
  </div>
</template>

<style scoped>
.img404 {
  width: 380px;
  position: relative;
  bottom: -79px;
}

.notfoundtext {
  margin-left: 186px;
  margin-top: -30px;
  font-size: 22px;
}

@media (max-width: 500px) {
  .img404 {
    width: 305px;
  }

  .mainsect {
    height: 500px;
  }
}
</style>
