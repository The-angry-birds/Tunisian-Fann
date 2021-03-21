<template>
  <div>
    <NavBar></NavBar>
    <div class="auction-container">
      <div class="left-container">
        <div class="auction-header">
          <h1 class="auction-name">Oh My God</h1>
          <p class="auction-category">Digital Paintings</p>
        </div>
        <div class="auction-by">
          by
          <p class="auction-artist">Bensalem Walid</p>
        </div>
        <img
          class="auction-image"
          src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/oh-my-god-artwork-by-bensalem-walid.png"
        />
      </div>
      <div class="right-container">
        <h2>Time left:</h2>
        <p>01 Days : 11 Hrs : 59 Min : 42 Sec</p>
        <h2>Current winning price:</h2>
        <p>120.000 Tunisian Dinars</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}

.auction-container {
  padding-top: 70px;
  padding-bottom: 20px;
  padding-right: 10%;
  padding-left: 12%;
  width: 100vw;
  height: 100vh;
}

.left-container {
  width: 50%;
  height: 100%;
  float: left;
}

.auction-image {
  height: 350px;
  width: 90%;
  object-fit: cover;
}

.auction-header {
  display: flex;
  flex-wrap: nowrap;
}

.auction-category {
  padding-top: 18px;
  padding-left: 3px;
  color: #868686;
  text-transform: uppercase;
}

.auction-by {
  font-size: 15px;
  display: flex;
  flex-wrap: nowrap;
}

.auction-artist {
  margin-left: 2px;
  font-weight: 600;
  color: #ad7d52;
}

.right-container {
  width: 50%;
  height: 100%;
  float: right;
}
</style>

