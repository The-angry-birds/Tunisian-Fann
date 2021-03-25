<template>
  <div>
    <div class="artworks-header"></div>
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
      
        v-for="(artwork, i) in filteredList"
        :key="i"
        v-bind:img-src="artwork.imageUrl"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3>{{ artwork.likes }} </h3>

        <h3 class="card-title" @click="sharedData(artwork)">
          {{ artwork.nameArtwork }}          
        </h3>
        <button @click.prevent="like(artwork)">Li</button>   
        <div class="card-by">
          by
          <p class="card-author">Bensalem Walid</p>
        </div>
        <div>
        </div>
      </b-card>
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
  like(art){
    const create = {
        artwork_id: art.id,
        user_id : 2,
      }
    axios.post("http://localhost:3000/api/likes",create)
    .then((res) =>
    {
      console.log("==>",res.data)
      })
    },

    getlikes(id){
      axios.get(`http://localhost:3000/api/likes/${id}`)
      .then((res) =>{
        console.log(res.data.length)
        })
      .catch(err =>{console.log(err)})
    },

  getArtworks() {
      axios
        .get(`http://localhost:3000/api/artworks`)
        .then((res) => {
          this.artworks = res.data
       this.artworks.map((art)=>{
        axios.get(`http://localhost:3000/api/likes/${art.id}`)
      .then((res) =>{
        console.log(res.data.length)
        art.likes = res.data.length
        })
      .catch(err =>{console.log(err)})
        })
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
    this.getlikes()
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
  margin-top: 120px;
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
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
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
  border-radius: 5px 5px 0px 0px;
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