<template>
  <div>
    <table class="table-artists">
      <thead>
        <tr>
          <th scope="col" width="25%">Firstname</th>
          <th scope="col" width="25%">Lastname</th>
          <th scope="col" width="35%">Email</th>
          <th scope="col" width="15%">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(artist, i) in artists.data" :key="i">
          <th>{{ artist.firstName }}</th>
          <td>{{ artist.lastName }}</td>
          <td>{{ artist.email }}</td>
          <td>
            <button
              type="button"
              class="artist-ban-btn btn btn-danger"
              data-toggle="modal"
              data-target="#myArtistBanModal"
            >
              Ban
            </button>
  
            <!-- Ban Modal -->
            <div id="myArtistBanModal" class="modal fade" role="dialog">
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
                    <p>Are you sure that you want to ban this artist ?</p>
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
            <button
              type="button"
              class="artist-accept-btn btn btn-success"
              @click="onSubmit"
            >
              Accept
            </button>
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
      artists: [],
    };
  },
  methods: {
    getAllartist() {
      axios
        .get(`http://localhost:3000/api/artists`)
        .then((artist) => {
          this.artists = artist;
          console.log("=================>", artist);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSubmit() {
      this.$message('Accepted!')
    },
  },
  mounted() {
    this.getAllartist();
  },
};
</script>
<style>
.table-artists {
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

.artist-ban-btn {
  width: 80px;
  margin-right:5px;

}
.artist-accept-btn {
width: 80px;
}
</style>
