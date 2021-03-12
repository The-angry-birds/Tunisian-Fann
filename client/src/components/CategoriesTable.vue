<template>
  <div id="app">
    <v-app id="inspire">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Category</th>
              <th class="text-left">Number of artists</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.numberOfArtists }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Paintings",
          numberOfArtists: 159,
        },
        {
          name: "Digital Paintings",
          numberOfArtists: 170,
        },
        {
          name: "Sculptures",
          numberOfArtists: 98,
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  width: 50%;
}
</style>