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
                    <p class="card-author">
                      {{ artist.firstName }} {{ artist.lastName }}
                    </p>
                  </div>
                  <div></div>
                </b-card>
              </div>
            </div>
          </div>
          <div class="px-3 py-4">
            <h5 class="mb-4">Auctions</h5>
            <div class="p-4 rounded shadow-sm" id="auctions">
               <div class="container" v-for="(auction, i) in auctionData"
        :key="i">
    <article class="card card--1">
      <div class="card__info-hover">
        <svg class="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div class="card__clock-info">
          <svg class="card__clock" viewBox="0 0 24 24">
            <path
              d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
            />
          </svg>

          <!-- <span v-if="!isExpired" class="card__time" id="demo">
            {{ distanceDate.days }}Days {{ distanceDate.hours }}Hr
            {{ distanceDate.minutes }}Min {{ distanceDate.seconds }}Sec :
            Left</span
          > -->
          <!-- <span v-if="isExpired" class="card__time" id="demo"> Expired </span> -->
        </div>
      </div>
      <img class="card__img" src="" />
      <a href="#" class="card_link">
        <img class="card__img--hover" :src="auction.imageUrl" />
      </a>
      <div class="card__info">
     <h3 class="card__title">{{ auction.nameArtwork }}</h3>
        <span class="card__category"> {{ auction.description }} </span>
        <span class="card__by"
          ><br />

          by
          <a href="#" class="card__author" title="author"
            >{{ artist.firstName }} {{ artist.lastName }}</a
          ></span
        >
        >
      </div>
    </article>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArtistAuction from "./ArtistAuction";

export default {
  data() {
    return {
      artist: {},
      artworks: {},
      auction: {},
      auctionData: {},
    };
  },
  component: {
    ArtistAuction,
  },
  methods: {
    getArtwork() {
      axios
        .get(`http://localhost:3000/api/artworks/artist/${this.artist.id}`)
        .then((res) => {
          console.log(res.data.nameArtwork);
          this.artworks = res.data;
        });
    },
    getAuctions() {
      axios.get(`http://localhost:3000/api/auctions/${this.artist.id}`).then(({ data }) => {
        console.log("======data", data.data[i]);
        var myauctions = Object.values(data)[0];
        var myartworks = Object.values(data)[1];
        this.auctions = myauctions;
      
        var mixdata = [];
        for (var i = 0; i < myauctions.length; i++) {
          for (var j = 0; j < myartworks.length; j++) {
            if (myartworks[j].id == myauctions[i].artwork_id) {
              var myObj = Object.assign(myartworks[j], myauctions[i]);
              mixdata.push(myObj);
            }
         
          }
        }
        this.auctionData = mixdata;
        
      });
    },
  },
  mounted() {
    this.artist = this.$route.params;
    this.getArtwork();
    this.getAuctions();
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

/* .search-label {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
} */

.search-input {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  width: 300px;

  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  /* border-radius: 5px; */
}
.search-input:focus {
  /* border-right: none; */
  outline: none;
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
#main {
  text-transform: uppercase;
}
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
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");
* {
  box-sizing: border-box;
  font-family: "Lexend", sans-serif;
}
.container {
  width: 50%;
}

.card--1 {
  width: 100%;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
}

.card--1 .card__img,
.card--1 .card__img--hover {
  object-fit: cover;
}

.card__like {
  width: 18px;
}

.card__clock {
  width: 20px;
  vertical-align: middle;
  fill: #a08018;
}

.card__time {
  font-size: 15px;
  color: #a08018;
  vertical-align: middle;
  margin-left: 5px;
}

.card__clock-info {
  float: right;
  display: flex;
}

.card__img {
  visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 190px;
}

.card__info-hover {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  top: 0;
}

.card {
  transition: all 0.5s;
  background-color: #fff;
  width: 95%;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  margin: 0px;
  height: 300px;
}
.card:hover {
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  transform: scale(1.1, 1.1);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 8px 16px 16px 16px;
}

.card__category {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: grey;
}

.card__title {
  margin-top: 5px;
  margin-bottom: 10px;
}

.card__by {
  font-size: 12px;
}

.card__author {
  font-weight: 600;
  text-decoration: none;
  color: #a08018;
}

.card:hover .card__img--hover {
  height: 100%;
  opacity: 0.4;
}

.card:hover .card__info {
  background-color: transparent;
  position: relative;
}

.card:hover .card__info-hover {
  opacity: 1;
}
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");
* {
  box-sizing: border-box;
  font-family: "Lexend", sans-serif;
}
.container {
  width: 50%;
}

.card--1 {
  width: 100%;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
}

.card--1 .card__img,
.card--1 .card__img--hover {
  object-fit: cover;
}

.card__like {
  width: 18px;
}

.card__clock {
  width: 20px;
  vertical-align: middle;
  fill: #a08018;
}

.card__time {
  font-size: 15px;
  color: #a08018;
  vertical-align: middle;
  margin-left: 5px;
}

.card__clock-info {
  float: right;
  display: flex;
}

.card__img {
  visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 190px;
}

.card__info-hover {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  top: 0;
}

.card {
  transition: all 0.5s;
  background-color: #fff;
  width: 95%;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  margin: 0px;
  height: 300px;
}
.card:hover {
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  transform: scale(1.1, 1.1);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 8px 16px 16px 16px;
}

.card__category {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: grey;
}

.card__title {
  margin-top: 5px;
  margin-bottom: 10px;
}

.card__by {
  font-size: 12px;
}

.card__author {
  font-weight: 600;
  text-decoration: none;
  color: #a08018;
}

.card:hover .card__img--hover {
  height: 100%;
  opacity: 0.4;
}

.card:hover .card__info {
  background-color: transparent;
  position: relative;
}

.card:hover .card__info-hover {
  opacity: 1;
}
</style>