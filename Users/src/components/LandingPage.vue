<template>
  <div>
    <NavBar></NavBar>
    <LPAnimation></LPAnimation>
    <AuctionCard></AuctionCard>
    <ArtworkCard></ArtworkCard>
    <AboutUs></AboutUs>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import AuctionCard from "./AuctionCard.vue";
import ArtworkCard from "./ArtworkCard.vue";
import LPAnimation from "./LPAnimation.vue";
import AboutUs from "./AboutUs.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    NavBar,
    AuctionCard,
    ArtworkCard,
    LPAnimation,
    AboutUs,
    Footer
  },
};
</script>

<style scoped>


* {
  font-family: "Spectral", serif;
     
}
</style>

