<template>
  <div>
    <div class="artwork-container">
      <div class="left-container">
        <img class="artwork-image" v-bind:src="oneArt.imageUrl" />
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
          <h1 class="price">{{ oneArt.price }} DT</h1>
        </div>
        <hr />
        <button class="buy-btn" @click="cardInformation">BUY NOW</button>
        <hr />
        <div class="artwork-by">
          by
          <p class="artwork-artist">{{artist.lastName}} {{artist.firstName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      artwork_id: null,
      oneArt: {},
        artist:{}
    };
  },


  methods: {
    getArtwork() {
      this.artwork_id = this.$route.params.id;

      axios
        .get(`http://localhost:3000/api/artworks/${this.artwork_id}`)
        .then(({ data }) => {
          this.oneArt = data;
          console.log("this.is artwork", data);
        }).then(() => {
         axios.get(`http://localhost:3000/api/artists/${this.oneArt.artist_id}`) .then(({ data }) => {
       
        
          this.artist=data
        })
        })
    },
    getuser() {
      const token = localStorage.getItem("token");

      axios
        .get("http://localhost:3000/api/users/getUserByToken", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          console.log(" this is user idDDDDDDDDDDDDDDDDDDDDDDDD", data.user.id);
          this.user_id = data.user.id;
        });
    },

    cardInformation() {
      this.$router.push("/informationCard");
    },
  },
  mounted() {
    this.getArtwork();
    console.log("this.oneArt", this.artwork_id);
    this.getuser();
  },
};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}
.artwork-container {
  padding-top: 120px;
  padding-bottom: 20px;
  padding-right: 10%;
  padding-left: 12%;
  width: 100vw;
  height: 120vh;
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
  border-radius: 5px;
}
.artwork-header {
  display: flex;
  flex-wrap: nowrap;
}
.artwork-name {
  font-weight: bolder;
  color: #a08018;
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
  color: #a08018;
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
  color: #a08018;
}
</style>
