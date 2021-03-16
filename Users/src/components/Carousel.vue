<template>
  <div>
    <!-- <NavigationBar></NavigationBar> -->
    <LoginArtist id="artist" />
    <!-- <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999999999999999">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4be9c731904549.56661ae867803.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>DIGITAL PAINTINGS</h1>
       
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="99999999999999999">
      <img src="https://wallpaperaccess.com/full/885015.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>SCULPTURES</h1>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="99999999999999999">
      <img src="https://media.architecturaldigest.com/photos/5ab021fad91fc303af543aa3/2:1/w_3850,h_1925,c_limit/56797527.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>PAINTINGS</h1>
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
</div> -->
  </div>
</template>

<script>
// import NavigationBar from "./NavigationBar.vue";
import LoginArtist from "./LoginArtist.vue";
export default {
  components: {
    // NavigationBar,
    LoginArtist,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Neuton", serif;
}

img {
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  object-fit: cover;
  padding: 20px;
}

.carousel-text {
  padding-bottom: 25%;
  text-shadow: 2px 2px 5px black;
}
</style>
