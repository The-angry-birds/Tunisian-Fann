<template>
  <div>
    <NavBar></NavBar>
    <div>
     <button @click.prevent="handleClick()">Logout</button>
  </div>

    <div class="row py-5 px-4">
      <div class="col-md-5 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="..."
                  width="130"
                  class="rounded mb-2 img-thumbnail"
                />
              </div>
              <div class="media-body mb-5 text-white">
                <p class="small mb-4">
                  <i class="fas fa-map-marker-alt mr-2"></i>New York
                </p>
              </div>
            </div>
          </div>

          <!-- Button trigger modal -->

          <div class="px-4 py-3">
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">{{firstName}} </p>
              <p class="font-italic mb-0">{{email}}</p>
              <p class="font-italic mb-0">Lives in New York</p>
            
              <div class=" modal-wala">
                
              </div>
            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent AUCTIONS</h5>
              <a href="#" class="btn btn-link text-muted">Show all</a>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import axios from "axios";
export default {
 data() {
    return {
      firstName: "",
      email: "",
    }
  },
  components: {
    NavBar
  },
  methods: {
      displayUser() {
      axios.get(`http://localhost:3000/users/auth/${localStorage.getItem('mail')}`).then(( data ) => {
          this.firstName = data.data.firstName
          this.email=data.data.email
          console.log(this.firstName);

          console.log("====",data)
          
      })
      .catch(( error ) => {console.log(error)})

     
    },
   handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  mounted() {
    this.displayUser();
  }
  },
}
</script>

<style scoped>
.profile-head {
  transform: translateY(5rem);
}

.cover {
  background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.edit-btn {
  margin-left: 600px;

  bottom: 1100px;
}
body {
  background: #654ea3;
  background: linear-gradient(to right, #e96443, #904e95);
  min-height: 100vh;
}
</style>
