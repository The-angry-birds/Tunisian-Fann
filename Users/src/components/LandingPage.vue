<template>
  <div>
    <!-- <NavBar></NavBar> -->
    <LPAnimation></LPAnimation>
    <AboutUs></AboutUs>
    <h2>DISCOVER OUR</h2>
    <h1>AUCTIONS</h1>
    <Auctions></Auctions>
    <h2>DISCOVER OUR</h2>
    <h1>ARTWORKS</h1>
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
  background-color: rgb(250, 250, 250);
}

h2 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: -80px;
  font-size: 50px;
}

h1 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: -80px;
  font-size: 80px;
}
</style>
