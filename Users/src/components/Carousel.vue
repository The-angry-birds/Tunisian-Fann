<template>
  <div>
    <NavBar></NavBar>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        fade
        background="transparent"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide
          class="carousel-image"
          v-bind:caption="image.name"
          v-bind:text="image.description.slice(0, 50)"
          v-bind:img-src="image.ImageUrl"
        ></b-carousel-slide>

        <b-carousel-slide
          v-for="(item, index) in images"
          :key="index"
          class="carousel-image"
          v-bind:caption="item.name"
          v-bind:text="item.description"
          v-bind:img-src="item.ImageUrl"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <AuctionCard></AuctionCard>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import AuctionCard from "./AuctionCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      image: {},
      images: [],
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    displayImages() {
      axios.get("http://localhost:3000/categorys").then(({ data }) => {
        this.images = data.slice(1);
        this.image = data[0];
      });
    },
  },
  mounted() {
    this.displayImages();
  },
  components: {
    NavBar,
    AuctionCard,
  },
};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}
body .carousel-image {
  width: 100%;
  max-height: 70vh;
  min-height: 70vh;
  object-fit: cover;
  padding-left: 8px;
  padding-right: 8px;
}

#carousel-1 {
  width: 100%;
  max-height: 70vh;
  min-height: 70vh;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
