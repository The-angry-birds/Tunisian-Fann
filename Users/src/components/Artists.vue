<template>
  <div class="container mt-40">
    <div class="search">
      <!-- <label class="search-label">Search for an artist:</label> -->
      <input
        class="search-input"
        type="text"
        v-model="search"
        placeholder="Search for an artist..."
      />
    </div>

    <div class="row mt-30">
      <div
        @click="artistProfile(artist)"
        class="col-md-3 col-sm-6 artist-card"
        v-for="(artist, i) in filteredList"
        :key="i"
      >
        <div class="box15">
          <img
            v-if="!artist.imageUrl"
            src="https://www.mavinzent.com/assets/avatar_placeholder.svg"
          />
          <img v-else v-bind:src="artist.imageUrl" alt="" />
          <div class="box-content">
            <h3 class="title">{{ artist.description }}</h3>
          </div>
        </div>
        <div>
          <h2 class="artist-name">
            {{ artist.firstName }} {{ artist.lastName }}
          </h2>
          <h6>Location</h6>
          <p>Artworks: 13</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <button class="profile-btn" @click="artistProfile(artist)">
          PROFILE
        </button> -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      artists: [],
      search: "",
      artist: {},
    };
  },
  methods: {
    getArtists() {
      axios
        .get(`http://localhost:3000/api/artists`)
        .then((res) => {
          this.artists = res.data;
          console.log("==========>", this.artists.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    artistProfile(a) {
      this.$router.push({ name: "ArtistProfileView", params: a });
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
  font-family: "Lexend", sans-serif;
}

.artist-card {
  text-align: center;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 4%;
  margin-right: 4%;
  padding: 0px;
  border-radius: 5px;
  cursor: pointer;
}

.artist-name {
  font-weight: 600;
  color: rgb(121, 121, 121);
}
.mt-40 {
  margin-top: 120px;
  padding-bottom: 50px;
}
.box15 {
  position: relative;
}
.box15:hover {
  border-radius: 5px;
}
.box15 img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 10px;
}
.box15 .box-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease 0s;
}
.box15:hover .box-content {
  background-color: rgba(255, 255, 255, 0.8);
}
.box15 .box-content:after,
.box15 .box-content:before {
  content: "";
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.6s ease 0.3s;
}
.box15 .box-content:before {
  border-left: 1px solid #040404;
  border-top: 1px solid #040404;
  top: 19px;
  left: 19px;
}
.box15 .box-content:after {
  border-bottom: 1px solid #040404;
  border-right: 1px solid #040404;
  bottom: 19px;
  right: 19px;
}
.box15:hover .box-content:after,
.box15:hover .box-content:before {
  opacity: 1;
  transform: scale(1);
}
.box15 .title {
  text-align: center;
  font-size: 16px;
  color: #000;
  /* margin: 25px; */
  margin-right: 25px;
  margin-left: 25px;
  position: relative;
  top: 0;
  opacity: 0;
  transition: all 1s ease 10ms;
}
.box15:hover .title {
  top: 10%;
  opacity: 1;
  transition: all 0.5s cubic-bezier(1, -0.53, 0.405, 1.425) 10ms;
}
.box15 .title:after {
  content: "";
  width: 0;
  height: 1px;
  background: #040404;
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: all 1s ease 0s;
}
.box15:hover .title:after {
  width: 80%;
  transition: all 1s ease 0.8s;
}
@media only screen and (max-width: 990px) {
  .box15 {
    margin-bottom: 30px;
  }
}
.search {
  text-align: right;
  margin-right: 10%;
}

.search-input {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  width: 300px;
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
}
.search-input:focus {
  outline: none;
}
</style>
