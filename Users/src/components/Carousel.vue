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
        <!-- <b-carousel-slide
          class="carousel-image"
          caption="Sculptures"
          text="Caption Text"
          img-src="https://picsum.photos/1024/480/?image=53"
        ></b-carousel-slide> -->
        -->
      </b-carousel>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import axios from "axios";
export default {
  data() {
    return {
      image: {},
      images: [],
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

padding: 20px; } .carousel-text { padding-bottom: 25%; text-shadow: 2px 2px 5px
black; }
