<template>
  <div>
    <div>
      <div class="row py-8 px-8">
        <div class="col-md-25 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                     v-if="user.imageUrl"
                    :src="user.imageUrl"
                    alt="#"
                    width="250"
                    class="rounded mb-2 img-thumbnail"
                  />
                  <button
                    href="#"
                    class="btn btn-outline btn-sm btn-block"
                    data-toggle="modal"
                    data-target="#Modal"
                  >
                    Edit profile
                  </button>
                </div>

                <div class="media-body mb-5 text-black">
                  <h4 class="mt-0 mb-0">
                    {{ user.firstName }} {{ user.lastName }}
                  </h4>
                  <p class="small mb-4">
                    <i class="fas fa-map-marker-alt mr-2"></i>Nabeul
                  </p>
                </div>
              </div>
            </div>
            <div
              class="p-4 d-flex justify-content-end text-center"
              id="heading"
            ></div>
            <div class="px-3 py-3">
              <h5 class="mb-3">Recent Bidding</h5>
              <div class="p-4 rounded shadow-sm" id="recent-bidding">
                <p class="font-italic mb-0">Bidding Example</p>
                <p class="font-italic mb-0">Bidding Example</p>
                <p class="font-italic mb-0">Bidding Example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL CONTENT -->

    <div
      class="modal fade"
      id="Modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Edit Profile</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="labels" for="Firstname">Firstname</label>
                <input
                  v-model="user.firstName"
                  type="firstname"
                  class="form-control"
                  id="Firstname"
                  aria-describedby="firstname"
                  placeholder="Firstname"
                />
                <label class="labels" for="Lastname">Lastname</label>
                <input
                  v-model="user.lastName"
                  type="lastname"
                  class="form-control"
                  id="Lastname"
                  aria-describedby="lastname"
                  placeholder="Lastname"
                />
              </div>

              <div class="file-field">
                <div class="mb-4">
                  <img
                    v-if="user.imageUrl"
                    :src="user.imageUrl"
                    id="btn-file"
                    class="rounded-circle z-depth-1-half avatar-pic"
                    alt="example placeholder avatar"
                  />
                </div>
                <div class="d-flex justify-content-center">
                  <div class="btn btn-mdb-color btn-rounded float-left">
                    <span>Add photo</span>
                  
                    <input v-on:change="handleFileUpload()" type="file" id="file" ref="file" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              @click.prevent="handleEdit()"
              type="button"
              class="btn-save"
              data-dismiss="modal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
   
      user: {},
      // show: false, 
    };
  },
  computed: {
    getUser() {
      console.log("iii", this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },
  methods: {
         handleFileUpload() {
      this.file = this.$refs.file.files[0]; 
      console.log("ahahaha", this.file);
      const image = new FormData();
      image.append("file", this.file);
      image.append("upload_preset", "fvzq7qqo");
      axios
        .post("https://api.cloudinary.com/v1_1/dkcwqbl9d/image/upload", image)
        .then(({ data }) => {
          console.log("imageId",this.user.imageUrl);
          this.user.imageUrl = data.url
           console.log("this.is user image :", this.user.imageUrl )
     
        })
        .catch((err) => console.log(err));
    },
      getdata(){
         const token= localStorage.getItem("token");
        
        axios.get("http://localhost:3000/api/users/getUserByToken",{
            headers: { authorization: `Bearer ${token}`}}).then(({ data }) => {
             this.user = data.user
             localStorage.setItem("id",this.user.id)
             console.log(" this is user",this.user )
     
        });
      },

    handleEdit() {
      axios
        .patch(`http://localhost:3000/api/users/${this.getUser.id}`,this.user)
        .then((response) => {
          console.log( 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',response);
              this.getdata()
        });
   
      
    },

  },
  mounted() {
    this.user = this.$store.state.auth.user;
     this.getdata()
  },
};
//   showelement() {
// mounted(){
// }
//     var h = this.show;
//     this.show = !h;
//   },
// handleEdit() {
//   axios
//     .patch(`http://localhost:3000/api/users/${this.data.id}`, this.data)
//     .then(() => {
//       console.log("sent");
//       this.displayUser();
//     })
//     .catch((err) => console.log(err));
// },
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.profile-head {
  transform: translateY(5rem);
  padding-top: 50px;
}
.cover {
  background-color: #fbeec1;
  background-size: cover;
  background-repeat: no-repeat;
}
#heading {
  padding: 30px !important;
  background-color: #fbeec1;
}
#recent-bidding {
  background-color: #fbeec1;
}
#Modal {
  margin-top: 60px;
  margin-left: 25%;
}
.labels {
  margin-top: 20px;
}
.btn-save {
  padding: 10px;
  color: grey;
}
.btn-save:hover {
  padding: 10px;
  color: black;
}
.rounded-circle.z-depth-1-half.avatar-pic{
    width: 30%;
    height: 8rem;
    margin-left: 10rem;
    margin-top: 1rem;
}
</style>