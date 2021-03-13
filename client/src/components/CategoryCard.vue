<template>
  <div>
    <div v-for="category in categories" :key="category.id">
      <v-card class="mx-auto" max-width="280">
        <v-img v-bind:src="category.imgUrl" height="200px"></v-img>
        <v-card-title> {{ category.name }} </v-card-title>
        <v-card-subtitle>
          {{ category.description }}
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
              Digital painting is an emerging art form in which traditional
              painting techniques such as watercolor, oils, impasto, etc. are
              applied using digital tools by means of a computer, a graphics
              tablet and stylus, and software.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    show: false,
    categories: [],
  }),
  methods: {

    displayCategory() {

      axios.get("http://localhost:3000/categorys").then(({data}) => {
        console.log(data);
        this.categories = data;
      });
    },
    
  },
  mounted(){
    this.displayCategory()
  }
}
   

</script>

<style scoped>
* {
  font-family: Verdana, sans-serif;
}
.v-card {
  margin: 20px;
}
</style>
