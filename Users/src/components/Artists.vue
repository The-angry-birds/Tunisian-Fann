<template>
  <div>
    <h1 class="artworks-header">Artists</h1>
    <div class="cards-container" v-for="(artist, i) in filteredList" :key="i">
      <div class="card-container">
        <img class="round" v-bind:src="artist.imageUrl" />
        <h3>{{ artist.firstName }} {{ artist.lastName }}</h3>
        <h6>Nabeul</h6>
        <p>{{ artist.description }}</p>
        <div class="buttons">
          <button class="primary">Contact</button>
          <button class="primary">Profile</button>
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
      return this.artists.filter((artist) => {
        return artist.firstName
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    this.getArtists();
    this.oneArt = this.$route.params;
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
.cards-container {
	
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0;
}

img {
	width:50%;
}

h3 {
	margin: 10px 0;
}

h6 {
	margin: 5px 0;
	text-transform: uppercase;
}

p {
	font-size: 14px;
	line-height: 21px;
}

.card-container {
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: black;
	padding-top: 30px;
	padding-bottom: 30px;
	position: relative;
	width: 350px;
	max-width: 100%;
	text-align: center;
  margin: 10px;
}


.card-container .round {
	border: 1px solid black;
	border-radius: 50%;
	padding: 7px;
}

button.primary {
	background-color: black;
	border: 1px solid black;
	border-radius: 3px;
	color: black;
	font-family: Montserrat, sans-serif;
	font-weight: 500;
	padding: 10px 25px;
	background-color: transparent;
	color: black;
}
</style>