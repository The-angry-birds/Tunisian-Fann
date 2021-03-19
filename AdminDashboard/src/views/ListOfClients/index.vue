<template>
  <div>
    <table class="table-clients">
      <thead>
        <tr>
          <th scope="col" width="25%">Firstname</th>
          <th scope="col" width="25%">Lastname</th>
          <th scope="col" width="35%">Email</th>
          <th scope="col" width="15%">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users.data" :key="i">
          <th>{{ user.firstName }}</th>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button
              type="button"
              class="ban-btn btn btn-danger"
              data-toggle="modal"
              data-target="#myClientBanModal"
            >
              Ban
            </button>
            <!-- Ban Modal -->
            <div id="myClientBanModal" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <!-- Ban Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title text-danger">WARNING</h4>
                  </div>
                  <div class="modal-body">
                    <p>Are you sure that you want to ban this client ?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Ban
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getAlluser();
  },
  methods: {
    getAlluser() {
      axios
        .get(`http://localhost:3000/api/users`)
        .then((user) => {
          this.users = user;

          console.log("=================>", user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.table-clients {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
