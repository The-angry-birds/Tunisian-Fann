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
        <tr v-for="(user, i) in users.data" :key="i">
          <th> {{ user.firstName }}  </th>
          <td>{{ user.lastName }} </td>
          <td>{{ user.email }}</td>

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

      users: []

    }
  },
  mounted() {
    this.getAlluser()
  },
  methods: {
    getAlluser() {
      axios.get(`http://localhost:3000/api/users`)
        .then((user) => {
          this.users = user

          console.log('=================>', user)
        })
        .catch((err) => {
          console.log(err)
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
