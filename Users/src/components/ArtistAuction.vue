<template>
 <div class="container" @click="sharedData(auction)">
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

          <span v-if="!isExpired" class="card__time" id="demo">
            {{ distanceDate.days }}Days {{ distanceDate.hours }}Hr
            {{ distanceDate.minutes }}Min {{ distanceDate.seconds }}Sec :
            Left</span
          >
          <span v-if="isExpired" class="card__time" id="demo"> Expired </span>
        </div>
      </div>
      <img class="card__img" src="" />
      <a href="#" class="card_link">
        <img class="card__img--hover" :src="auction.imageUrl" />
      </a>
      <div class="card__info">
        <h3 class="card__title">{{ auction.nameArtwork }}</h3>
        <span class="card__category"
          >{{ auction.description.substr(0, 9) }}...</span
        >
        <br />
        <span class="card__by"
          >by
          <a href="#" class="card__author" title="author" id="main"
            >{{ getArtist.firstName }} {{ getArtist.lastName }}
          </a></span
        >
      </div>
    </article>
  </div>
</template>

<script>
import ArtistProfileView from "./ArtistProfileView";
export default {
  props: {
    auction: {
      type: Object,
    },
    category: {
      type: Object,
    },
  },
  data() {
    return {
      distanceDate: { days: null, hours: null, minutes: null, seconds: null },
      isExpired: false,
    };
  },
  component: {
    ArtistProfileView,
  },
  methods: {
    sharedData(auction) {
      this.$router.push({
        path: `/auction-details/${auction.id}`,
      });
    },
    calculateCountDown() {
      // Set the date we're counting down ton

      var countDownDate = new Date(this.auction.endDate).getTime();
   
      // Update the count down every 1 second
      var x = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // If the count down is over, write some text
        if (distance < 0) {
          this.isExpired = true;
          clearInterval(x);
        }

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        this.distanceDate = {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };

      }, 1000);
    },
  },
  mounted() {
    this.calculateCountDown();
  },
  computed: {
    //it returns the user that is actually logged in
    getArtist() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
<style scoped>
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
#main {
  text-transform: uppercase;
}
</style>
