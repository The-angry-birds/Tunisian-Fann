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
            <div class="p-4 rounded shadow-sm" id="artworks"></div>
          </div>
          <div class="card-container">
            <card
              class="artwork-card"
              v-for="(e, i) in artworks"
                  :key="i"
            >
              <img class="img-card" :src="e.imageUrl" />
              <h3 class="card-title">{{ e.nameArtwork }}</h3>
              <p class="card-category">{{e.description}}</p>

              <h6 class="card-price">{{e.price}} dt</h6>
              <div class="card-by">
                by
                <p class="card-author">
                  {{ artist.firstName }} {{ artist.lastName }}
                </p>
              </div>
              <div></div>
            </card>
          </div>
        </div>
      </div>
      <div class="px-3 py-4">
            <h5 class="mb-4">Auctions</h5>
            <div class="p-4 rounded shadow-sm" id="auctions">              
              <div class="container" style="margin-top: -80px">
                <ArtistAuction
                  :auction="auction"
                  v-for="(auction, i) in auctionData"
                  :key="i"
                />
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
      axios
        .get(`http://localhost:3000/api/auctions/1`)
        .then(({ data }) => {
          console.log("===nnn===data", data);
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
          console.log("maaaalek", this.auctionData)
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}
.artwork-card {
  font-family: "Lexend", sans-serif;
  margin: 22px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 300px;
  height: 470px;
  background-color: white;
}
.card-category {
  margin-top: 2px;
  padding-left: 20px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}
.card-title {
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
}
.card-price {
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.card-by {
  padding-left: 20px;
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
.img-card :hover {
  opacity: 0.5;
}
.img-card {
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.card-btn {
  margin-left: 5%;
  /* margin-left: 225px; */
  width: 42.5%;
  height: 30px;
  /* border-radius: 5px; */
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid black;
  transition: all 0.4s;
}
.card-btn:hover {
  background-color: black;
  color: white;
}
.add-artwork-btn {
  font-family: "Lexend", sans-serif;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  width: 80px;
  height: 80px;
  border: 2px solid black;
  transition: 0.5s;
  font-size: 12px;
  font-weight: bold;
  position: relative;
}
.add-artwork-btn:hover {
  color: white;
  background-color: black;
}
.labels {
  margin-top: 30px;
}
.btn-group {
  margin-top: 25px;
  text-align: center;
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: 0.5s;
  padding-left: 30px;
  border-radius: 5px;
}
.btn-group:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
#auctions {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
.container {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}
</style>