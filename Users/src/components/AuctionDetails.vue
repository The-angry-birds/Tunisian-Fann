<template>
  <div>
    <div class="auction-cover-img">
      <img
        class="auction-img"
        :src="artwork.imageUrl"
        alt=""
      />
    </div>
    <div class="artist-name">
      <p class="artist-name-body">Auction made and initiated by <a href="#">Nabil</a></p>
    </div>
    <div class="auction-body">
      <div class="left-side">
        <h1 class="auction-name">{{ artwork.nameArtwork }}</h1>
        <h4>Description</h4>
        <p>
          {{ artwork.description }}
        </p>
      </div>
      <div class="right-side">
        <div class="current-bid">
          <h5>Current Bid</h5>
          <h1>{{ currentBid }} td</h1>
        </div>
        <div class="vl"></div>
        <div class="ending-time">
          <h5>Auction ending in</h5>
          <h1>{{ distanceDate.days }}d {{ distanceDate.hours }}h
              {{ distanceDate.minutes }}m {{ distanceDate.seconds }}s</h1>
        </div>
        <input
              onfocus="this.value=''"
              type="number"
              v-model="bidValue"
              class="form-control"
              placeholder="Place your desired bid here..."
              aria-label="bid"
              aria-describedby="butn"
            />
        <button class="place-bid-btn" @click.prevent="createBid()">Place a bid</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      artist: {},
      currentBid: 0,
      highBid: 0,
      bidValue: "",
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
        .get(`http://localhost:3000/api/auctionbid/${this.auction_id}`)
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

              console.log("this is", this.artwork);
            })
            .then(() => {
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
                let minutes = Math.floor(
                  (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                this.distanceDate = {
                  days: days,
                  hours: hours,
                  minutes: minutes,
                  seconds: seconds,
                };
              });
            });
        })
        .then(() => {
          axios
            .get(`http://localhost:3000/api/artists/${this.artwork.artist_id}`)
            .then(({ data }) => {
              console.log("this.is artist", data);
              this.artist = data;
            });
        });
    },

    getuser() {
      const token = localStorage.getItem("token");

      axios
        .get("http://localhost:3000/api/users/getUserByToken", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          this.user_id = data.user.id;
        });
    },
    createBid() {
      if (this.bidValue === " ") {
        swal("Oops!", "invalid bid1", "error");
      } else if (this.bidValue < this.currentBid) {
        swal("Oops!", "the bid is less than the current bid", "error");
      } else {
        axios
          .post("http://localhost:3000/api/bid", {
            bidValue: this.bidValue,
            auction_id: this.auction_id,
            user_id: this.user_id,
          })
          .then(() => {
            console.log("updated bid ");
            this.getallbids();
            swal("great", "bid is added", "success ");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getallbids() {
      axios
        .get(`http://localhost:3000/api/bid/${this.auction_id}`)
        .then(({ data }) => {
          console.log("allbids", data);

          data.forEach((bid) => {
            console.log(bid.bidValue);
            if (bid.bidValue > this.currentBid) {
              this.currentBid = bid.bidValue;
            }
          });
        });
    },
  },

  mounted() {
    this.getAuction();
    this.getuser();
    this.getallbids();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  font-family: "Lexend", serif;
}

.auction-cover-img {
  height: 500px;
  width: 100%;
  background-color: white;
  text-align: center;
  padding-top: 120px;
}

.auction-img {
  height: 90%;
  text-align: center;
  transition: 0.5s;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
}

.auction-img:hover {
  height: 98%;
}

.artist-name {
  width: 100%;
  height: 50px;
  line-height: 25px;
  padding: 15px;
}

.artist-name-body {
  margin-left: 5%;
}

.auction-body {
  display: flex;
  flex-wrap: nowrap;
  background-color: white;
}

.left-side {
  background-color: white;
  width: 50%;
  margin-top: 0px;
  margin-left: 20px;
  margin-top: 20px;
  padding-top: 0px;
  padding-left: 20px;
}

.right-side {
  background-color: white;
  width: 50%;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  height: 100%;
}

.current-bid {
  padding: 10px;
  width: 39%;
}
.vl {
  border-left: 1px solid grey;
  margin-right: 20px;
}

.form-control {
  margin-top: 10px;
  padding: 10px;
}

.place-bid-btn {
  align-items: flex-start;
  background-color: #000000;
  border-color: #1a1a1a;
  border-radius: 15px;
  border-style: solid;
  border-width: 2px;
  color: #ffffff;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  gap: normal;
  padding: 16px 24px;
  text-align: center;
  width: 100%;
  margin-top: 20px;
}

.ending-time {
  padding: 10px;
}
</style>
