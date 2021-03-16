<template>
  <div>

    <NavigationBar></NavigationBar>
    <div class="carousel-container">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="9999999999"
        controls
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide
          class="carousel-image"
          caption="Paintings"
          text="Caption Text"
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
        <b-carousel-slide
          class="carousel-image"
          caption="Digital Paintings"
          text="Caption Text"
          img-src="https://picsum.photos/1024/480/?image=54"
        ></b-carousel-slide>
        <b-carousel-slide
          class="carousel-image"
          caption="Sculptures"
          text="Caption Text"
          img-src="https://picsum.photos/1024/480/?image=53"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <!-- <NavigationBar></NavigationBar> -->
    <LoginArtist id="artist" />
    <!-- <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999999999999999">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4be9c731904549.56661ae867803.jpg" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block carousel-text">
        <h1>DIGITAL PAINTINGS</h1>=======
8371

       
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

    NavigationBar,

    // NavigationBar,

  },
};
</script>

<style scoped>

.carousel-image {

* {
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Neuton", serif;
}

img {

  width: 100%;
  max-height: 92vh;
  min-height: 92vh;
  object-fit: cover;

}
</style>

  padding: 20px;
}

.carousel-text {
  padding-bottom: 25%;
  text-shadow: 2px 2px 5px black;
}

