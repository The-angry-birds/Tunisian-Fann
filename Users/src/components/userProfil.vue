<template>
  <div>
    <NavBar></NavBar>

    <button class="logout-btn" @click.prevent="handleClick()">Logout</button>
    <div class="row py-5 px-4" id='profilContainer'>

  
      <div class="col-md-5 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">

            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  src="https://icon-library.com/images/facebook-user-icon/facebook-user-icon-17.jpg"
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
                  src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/in-the-garden-artwork-by-bensalem-walid.png"

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
  
  
  
},
mounted() {
   this.displayUser();
  },
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Spectral", serif;
}
.img-fluid {
height: 150px;
width: 100%;
object-fit: cover;
}
#userInfos {
  margin-top: 40px;
}

.profile-head {
  transform: translateY(5rem);
}

.cover {
  background-image: url(https://www.bensalemwalid.com/wp-content/uploads/2021/02/dark-side-artwork-by-bensalem-walid.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.edit-btn {
  margin-left: 600px;


#logout-btn {
 
  text-align: center;
  font-size: 20px;
  color: #ad7d52;
  text-shadow: 1px 1px 3px #ad7d52;
}

#logout-btn:hover {
  color: #000000;
  text-shadow: 1px 1px 3px #000000;
}



</style>
