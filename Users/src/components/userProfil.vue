<template>
  <div>
    <NavBar></NavBar>
    <button class="logout-btn" @click.prevent="handleClick()">Logout</button>
    <div class="row py-5 px-4" id='profilContainer'>
      <div class="col-md-5 mx-auto">
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
            </div>
          </div>

          <div class="px-4 py-3" id="userInfos">
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">{{firstName}}{{lastName}}</p>
              <p class="font-italic mb-0">{{email}}</p>
              <p class="font-italic mb-0">Location</p>
            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent AUCTIONS</h5>
              <button href="#" class="btn btn-link text-muted">Show all</button>
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
                  src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/Kurt-artwork-by-bensalem-walid.png"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/queen-monroe-artwork-by-bensalem-walid-rect.png"
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
      lastName: "",
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
          this.lastName = data.data.lastName
          this.email=data.data.email

          console.log(this.firstName);

          console.log("====",data)
          
      })
      .catch(( error ) => {console.log(error)})

      }
    },
  
  mounted() {
    this.displayUser();
  },
   handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
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
  object-fit: cover;
}

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
