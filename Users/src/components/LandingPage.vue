<template>
  <div>
    <NavBar></NavBar>
    <AuctionCard></AuctionCard>
    <ArtworkCard></ArtworkCard>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import AuctionCard from "./AuctionCard.vue";
import ArtworkCard from "./ArtworkCard.vue";

// import axios from "axios";
export default {
  data() {
    return {
      // image: {},
      // images: [],
      // slide: 0,
      // sliding: null,
    };
  },
  // methods: {
  //   displayImages() {
  //     axios.get("http://localhost:3000/categorys").then(({ data }) => {
  //       this.images = data.slice(1);
  //       this.image = data[0];
  //     });
  //   },
  // },
  // mounted() {
  //   this.displayImages();
  // },

  components: {
    NavBar,
    AuctionCard,
    ArtworkCard,
  },
};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}
</style>

