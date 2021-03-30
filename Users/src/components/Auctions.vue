<template>
  <div>
    <div  class="container">
      <SingleAuction
        v-for="(auction, i) in auctions"
        :key="i"
        :auction="auction"
      
      />
        <!-- :sharedData="sharedData" -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleAuction from "./SingleAuction";

export default {
  data() {
    return {
      artwork_id: "",
      auctions: {},
      auction: {},
    };
  },
  methods: {
    getAuctions() {
      axios.get("http://localhost:3000/api/auctions").then((res) => {
        console.log(res);
        this.auctions = res.data;
      });
    },
 
  },
  components: {
    SingleAuction,
  },
  mounted() {
    // this.sharedData()
    this.getAuctions();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
  font-family: "Lexend", serif;
}

body {
  background-color: #d2dbdd;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}

.container {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}

.auctions-header {
  font-size: 25px;
  text-align: center;
  margin-top: 25px;
  color: #a08018;
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
  background-image: url("https://www.bensalemwalid.com/wp-content/uploads/2021/02/before-lights-out-artwork-by-bensalem-walid.png");
}

.card__like {
  width: 18px;
}

.card__clock {
  width: 17px;
  vertical-align: middle;
  fill: #a08018;
}

.card__time {
  font-size: 14px;
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
  height: 235px;
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
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  width: 45%;
  position: relative;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  margin: 20px;
  height: 300px;
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  transform: scale(1.1, 1.1);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
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
  opacity: 0.3;
}

.card:hover .card__info {
  background-color: transparent;
  position: relative;
}

.card:hover .card__info-hover {
  opacity: 1;
}
</style>

