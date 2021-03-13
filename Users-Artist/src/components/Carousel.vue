<template>
  <div>
    <NavigationBar></NavigationBar>
    <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999999999999999">
      <img src="https://community.wacom.com/eu/wp-content/uploads/2019/03/Andrea-Stangoni-890x400.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>DIGITAL PAINTINGS</h1>
        <!-- <h3>Some representative placeholder content for the slide.</h3> -->
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="99999999999999999">
      <img src="https://sothebys-com.brightspotcdn.com/dims4/default/b147f72/2147483647/strip/true/crop/2000x1131+0+0/resize/1156x654!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot-migration.s3.amazonaws.com%2Fcd%2Fc9%2F69%2F5889a568f09402e2be0d0d48c7ebe53f8fcb6a0e8d7ba1710f20591aa5%2F390l18231-9vccg-combined.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>SCULPTURES</h1>
        <!-- <h3>Some representative placeholder content for the slide.</h3> -->
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="99999999999999999">
      <img src="https://www.theartist.me/wp-content/uploads/2017/08/the-lover-by-rene.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>PAINTINGS</h1>
        <!-- <h3>Some representative placeholder content for the slide.</h3> -->
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  
  
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
export default {
  components: {
    NavigationBar
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  color: white;
}

img {
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  object-fit: cover;
  padding:20px;
}

.carousel-text {
  padding-bottom: 20%;
  
}

</style>