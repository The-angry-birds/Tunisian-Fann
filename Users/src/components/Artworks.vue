<template>
  <div>
    <h1 class="artworks-header">Artworks</h1>
    <div class="search">
      <label class="search-label">Search for an artwork:</label>
      <input
        class="search-input"
        type="text"
        v-model="search"
        placeholder="Search..."
      />
       
    </div>
    <div class="card-container">
      <b-card
        @click="sharedData(artwork)"
        v-for="(artwork, i) in filteredList"
        :key="i"
        v-bind:img-src="artwork.imageUrl"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>

        <h3 class="card-title" @click="sharedData(artwork)">
          {{ artwork.nameArtwork }}
        </h3>
            

        <div class="card-by">
          by
          <p class="card-author">Bensalem Walid</p>
        </div>
        <div>
        </div>
      </b-card>
      <i class="fas fa-heart" @click.prevent="like()"></i>
    </div>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      artworks: [],
      search: "",
      artwork_id:"",
      user_id :""

    };
  },
  
  methods: {
  like(){
    const create = {
        artwork_id: this.artwork_id,
        user_id : this.user_id ,
     
      }
    axios.post("http://localhost:3000/api/likes",create)
    .then((res) =>{console.log("====================>",res)})
    .catch(err =>{console.log(err)})

    },

    getlikes(){
      axios.get(`http://localhost:3000/api/likes/1`)
      .then((res) =>{
        console.log(res)
        })
      .catch(err =>{console.log(err)})

    },

  getArtworks() {
      axios
        .get(`http://localhost:3000/api/artworks`)
        .then((res) => {
          this.artworks = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sharedData(a) {
      this.$router.push({ name: "artworkDetails", params: a });
    },
  },
  computed: {
    filteredList() {
      return this.artworks.filter((artwork) => {
        return artwork.nameArtwork
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    
    this.getArtworks();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Spectral", serif;
}

.artworks-header {
  font-size: 25px;
  text-align: center;
  margin-top: 100px;
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
.search {
  text-align: right;
  margin-right: 10%;
}

.search-label {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
}

.search-input {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  width: 300px;
  border-style: solid;
  border-radius: 5px;
}
</style>