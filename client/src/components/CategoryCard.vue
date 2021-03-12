<template>
  <v-card class="mx-auto" max-width="280">
    <v-img
      src="https://i.pinimg.com/originals/fc/2f/7f/fc2f7fcd26c7376d5c1b5643cd4b1951.jpg"
      height="200px"
    ></v-img>
    <v-card-title> Digital Painting </v-card-title>
    <v-card-subtitle>
      Artworks made using digital tools by means of a computer, a graphics
      tablet and stylus, and software...
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          Digital painting is an emerging art form in which traditional painting
          techniques such as watercolor, oils, impasto, etc. are applied using
          digital tools by means of a computer, a graphics tablet and stylus,
          and software.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>

* {
  font-family: Verdana, sans-serif;
}
.v-card {
  margin: 20px;
}

</style>
