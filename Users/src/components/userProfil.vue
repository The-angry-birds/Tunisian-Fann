<template>
  <div>
    <NavBar></NavBar>
    
    <div class="row py-5 px-4" id='profilContainer'>
      <div class="col-md-5 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <button class="logout-btn" @click.prevent="handleClick()">Logout</button>
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
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
}
#userInfos {
 
  margin-top: 40px;
}
.profile-head {
  transform: translateY(5rem);
  
}

.cover {
  background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
}

#logout-btn {
  color: white;
}

</style>
