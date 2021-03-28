<template>
  <div>
    <div class="artists-header"></div>
    <div class="search">
      <label class="search-label">Search for an artist:</label>
      <input
        class="search-input"
        type="text"
        v-model="search"
        placeholder="Search..."
      />
    </div>
    <div class="cards-container">
      <div class="card-container" v-for="(artist, i) in filteredList" :key="i">
        <img class="round" v-bind:src="artist.imageUrl" />
        <h3>{{ artist.firstName }} {{ artist.lastName }}</h3>

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
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");
* {
  box-sizing: border-box;
  font-family: "Lexend", sans-serif;
}

.artists-header {
  margin-top: 100px;
}

.cards-container {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
img {
  width: 50%;
}
h3 {
  margin: 10px 0;
}

p {
  font-size: 14px;
  line-height: 21px;
}
.card-container {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: black;
  padding-top: 30px;
  padding-bottom: 30px;
  /* position: relative; */
  text-align: center;
  margin: 20px;
  width: 300px;
  height: 385px;
  cursor: pointer;
}

.card-container:hover {
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
}
.card-container .round {
  border: 1px solid black;
  width: 50%;
  height: 48%;
  border-radius: 50%;
  padding: 4px;
  object-fit: cover;
  transition: 0.5s;
}
.card-container .round:hover {
  border: 1px solid black;
  width: 55%;
  height: 53%;
  border-radius: 50%;
  padding: 4px;
  object-fit: cover;
}
.primary {
  background-color: black;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  padding: 10px 25px;
  background-color: transparent;
  color: black;
  margin-left: 10px;
  transition: 0.5s;
}

.primary:hover {
  color: white;
  background-color: black;
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