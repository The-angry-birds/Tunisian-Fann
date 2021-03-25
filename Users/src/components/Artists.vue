<template>
  <div>
    <h1 class="artworks-header">or buy one of our artworks</h1>

   
     <input type="text" v-model="search" placeholder="Search title.."/>
        <label>Search title:</label>
    <div class="card-container">
      <b-card
        v-for="(artist, i) in filteredList"
        :key="i"
        v-bind:img-src="artist.imageUrl"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">{{ artist.category }}</b-card-text>

     
        <h3 class="card-title" >{{ artist.firstName }}</h3>
    

        <div class="card-by">
          by
          <p class="card-author">{{ artist.lastName }}</p>
        </div>
      </b-card>
      
    </div>
          <button id="loadMore" class="dropdown-toggle">LOAD MORE</button>

  </div>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      artists: [],
       search: "",
   
    };
  },
  methods: {
    getArtists() {
      axios
        .get(`http://localhost:3000/api/artists`)
        .then((res) => {
          this.artists = res.data;
          console.log("=============", this.artists);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
   computed: {
    filteredList() {
      return this.artists.filter(artist => {
        return artist.firstName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
   },
    
    

   

  mounted() {
    this.getArtists();
      this.oneArt = this.$route.params;
    
  
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