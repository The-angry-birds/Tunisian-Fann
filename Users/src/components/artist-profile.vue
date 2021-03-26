<template>
  <div>
    <NavBar></NavBar>
    <div>
      <div class="row py-8 px-8 ">
        <div class="col-md-20 mx-auto">
          <!-- Profile widget -->
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    v-if="user.imageUrl"
                    :src="user.imageUrl"
                    alt="..."
                    width="130"
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
                  <h4 class="mt-0 mb-0">{{ user.firstName }}</h4>
                  <p class="small mb-4">
                    {{ user.lastName }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="p-4 d-flex justify-content-end text-center"
              id="heading"
            ></div>
            <div class="px-3 py-4">
              <h5 class="mb-4">About</h5>
              <div class="p-4 rounded shadow-sm " id="info-card">

                <p class="font-italic mb-0">{{ user.description }}</p>
              </div>
            </div>
            <!-- //ARTWORKS SECTION -->
            <div class="px-3 py-4">
              <h5 class="mb-4">My Artworks</h5>
              <div class="p-4 rounded shadow-sm" id="artworks">
                <button
                  class="add-artwork-btn"
                  data-toggle="modal"
                  data-target="#addModal"
                >
                  Add Artwork
                </button>
                <!-- Add Modal -->
                <div
                  class="modal fade"
                  id="addModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="addModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel">
                          Add Artwork
                        </h5>
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
                          <label class="labels" for="Title">Title</label>
                          <input
                            type="title"
                            class="form-control"
                            id="Title"
                            aria-describedby="title"
                            placeholder="Title"
                          />
                          <label class="labels" for="ImageURL">Image URL</label>
                          <input
                            type="imageurl"
                            class="form-control"
                            id="ImageURL"
                            aria-describedby="imageurl"
                            placeholder="Image URL"
                          />
                          <label class="labels" for="Description"
                            >Description</label
                          >
                          <input
                            type="description"
                            class="form-control"
                            id="Description"
                            aria-describedby="description"
                            placeholder="Description"
                          />
                          <label class="labels" for="Price">Price</label>
                          <input
                            type="price"
                            class="form-control"
                            id="Price"
                            aria-describedby="price"
                            placeholder="Price"
                          />
                          <div class="btn-group">
                            <b-dropdown
                              split
                              split-variant="secondary"
                              variant="secondary"
                              text="Category"
                              class="m-2"
                            >
                              <b-dropdown-item href="#"
                                >Paintings</b-dropdown-item
                              >
                              <b-dropdown-item href="#"
                                >Digital Paintings</b-dropdown-item
                              >
                              <b-dropdown-item href="#"
                                >Sculptures</b-dropdown-item
                              >
                            </b-dropdown>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <card class="artwork-card">
                    <img
                      class="img-card"
                      src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/moments-artwork-by-bensalem-walid.png"
                    />
                    <p class="card-category">Digital Paintings</p>
                    <h3 class="card-title">Moments</h3>
                    <h6 class="card-price">570 DT</h6>
                    <div class="card-by">
                      by
                      <p class="card-author">Bensalem Walid</p>
                    </div>
                    <div>
                      <button
                        class="card-btn"
                        data-toggle="modal"
                        data-target="#editModal"
                      >
                        Edit
                      </button>
                      <button
                        class="card-btn"
                        data-toggle="modal"
                        data-target="#deleteModal"
                      >
                        Delete
                      </button>
                    </div>
                    <!-- Edit Modal -->
                    <div
                      class="modal fade"
                      id="editModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="editModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">
                              Edit Artwork
                            </h5>
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
                            <div class="modal-body">
                              <form>
                                <label class="labels" for="Title">Title</label>
                                <input
                                  type="title"
                                  class="form-control"
                                  id="Title"
                                  aria-describedby="title"
                                  placeholder="Title"
                                />
                                <label class="labels" for="ImageURL"
                                  >Image URL</label
                                >
                                <input
                                  type="imageurl"
                                  class="form-control"
                                  id="ImageURL"
                                  aria-describedby="imageurl"
                                  placeholder="Image URL"
                                />
                                <label class="labels" for="Description"
                                  >Description</label
                                >
                                <input
                                  type="description"
                                  class="form-control"
                                  id="Description"
                                  aria-describedby="description"
                                  placeholder="Description"
                                />
                                <label class="labels" for="Price">Price</label>
                                <input
                                  type="price"
                                  class="form-control"
                                  id="Price"
                                  aria-describedby="price"
                                  placeholder="Price"
                                />
                                <div class="btn-group">
                                  <b-dropdown
                                    split
                                    split-variant="secondary"
                                    variant="secondary"
                                    text="Category"
                                    class="m-2"
                                  >
                                    <b-dropdown-item href="#"
                                      >Paintings</b-dropdown-item
                                    >
                                    <b-dropdown-item href="#"
                                      >Digital Paintings</b-dropdown-item
                                    >
                                    <b-dropdown-item href="#"
                                      >Sculptures</b-dropdown-item
                                    >
                                  </b-dropdown>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Delete Modal -->
                    <div
                      class="modal fade"
                      id="deleteModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="deleteModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel">
                              Warning
                            </h5>
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
                            Are you sure you want to delete this artwork ?
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </card>
                </div>
              </div>
            </div>


                <p class="font-italic mb-0">{{ getArtist.description }}</p>

              </div>
            </div>
            <div class="py-4 px-4">
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <h5 class="mb-0">Edit profile</h5>

                <a href="#" class="btn btn-link text-muted">submit</a>

              </div>
              <!-- <div class="row">
              <form>
                <div class="row">
                  <div class="col">
                    <input
        v-model="firstName"


                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div> -->
                  <div class="col">
                    <input

                      v-model="lastName"


                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>

                  <div>
                    <b-form-textarea
                      id="textarea"
                      v-model="description"
                      placeholder="Enter your bio ..."
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>


            <!-- //EDIT INFO -->
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
                      <div class="row">
                        <div class="col">
                          <input
                            v-model="firstName"
                            type="text"
                            class="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div class="col">
                          <input
                            v-model="lastName"
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                          />
                        </div>
                        <div>
                          <b-form-textarea
                            id="textarea"
                            v-model="description"
                            placeholder="Enter your bio ..."
                            rows="3"
                            max-rows="6"
                          ></b-form-textarea>

                          <pre class="mt-3 mb-0">{{ description }}</pre>
                        </div>
                        <input
                          type="file"
                          ref="file"
                          id="actual-btn"
                          v-on:change="handleFileUpload()"
                          hidden
                        />
                        <label id="image-load" for="actual-btn"
                          >No image chosen</label
                        >
                        <!-- <input
                            class="ui button"
                            type="file"
                            id="file"
                            ref="file"
                            v-on:change="handleFileUpload()"
                          /> -->
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      id="submitbtn"
                      type="button"
                      class="btn btn-outline-dark btn-sm  btn-block"
                      data-dismiss="modal"
                      @click.prevent="handleSubmit()"
                    >
                      Submit
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavBar from "./NavBar.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      description: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      categories: [],
      artworks: [],
      user: {},
    };

  },

  methods: {
    //to edit the artist information like firstName and image
    handleSubmit() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        image: this.imageUrl,
      };
      axios
        .put(`http://localhost:3000/api/auth/artists/${this.user.id}`, data)
        .then(({ data }) => {
          console.log("this is my update", data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your profile has been edited",
            showConfirmButton: false,
            timer: 1500,
          });
          const token = localStorage.getItem("token");
          const headers = { headers: { Authorization: `Bearer ${token}` } };
          axios
            .get("http://localhost:3000/api/auth/artists", headers)
            .then(({ data }) => {
              console.log("data", data.user);
              this.user = data.user;
            });
        });
    },
    //to upload the image cloudinary
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      // console.log(this.file);
      // Change the src attribute of the image to path
      const image = new FormData();
      image.append("file", this.file);
      image.append("upload_preset", "d4oqyy96");
      axios
        .post("https://api.cloudinary.com/v1_1/dwpdokwag/image/upload", image)
        .then(({ data }) => {
          // console.log("imageId", data.url);
          this.imageUrl = data.url;
        })
        .catch((err) => console.log(err));
    },
    //to fetch all the categories
    getCategories() {
      axios.get("http://localhost:3000/api/categories").then(({ data }) => {
        this.categories = data;
      });
    },
    //to fetch the artworks of that specific artist
    getAllArtworks() {
      axios.get("http://localhost:3000/api/artworks").then(({ data }) => {
        const artworks = data.filter((elem) => {
          return elem.artist_id === this.getArtist.id;
        });
        this.artworks = artworks;
      });
    },
    handleSubmitArtwork() {
      axios
        .post("http://localhost:3000/api/artworks ", {
          artist_id: this.$data.data.id,
          nameArtwork: this.title,
          description: this.description,
          imageUrl: this.url,
          price: this.price,
          categoryName: this.name,
        })
        .then(({ data }) => {
          console.log("created", data);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Artwork has been created",
            showConfirmButton: false,
            timer: 1500,
          }).catch((err) => {
            console.log(err);
          });
        });
    },
  },


  computed: {
    //it returns the user that is actually logged in
    getArtist() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    this.getCategories();
    this.getAllArtworks();
    this.user = this.$store.state.auth.user;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");
* {
  font-family: "Lexend", sans-serif;
}
.profile-head {
  transform: translateY(5rem);
}

.cover {
  background-color: #fdf5e6;
  background-size: cover;
  background-repeat: no-repeat;
}

#heading {
  padding: 30px !important;
  background-color: #fdf5e6;
}
#info-card {
  background-color: #fdf5e6;
}

#submitbtn {
  width: 120px;
  margin: auto;
  margin-top: 20px;
}

image-load {
  background-color: black;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  /* margin: auto; */
  width: 90px;
  margin-left: 15px;
}
#artworks {
  background-color: #fdf5e6;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}
.artwork-card {
  font-family: "Lexend", sans-serif;
  margin: 22px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 300px;
  height: 450px;
  background-color: white;
}
.card-category {
  padding-left: 20px;
  padding-top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}
.card-title {
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.card-price {
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.card-by {
  padding-left: 20px;
  font-size: 12px;
  display: flex;
  flex-wrap: nowrap;
}
.card-author {
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
  margin-left: 3px;
}
.img-card :hover {
  opacity: 0.5;
}
.img-card {
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.card-btn {
  margin-left: 5%;
  /* margin-left: 225px; */
  width: 42.5%;
  height: 30px;
  /* border-radius: 5px; */
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid black;
  transition: all 0.4s;
}
.card-btn:hover {
  background-color: black;
  color: white;
}
.add-artwork-btn {
  font-family: "Lexend", sans-serif;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  width: 80px;
  height: 80px;
  position: absolute;
  right: 5%;
  bottom: 20%;
  border: 2px solid black;
  transition: 0.5s;
  font-size: 12px;
  font-weight: bold;
}
.add-artwork-btn:hover {
  color: white;
  background-color: black;
}
.labels {
  margin-top: 30px;
}

</style>
