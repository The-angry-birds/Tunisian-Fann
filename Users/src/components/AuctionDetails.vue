<template>
  <div>
    <div class="auction-container">
      <div class="left-container">
        <img
          class="auction-image"
          :src="artwork.imageUrl"
        />
      </div>
      <div class="right-container">
        <div class="auction-header">
          <h1 class="auction-name">{{ artwork.nameArtwork }}</h1>
          <p class="auction-category"></p>
        </div>
        <hr />
        <p class="auction-description">
        {{artwork.description }}
        </p>
        <hr/>
        <div class="time-container">
          <h4 class="time-header">
            Time left:
            <span v-if="!isExpired" class="card__time" id="demo">
              {{ distanceDate.days }}Days {{ distanceDate.hours }}Hr
              {{ distanceDate.minutes }}Min {{ distanceDate.seconds }}Sec :
              Left</span
            >
          </h4>
          <p class="time"></p>
        </div>
        <hr />
        <div class="current-price-container">
          <h4 class="current-price-header">Current bid:</h4>
          <h1 class="current-price">120.00 TD</h1>
        </div>
        <hr />
        <div>
          <h4 class="price-input-header">Insert your desired bid: *</h4>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Place bid here..."
              aria-label="bid"
              aria-describedby="butn"
            />
            <div class="input-group-append">
              <button class="submit-btn" type="button" id="butn">Submit</button>
            </div>
            <p class="price-note">
              * Please note that you should place a bid higher than the current
              winning price.
            </p>
          </div>
        </div>
        <div class="auction-by">
          by
          <p class="auction-artist">Bensalem Walid</p>
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
      artwork_id: null,
      artwork: {},
      auction_id: null,
      auction: {},
      user_id: null,
      isExpired: false,
      distanceDate: { days: null, hours: null, minutes: null, seconds: null },
    };
  },
  methods: {
    getAuction() {
      this.auction_id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/api/auctions/${this.auction_id}`)
        .then(({ data }) => {
          console.log("this is auction", data);
          this.auction = data;
        })
        .then(() => {
          axios
            .get(
              `http://localhost:3000/api/artworks/${this.auction.artwork_id}`
            )
            .then(({ data }) => {
              this.artwork = data;
              console.log("this.is artwork", data);
            }) .then(() => {
                var countDownDate = new Date(this.auction.endDate).getTime();

      var x = setInterval(() => {
      
        let now = new Date().getTime();

        let distance = countDownDate - now;

    
        if (distance < 0) {
          this.isExpired = true;
          clearInterval(x);
        }

  
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

     
        this.distanceDate = {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
      });
            })
        });
    },

    getuser() {
      const token = localStorage.getItem("token");

      axios
        .get("http://localhost:3000/api/users/getUserByToken", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          console.log(" this is user idDDDDDDDDDDDDDDDDDDDDDDDD", data.user.id);
          this.user_id = data.user.id;
        });
    },


  },

  mounted() {
    this.getAuction();

    this.getuser();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  font-family: "Lexend", serif;
}
.auction-container {
  padding-top: 160px;
  padding-bottom: 20px;
  padding-right: 10%;
  padding-left: 12%;
  width: 100vw;
  height: 120vh;
}
.left-container {
  width: 60%;
  height: 100%;
  float: left;
}
.auction-image {
  height: 100%;
  width: 90%;
  object-fit: cover;
  border-radius: 5px;
}
.auction-header {
  display: flex;
  flex-wrap: nowrap;
}
.auction-name {
  font-weight: bolder;
  color: #a08018;
}
.auction-category {
  padding-top: 18px;
  padding-left: 3px;
  color: grey;
  text-transform: uppercase;
}
.right-container {
  width: 40%;
  height: 100%;
  float: right;
}
.time-container {
  display: flex;
  flex-wrap: nowrap;
}
.current-price {
  color: #a08018;
  font-weight: 800;
}
.time {
  padding-top: 3px;
  padding-left: 15px;
  font-weight: bold;
  color: #a08018;
}
.submit-btn {
  color: #a08018;
}
.submit-btn:hover {
  color: black;
  font-weight: bold;
}
.price-note {
  color: grey;
}
.auction-by {
  display: flex;
  flex-wrap: nowrap;
}
.auction-artist {
  margin-left: 3px;
  font-weight: 600;
  color: #a08018;
}
</style>
