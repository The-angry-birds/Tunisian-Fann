<template>
  <div>
    <!-- <NavBar></NavBar> -->
    <LPAnimation></LPAnimation>
    <AboutUs></AboutUs>
    <Auctions></Auctions>
    <Artworks></Artworks>
    <Footer></Footer>
  </div>
</template>

<script>
// import NavBar from "./NavBar.vue";
import LPAnimation from "./LPAnimation.vue";
import AboutUs from "./AboutUs.vue";
import Auctions from "./Auctions.vue";
import Artworks from "./Artworks.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    // NavBar,
    Auctions,
    Artworks,
    LPAnimation,
    AboutUs,
    Footer,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  font-family: "Lexend", serif;
}
</style>

