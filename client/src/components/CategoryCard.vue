<template>
  <div>
    <div v-for="(category, i) in categories" :key="i">
      <v-card class="mx-auto">
        <v-img id="category-img" v-bind:src="category.ImageUrl"></v-img>
        <v-card-title> {{ category.name }} </v-card-title>
        <v-card-subtitle>
          {{ category.description }}
        </v-card-subtitle>
      </v-card>
    </div>
    <div>
      <v-card>
        <v-img
          id="add-category-img"
          src="https://s3.amazonaws.com/static.graphemica.com/glyphs/i500s/000/007/186/original/002B-500x500.png?1275320936"
        ></v-img>
        <v-card-title> Category Name </v-card-title>
        <v-card-subtitle> Category Description </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
};
</script>

<style scoped>
* {
  font-family: "Neuton", serif;
  display: flex;
  flex-wrap: wrap;
}

.v-card {
  cursor: pointer;
  margin: 20px;
  width: 220px;
  height: 320px;
}

#category-img {
  object-fit: cover;
  height: 150px;
}

#add-category-img {
  object-fit: cover;
  height: 150px;
}
</style>
