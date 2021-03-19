<template>

  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">firstName</th>
          <th scope="col">LastName</th>
          <th scope="col">email</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(artist, i) in artists.data " :key="i">
          <th> {{ artist.firstName }}  </th>
          <td>{{ artist.lastName }} </td>
          <td>{{ artist.email }}</td>

        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      artists: []
    }
  },
  methods: {
    getAllartist() {
      axios
        .get(`http://localhost:3000/api/artists`)
        .then((artist) => {
          this.artists = artist
          console.log('=================>', artist)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getAllartist()
  }
}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
