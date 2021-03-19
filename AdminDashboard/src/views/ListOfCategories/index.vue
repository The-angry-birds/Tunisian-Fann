<template>

  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Artists</th>
          <th scope="col">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, i) in categories.data" :key="i">
          <th scope="row">{{ category.id }}</th>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td>@mdo</td>
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
      currentId: null,
      dataInput: {},
      categories: [],
      name: '',
      description: '',
      imageUrl: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  mounted() {
    this.displayCategory()
  },

  methods: {
    displayCategory() {
      axios.get('http://localhost:3000/api/categories').then(data => {
        console.log("===================",data);
        this.categories = data
      })
    },
    updateCategory(id) {
      console.log('==>', id)
      axios
        .put(`http://localhost:3000/api/categories/${id}`, this.dataInput)
        .then((updated) => {
          console.log(updated)
        })
        .then(() => {
          this.displayCategory()
        })
    },
    deleteCategory(id) {
      axios.delete(`http://localhost:3000/api/categories/${id}`).then(() => {
        this.displayCategory()
      })
    }
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
