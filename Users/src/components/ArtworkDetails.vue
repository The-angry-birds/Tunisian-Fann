<template>
  <div>
    <NavBar></NavBar>
    <ArtworkCard />
    <div class="artwork-container">
      <div class="left-container">
        <img
          class="artwork-image"
          src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/oh-my-god-artwork-by-bensalem-walid.png"
        />
      </div>
      <div class="right-container">
        <div class="artwork-header">
          <h1 class="artwork-name">{{ oneArt.nameArtwork }}</h1>
          <p class="artwork-category">{{ oneArt.categories }}</p>
        </div>
        <hr />
        <p class="artwork-description">
          {{ oneArt.description }}
        </p>
        <hr />
        <div class="price-container">
          <h4 class="price-header">Price:</h4>
          <h1 class="price">{{ oneArt.price }}</h1>
        </div>
        <hr />
        <button class="buy-btn">BUY NOW</button>
        <hr />
        <div class="artwork-by">
          by
          <p class="artwork-artist">Bensalem Walid</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  data() {
    return {
      oneArt: {},
    };
  },
  mounted() {
    this.oneArt = this.$route.params;
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}
.artwork-container {
  padding-top: 70px;
  padding-bottom: 20px;
  padding-right: 10%;
  padding-left: 12%;
  width: 100vw;
  height: 100vh;
}
.left-container {
  width: 60%;
  height: 100%;
  float: left;
}
.artwork-image {
  height: 100%;
  width: 90%;
  object-fit: cover;
}
.artwork-header {
  display: flex;
  flex-wrap: nowrap;
}
.artwork-name {
  font-weight: bolder;
  color: #ad7d52;
}
.artwork-category {
  padding-top: 18px;
  padding-left: 3px;
  color: grey;
  text-transform: uppercase;
}
.right-container {
  width: 40%;
  height: 100%;
  float: right;
}
.time-container {
  display: flex;
  flex-wrap: nowrap;
}
.price {
  color: #ad7d52;
  font-weight: 800;
}
.buy-btn {
  color: #ffffff;
  width: 100%;
  height: 50px;
  background-color: rgb(192, 192, 192);
  font-weight: bold;
  font-size: 20px;
  border-radius: 4px;
}
.buy-btn:hover {
  color: black;
  font-weight: bold;
}
.artwork-by {
  display: flex;
  flex-wrap: nowrap;
}
.artwork-artist {
  margin-left: 3px;
  font-weight: 600;
  color: #ad7d52;
}
</style>