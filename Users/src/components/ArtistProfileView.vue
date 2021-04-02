<template>
  <div>
    <div class="row py-8 px-8">
      <div class="col-md-20 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  :src="artist.imageUrl"
                  alt="..."
                  class="rounded mb-2 img-thumbnail"
                />
              </div>
              <div class="media-body mb-5 text-black">
                <h4 class="mt-0 mb-0">
                  {{ artist.firstName }} {{ artist.lastName }}
                </h4>
              </div>
            </div>
          </div>
          <div
            class="p-4 d-flex justify-content-end text-center"
            id="heading"
          ></div>
          <div class="px-3 py-4">
            <h5 class="mb-4">About</h5>
            <div class="p-4 rounded shadow-sm" id="info-card">
              <p class="font-italic mb-0">{{ artist.description }}</p>
            </div>
          </div>

          <!-- //ARTWORKS SECTION -->
          <div class="px-3 py-4">
            <h5 class="mb-4">Artworks</h5>
            <div class="p-4 rounded shadow-sm" id="artworks">
              <div class="card-container">
                <b-card
                  v-for="(e, i) in artworks"
                  :key="i"
                  v-bind:img-src="e.imageUrl"
                  img-top
                  class="mb-2"
                >
                  <div class="likes-container">
                    <button @click.prevent="like(artwork)">
                      <i class="fa fa-thumbs-up likes-icon"></i>
                    </button>
                    <p class="likes-number">{{ e.likes }}</p>
                  </div>

                  <b-card-text class="card-category"
                    >Digital Paintings</b-card-text
                  >

                  <h3 class="card-title">
                    {{ e.nameArtwork }}
                  </h3>

                  <div class="card-by">
                    by
                    <p class="card-author">{{ artist.firstName }} {{ artist.lastName }}</p>
                  </div>
                  <div></div>
                </b-card>
              </div>
            </div>
          </div>
          <div class="px-3 py-4">
            <h5 class="mb-4">Auctions</h5>
            <div class="p-4 rounded shadow-sm" id="auctions">

              <ArtistAuction />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArtistAuction from "./ArtistAuction"

export default {
  data() {
    return {
      artist: {},
      artworks: {},
      auction: {},
    };
  },
  component:{
    ArtistAuction

  },
  methods: {
    getArtwork() {
      axios
        .get(`http://localhost:3000/api/artworks/artist/${this.artist.id}`)
        .then((res) => {
          console.log("=======", res.data.nameArtwork);
          this.artworks = res.data;
        });
    },
   
        
 
  },
  mounted() {
    this.artist = this.$route.params;
    this.getArtwork();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");
* {
  font-family: "Lexend", sans-serif;
}
.profile-head {
  padding-top: 50px;
  transform: translateY(5rem);
}
.img-thumbnail {
  max-width: 250px;
  max-height: 250px;
  min-width: 250px;
  min-height: 250px;
  object-fit: cover;
}
.cover {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
  background-size: cover;
  background-repeat: no-repeat;
}
#heading {
  padding: 30px !important;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
#info-card {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
#submitbtn {
  width: 120px;
  margin: auto;
  margin-top: 20px;
}
#artworks {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
.grid {
  position: relative;
  margin: 0 auto;
  padding: 1em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
}
/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 480px;
  max-width: 480px;
  max-height: 280px;
  width: 48%;
  background: #000000;
  text-align: center;
  cursor: pointer;
}
.grid figure #card-image {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}
.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}
.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}
.grid figure #card-title {
  word-spacing: -0.15em;
  font-weight: 300;
}
.grid figure #card-title {
  font-weight: 800;
}
.grid figure #card-title,
.grid figure #card-desc {
  margin: 0;
}
.grid figure #card-desc {
  letter-spacing: 1px;
  font-size: 68.5%;
}
figure.effect-ravi #card-image {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}
figure.effect-ravi figcaption {
  text-align: left;
}
figure.effect-ravi figcaption > div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  height: 50%;
}
figure.effect-ravi #card-title,
figure.effect-ravi #card-desc {
  -webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
}
figure.effect-ravi #card-title {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}
figure.effect-ravi #card-desc {
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}
figure.effect-ravi:hover #card-image,
figure.effect-ravi:hover #card-desc {
  opacity: 1;
}
figure.effect-ravi:hover #card-image,
figure.effect-ravi:hover #card-title,
figure.effect-ravi:hover #card-desc {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
figure.effect-ravi:hover #card-desc {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}
@media screen and (max-width: 50em) {
  .content {
    padding: 0 10px;
    text-align: center;
  }
  .grid figure {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}
#auctions {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
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
  cursor: pointer;
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