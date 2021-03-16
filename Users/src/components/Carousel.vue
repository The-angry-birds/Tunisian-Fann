<template>
  <div>

    <NavigationBar></NavigationBar>
    <div class="carousel-container">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
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


  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";

export default {
  components: {

    NavigationBar,

  },
};
</script>

<style scoped>

.carousel-image {


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

