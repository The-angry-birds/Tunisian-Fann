<template>
  <div>
    <NavBar></NavBar>
    <LPAnimation></LPAnimation>
    <AboutUs></AboutUs>
    <AuctionCard></AuctionCard>
    <ArtworkCard></ArtworkCard>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import LPAnimation from "./LPAnimation.vue";
import AboutUs from "./AboutUs.vue";
import AuctionCard from "./AuctionCard.vue";
import ArtworkCard from "./ArtworkCard.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    NavBar,
    AuctionCard,
    ArtworkCard,
    LPAnimation,
    AboutUs,
    Footer,
  },
};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}
</style>

