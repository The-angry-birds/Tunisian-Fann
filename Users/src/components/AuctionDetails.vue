<template>
  <div>
    <div class="auction-container">
      <div class="left-container">
        <img
          class="auction-image"
          src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/oh-my-god-artwork-by-bensalem-walid.png"
        />
      </div>
      <div class="right-container">
        <div class="auction-header">
          <h1 class="auction-name">Oh My God</h1>
          <p class="auction-category"></p>
        </div>
        <hr />
        <p class="auction-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et arcu
          eget eros semper tempus eget ac nisl.
        </p>
        <hr />
        <div class="time-container">
          <h4 class="time-header">Time left:</h4>
          <p class="time">{{ auction.startDate }}</p>
        </div>
        <hr />
        <div class="current-price-container">
          <h4 class="current-price-header">Current winning price:</h4>
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
export default {
  data() {
    return {
      auction: {},
    };
  },
  mounted() {
    this.auction = this.$route.params;
  },
};
</script>
<style scoped>
* {
  font-family: "Spectral", serif;
}
.auction-container {
  padding-top: 70px;
  padding-bottom: 20px;
  padding-right: 10%;
  padding-left: 12%;
  width: 100vw;
  height: 100vh;
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
}
.auction-header {
  display: flex;
  flex-wrap: nowrap;
}
.auction-name {
  font-weight: bolder;
  color: #AD7D52;
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
  color: #AD7D52;
  font-weight: 800;
}
.time {
  padding-top: 3px;
  padding-left: 15px;
  font-weight: bold;
  color: #AD7D52;
}
.submit-btn {
  color: #AD7D52;
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
  color: #AD7D52;
}
</style>