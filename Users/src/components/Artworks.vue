<template>

  <div>
      <ArtistProfileView
        :artwork="artwork"
      
      />
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
    <div class="card-container" :v-if="this.artworks">
      <b-card
        v-for="(artwork, i) in filteredList"
        :key="i"
        v-bind:img-src="artwork.imageUrl"
        img-top
        class="mb-2"
      >
        <div class="likes-container">
          <button @click.prevent="like(artwork)">
            <i class="fa fa-thumbs-up likes-icon"></i>
          </button>
          <p class="likes-number">{{ artwork.likes }}</p>
        </div>

        <b-card-text class="card-category">Digital Paintings</b-card-text>

        <h3 class="card-title" @click="sharedData(artwork)">
          {{ artwork.nameArtwork }}
        </h3>

        <div class="card-by">
          by
          <p class="card-author">Bensalem Walid</p>
        </div>
        <div></div>
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
      artwork_id: "",
      user_id: "",
    
    };
  },

  methods: {
    like(art) {
      const create = {
        artwork_id: art.id,
        user_id: localStorage.getItem("id"),
      };
      axios.post("http://localhost:3000/api/likes", create).then((res) => {
        console.log("==>", res.data);
      });
    },

    getArtworks() {
      axios
        .get(`http://localhost:3000/api/artworks`)
        .then((res) => {
          res.data.map((art) => {
            axios
              .get(`http://localhost:3000/api/likes/${art.id}`)
              .then((res) => {
                art.likes = res.data.length;
                console.log(art.likes);
                this.artworks.push(art);
              })
              .catch((err) => {
                console.log(err);
              });
          });
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
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css");
* {
  box-sizing: border-box;
  font-family: "Lexend", serif;
}

.artworks-header {
  margin-top: 100px;
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
  transition: 0.5s;
}

.mb-2:hover {
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
}
.card-category {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: grey;
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
  color: #a08018;
  margin-left: 3px;
}
img:hover {
  opacity: 0.8;
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

.likes-container {
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 85px;
  right: 20px;
}
.likes-icon {
  font-size: 25px;
  color: black;
  transition: 0.3s;
}
.likes-icon:hover {
  font-size: 30px;
  color: #a08018;
}

.likes-number {
  font-size: 15px;
  color: #a08018;
}
</style>