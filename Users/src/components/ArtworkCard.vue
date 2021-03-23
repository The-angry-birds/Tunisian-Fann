<template>
  <div>
    <h1 class="artworks-header">or buy one of our artworks</h1>
    <div class="card-container">
      <router-link to="/artwork-details" style="text-decoration: none; color: inherit;">
      <b-card
        v-for="(artwork, i) in artworks"
        :key="i"
        v-bind:img-src="artwork.imageUrl"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>

     
        <h3 class="card-title" @click="sharedData(artwork)">{{ artwork.nameArtwork }}</h3>
    

        <div class="card-by">
          by
          <p class="card-author">Bensalem Walid</p>
        </div>
      </b-card>
      </router-link>
    </div>
          <button id="loadMore" class="dropdown-toggle">LOAD MORE</button>

  </div>
</template>

<script>
import axios from "axios";
export default {
    
  data() {
    return {
      artworks: [],
    };
  },
  methods: {
    getArtworks() {
      axios
        .get(`http://localhost:3000/api/artworks`)
        .then((res) => {
          this.artworks = res.data;
          console.log("=============", this.artworks);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sharedData(a){
      this.$router.push({name:"artworkDetails" , params: a})
  
    },
    
  },
  mounted() {
    this.getArtworks();
    this.setCurrentId()
  },
};
</script>

<style scoped>
.artworks-header {
  font-size: 25px;
  text-align: center;
  margin-top: 25px;
  color: #ad7d52;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}
.mb-2 {
  margin: 22px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  width: 300px;
  height: 385px;
}
.card-category {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}
.card-title {
  margin-top: 5px;
  margin-bottom: 10px;
}
.card-by {
  font-size: 12px;
  display: flex;
  flex-wrap: nowrap;
}
.card-author {
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
  margin-left: 3px;
}
img:hover {
  opacity: 0.5;
}
img {
  border-radius: 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
#loadMore {
  font-size: 15px;
  text-align: center;
  margin-top: 25px;
  color: #ad7d52;
  margin-left: 46%;
}
#loadMore:hover {
  color: #000000;
}
</style>