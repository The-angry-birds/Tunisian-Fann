<template>
  
    <div>
      <div class="row py-8 px-8">
        <div class="col-md-20 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    v-if="user.imageUrl"
                    :src="user.imageUrl"
                    alt="..."
                    width="250"
                    class="rounded mb-2 img-thumbnail"
                  />
                  <button
                    href="#"
                    class="btn btn-outline btn-sm btn-block"
                    data-toggle="modal"
                    data-target="#editImage"
                  >
                    Edit image
                  </button>

                  <button
                    href="#"
                    class="btn btn-outline btn-sm btn-block"
                    data-toggle="modal"
                    data-target="#editArtwork"
                  >
                    Edit profile
                  </button>
                </div>
                <div class="media-body mb-5 text-black">
                  <h4 class="mt-0 mb-0">
                    {{ user.firstName }} {{ user.lastName }}
                  </h4>
                </div>
              </div>
            </div>
            <div
              class="p-4 d-flex justify-content-end text-center"
              id="heading"
            ></div>
            <div class="px-3 py-4">
              <h5 class="mb-4">About</h5>
              <div class="p-4 rounded shadow-sm" id="info-card">
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
                            v-model="title"
                            type="title"
                            class="form-control"
                            id="Title"
                            aria-describedby="title"
                            placeholder="Title"
                          />
                          <label class="labels" for="ImageURL">Image URL</label>
                          <input
                            v-model="url"
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
                            v-model="details"
                            type="description"
                            class="form-control"
                            id="Description"
                            aria-describedby="description"
                            placeholder="Description"
                          />
                          <label class="labels" for="Price">Price</label>
                          <input
                            v-model="price"
                            type="number"
                            class="form-control"
                            id="Price"
                            aria-describedby="price"
                            placeholder="Price"
                          />
                          <div>
                            <select class="btn-group" v-model="nameOfCategory">
                              <option value="" selected>Category</option>

                              <option
                                class="m-2"
                                v-for="category in categories"
                                :key="category.id"
                              >
                                {{ category.name }}
                              </option>
                            </select>
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
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click.prevent="handleSubmitArtwork()"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <card
                    class="artwork-card"
                    v-for="(artwork, i) in artworks"
                    :key="i"
                  >
                    <img class="img-card" :src="artwork.imageUrl" />
                    <p class="card-category">{{ artwork.description }}</p>
                    <h3 class="card-title">{{ artwork.nameArtwork }}</h3>
                    <h6 class="card-price">{{ artwork.price }} dt</h6>
                    <div class="card-by">
                      by
                      <p class="card-author">
                        {{ user.firstName }}{{ user.lastName }}
                      </p>
                    </div>
                    <div>
                      <button
                        class="card-btn"
                        data-toggle="modal"
                        data-target="#editModal"
                        @click.prevent="setCurrentId(artwork.id, artwork)"
                      >
                        Edit
                      </button>
                      <button
                        class="card-btn"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        @click.prevent="setCurrentId(artwork.id, artwork)"
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
                                  value="artwork.title"
                                  v-model="art.title"
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
                                  v-model="art.url"
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
                                  v-model="art.description"
                                  type="description"
                                  class="form-control"
                                  id="Description"
                                  aria-describedby="description"
                                  placeholder="Description"
                                />
                                <label class="labels" for="Price">Price</label>
                                <input
                                  v-model="art.price"
                                  type="number"
                                  class="form-control"
                                  id="Price"
                                  aria-describedby="price"
                                  placeholder="Price"
                                />
                                <div>
                                  <select
                                    class="btn-group"
                                    v-model="nameOfCategory"
                                  >
                                    <option value="" selected>Category</option>

                                    <option
                                      class="m-2"
                                      v-for="category in categories"
                                      :key="category.id"
                                    >
                                      {{ category.name }}
                                    </option>
                                  </select>
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
                            <button
                              type="button"
                              class="btn btn-primary"
                              @click.prevent="handleUpdate()"
                            >
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
                            <button
                              type="button"
                              class="btn btn-danger"
                              @click.prevent="handleDelete()"
                            >
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

            <!-- //EDIT INFO -->
            <div
              class="modal fade"
              id="editArtwork"
              tabindex="-1"
              role="dialog"
              aria-labelledby="editArtworkLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editArtworkLabel">
                      Edit your information
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
                        <label class="labels" for="firstName">First name</label>
                        <input
                          value="artwork.title"
                          v-model="user.firstName"
                          type="title"
                          class="form-control"
                          id="firstName"
                          aria-describedby="title"
                          placeholder="first name"
                        />
                        <label class="labels" for="lastName">Last name</label>
                        <input
                          v-model="user.lastName"
                          type="title"
                          class="form-control"
                          id="lastName"
                          aria-describedby="lastName"
                          placeholder="last name"
                        />
                        <label class="labels" for="bio">Biography</label>
                        <input
                          v-model="user.description"
                          type="description"
                          class="form-control"
                          id="bio"
                          aria-describedby="description"
                          placeholder="your biography"
                        />
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="handleSubmit()"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- ///edit image/ -->
            <div
              class="modal fade"
              id="editImage"
              tabindex="-1"
              role="dialog"
              aria-labelledby="editImageLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editImageLabel">
                      Upload your image
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
                        <label class="labels" for="ImageURL">Image URL</label>
                        <input
                          type="file"
                          ref="file"
                          id="ImageURL"
                          v-on:change="handleFileUpload()"
                        />
                        <label id="image-load" for="actual-btn"></label>
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="onsubmit()"
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
  
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      description: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      title: "",
      details: "",
      price: null,
      url: "",
      nameOfCategory: "",
      categories: [],
      artworks: [],
      user: {},
      currentId: null,
      art: {},
    };
  },
  // components: {
  //   NavBar,
  // },
  methods: {
    //to edit the artist information like firstName and image
    handleSubmit() {
      // const data = {
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   description: this.description,
      //   imageUrl: this.imageUrl,
      // };
      console.log("=====user", this.user);
      axios
        .put(
          `http://localhost:3000/api/auth/artists/${this.user.id}`,
          this.user
        )
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
              console.log("USERBEFORE", this.user);
              this.user = data.user;
              console.log("USERAFTER", this.user);
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
          console.log("====", this.user.imageUrl);
        })
        .catch((err) => console.log(err));
    },
    onsubmit() {
      if (this.imageUrl) {
        axios
          .patch(
            "http://localhost:3000/api/auth/artists/upload/" + this.user.id,
            {
              image: this.imageUrl,
            }
          )
          .then(({ data }) => {
            console.log("===", data);
            const token = localStorage.getItem("token");
            const headers = { headers: { Authorization: `Bearer ${token}` } };
            axios
              .get("http://localhost:3000/api/auth/artists", headers)
              .then(({ data }) => {
                console.log("USERBEFORE", this.user);
                this.user = data.user;
                console.log("USERAFTER", this.user);
              });
          });
      }
    },
    //to upload the image

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
      console.log("======object", {
        artist_id: this.getArtist.id,
        nameArtwork: this.title,
        description: this.details,
        imageUrl: this.url,
        price: this.price,
        categoryName: this.nameOfCategory,
      });
      axios
        .post("http://localhost:3000/api/artworks", {
          nameArtwork: this.title,
          description: this.details,
          imageUrl: this.url,
          price: this.price,
          artist_id: this.getArtist.id,
          categoryName: this.nameOfCategory,
        })
        .then(({ data }) => {
          console.log("created", data);
          this.getAllArtworks();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Artwork has been created",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setCurrentId(id, art) {
      this.art = art;
      this.currentId = id;
      console.log("deletd", this.currentId);
    },
    handleDelete() {
      axios
        .delete(`http://localhost:3000/api/artworks/${this.currentId}`)
        .then(({ response }) => {
          this.getAllArtworks();
          console.log("deleted", response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Artwork has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    handleUpdate() {
      axios
        .put(`http://localhost:3000/api/artworks/${this.currentId}`, this.art)
        .then((response) => {
          console.log("heyyyyyy", response.statusText);
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
  padding-top: 50px;
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
  height: 490px;
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
  border: 2px solid black;
  transition: 0.5s;
  font-size: 12px;
  font-weight: bold;
  position:relative
}
.add-artwork-btn:hover {
  color: white;
  background-color: black;
}
.labels {
  margin-top: 30px;
}
.btn-group {
  margin-top: 25px;
  text-align: center;
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: 0.5s;
  padding-left: 30px;
  border-radius: 5px;
}
.btn-group:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
