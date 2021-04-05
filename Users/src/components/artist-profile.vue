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
                <h4 class="mt-0 mb-0" id="main">
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
              <!-- button for adding artworks -->
              <button
                class="add-artwork-btn"
                data-toggle="modal"
                data-target="#addModal"
              >
                Add Artwork
              </button>
              <br />
              <!-- add auctions -->
              <div
                class="modal fade"
                id="addAuctions"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="addModalLabel">
                        Add Auction
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
                        <label class="labels" for="startDate"
                          >Start-Date
                        </label>
                        <input
                          v-model="startDate"
                          class="form-control"
                          type="datetime-local"
                          id="startDate"
                          name="dates"
                        />
                        <label class="labels" for="endDate">End-Date </label>
                        <input
                          auto-submit="true"
                          v-model="endDate"
                          class="form-control"
                          type="datetime-local"
                          id="endDate"
                          name="dates"
                        />

                        <label class="labels" for="Price">Starting-Price</label>
                        <input
                          auto-submit="true"
                          v-model="starting_price"
                          type="number"
                          class="form-control"
                          id="Price"
                          aria-describedby="price"
                          placeholder="Starting-price"
                        />
                        <div>
                          <select class="btn-group" v-model="title">
                            <option value="" selected>Artworks</option>

                            <option
                              :value="artwork.id"
                              class="m-2"
                              v-for="artwork in artworks"
                              :key="artwork.id"
                            >
                              {{ artwork.nameArtwork }}
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
                        @click.prevent="handleSubmitAuction()"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- add auctions -->
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
                        <label class="labels" for="ImageURL">Image</label>
                        <input
                          type="file"
                          ref="addfile"
                          id="ImageURL"
                          v-on:change="handleArtworkUpload()"
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
                  <h3 class="card-title">{{ artwork.nameArtwork }}</h3>
                  <p class="card-category">
                    {{ artwork.description.substr(0, 10) }}...
                  </p>

                  <h6 class="card-price">{{ artwork.price }} dt</h6>
                  <div class="card-by">
                    by
                    <p class="card-author" id="hey">
                      {{ user.firstName }} {{ user.lastName }}
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
                                v-model="art.nameArtwork"
                                type="title"
                                class="form-control"
                                id="Title"
                                aria-describedby="title"
                                placeholder="Title"
                              />
                              <label class="labels" for="edit">Image URL</label>
  
                              <input
                                type="file"
                                ref="editfile"
                                id="edit"
                                v-on:change="ines()"
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
                            @click.prevent="handleUpdate(nameOfCategory)"
                          >
                            Submit edit
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
          <div class="px-3 py-4">
            <h5 class="mb-4">My Auctions</h5>
            <div class="p-4 rounded shadow-sm" id="auctions">
              <!-- button for adding auctions -->
              <button
                class="add-artwork-btn"
                data-toggle="modal"
                data-target="#addAuctions"
              >
                Add Auctions
              </button>
              <div class="container" style="margin-top: -80px">
                <ArtistAuction
                  :auction="auction"
                  v-for="(auction, i) in auctionData"
                  :key="i"
                />
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
                      <label class="labels" for="firstName">FirstName</label>
                      <input
                        value="artwork.title"
                        v-model="user.firstName"
                        type="title"
                        class="form-control"
                        id="firstName"
                        aria-describedby="title"
                        placeholder="FirstName..."
                      />
                      <label class="labels" for="lastName">LastName</label>
                      <input
                        v-model="user.lastName"
                        type="title"
                        class="form-control"
                        id="lastName"
                        aria-describedby="lastName"
                        placeholder="LastName..."
                      />
                      <label class="labels" for="bio">Biography</label>
                      <input
                        v-model="user.description"
                        type="description"
                        class="form-control"
                        id="bio"
                        aria-describedby="description"
                        placeholder="Your biography..."
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
                      <label class="labels" for="ImageURL">Image</label>
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
import ArtistAuction from "./ArtistAuction";

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
      startDate: "",
      endDate: "",
      starting_price: "",
      auctions: {},
      artworkAuctions: {},
      auctionData: {},
      category: {},
    };
  },
  components: {
    ArtistAuction,

    // Auctions,
  },
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
          Swal.fire({position: "top-end",
            icon: "success",
            title: "Your profile has been edited!",
            showConfirmButton: false,
            timer: 1500,
          });
          const token = localStorage.getItem("token");
          const headers = { headers: { Authorization: `Bearer ${token}` } };
          axios
            .get("http://localhost:3000/api/auth/artists", headers)
            .then(({ data }) => {
              // console.log("USERBEFORE", this.user);
              this.user = data.user;
              // console.log("USERAFTER", this.user);
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
          // console.log("====", this.user.imageUrl);
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
                // console.log("USERBEFORE", this.user);
                this.user = data.user;
                // console.log("USERAFTER", this.user);
              });
          });
      }
    },
    handleArtworkUpload() {
      this.addfile = this.$refs.addfile.files[0];
      let image = new FormData();
      image.append("file", this.addfile);
      image.append("upload_preset", "d4oqyy96");
      axios
        .post("https://api.cloudinary.com/v1_1/dwpdokwag/image/upload", image)
        .then(({ data }) => {
          console.log("imageId", data.url);
          this.url = data.url;
        })
        .catch((err) => console.log(err));
    },

    ines() {
      if (this.$refs.editfile.files) {
        this.editfile = this.$refs.editfile.files[0];
        let image = new FormData();
        image.append("file", this.editfile);
        image.append("upload_preset", "d4oqyy96");
        axios
          .post("https://api.cloudinary.com/v1_1/dwpdokwag/image/upload", image)
          .then(({ data }) => {
            console.log("imageId", data.url);
            this.url = data.url;
          })
          .catch((err) => console.log(err));
      } else {
        console.log("check here ", this.$refs.editfile.files);
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
      // console.log("auctions", this.auctions);
      axios.get("http://localhost:3000/api/artworks").then(({ data }) => {
        const artworks = data.filter((elem) => {
          return elem.artist_id === this.user.id;
        });
        // console.log("artworrrrks", artworks);
        for (var i = 0; i < artworks.length; i++) {
          for (var j = 0; j < this.auctions.length; j++) {
            if (artworks[i].id === this.auctions[j].artwork_id) {
              artworks.splice(i, 1);
            }
          }
        }

        this.artworks = artworks;
      });
    },
    handleSubmitArtwork() {
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
            title: "Your artwork has been created!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.title = "";
          this.details = "";
          this.url = "";
          this.price = null;
          this.nameOfCategory = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setCurrentId(id, art) {
      this.art = art;
      this.currentId = id;
      // console.log("idddddd", this.currentId);
    },
    //this function deletes the artwork
    handleDelete() {
      axios
        .delete(`http://localhost:3000/api/artworks/${this.currentId}`)
        .then(({ response }) => {
          console.log("deleted", response);
          this.getAllArtworks();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your artwork has been deleted!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    handleUpdate(q) {
      console.log("myurll", this.url);
      console.log("arttttttttttt", this.art);
      axios
        .put(`http://localhost:3000/api/artworks/${this.currentId}`, {
          nameArtwork: this.art.nameArtwork,
          description: this.art.description,
          imageUrl: this.url,
          price: this.art.price,
          categoryName: q,
        })
        .then((response) => {
          this.art = response.data;
          console.log("updated", response);
        });
      // console.log("===Id", this.currentId, "hey you there", this.art);
    },
    //this function posts an auction
    handleSubmitAuction() {
      const auction = {
        id: this.title,
        artist_id: this.user.id,
        startDate: this.startDate,
        endDate: this.endDate,
        starting_price: this.starting_price,
      };

      axios
        .post("http://localhost:3000/api/auctions", auction)
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your auction has been added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("auction", response);
          this.title = "";
          this.startDate = "";
          this.endDate = "";
          this.starting_price = "";

          // // this.artworks = ne;
          // console.log("=======================================", this.artworks);
          this.getAllArtworks();
          this.getAuctions();
        });
    },
    // this function gives me back the auction and the artwork of that specific artist
    getAuctions() {
      axios
        .get(`http://localhost:3000/api/auctions/${this.getArtist.id}`)
        .then(({ data }) => {
          // console.log("======data", data);
          var myauctions = Object.values(data)[0];
          var myartworks = Object.values(data)[1];
          this.auctions = myauctions;
          //looping through the two arrays and assigning the object of the auction to the object of the artwork
          var mixdata = [];
          for (var i = 0; i < myauctions.length; i++) {
            for (var j = 0; j < myartworks.length; j++) {
              if (myartworks[j].id == myauctions[i].artwork_id) {
                var myObj = Object.assign(myartworks[j], myauctions[i]);
                mixdata.push(myObj);
              }
            }
          }
          this.getAllArtworks();
          this.auctionData = mixdata;
        })
        .then(() => {
          for (var x = 0; x < this.auctionData.length; x++) {
            axios
              .get(
                `http://localhost:3000/api/categories/${this.auctionData[x].category_id}`
              )
              .then(({ data }) => {
                console.log("categoryyyyyy", data);
                this.category = data;
              });
          }
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
    this.getAllArtworks();
    this.getAuctions();
    this.getCategories();

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
.nodata{
  margin-left: 45%;
  margin-top: 15%;
}
.img-thumbnail {
  max-width: 250px;
  max-height: 250px;
  min-width: 250px;
  min-height: 250px;
  object-fit: cover;
}
.cover {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
  background-size: cover;
  background-repeat: no-repeat;
}
#heading {
  padding: 30px !important;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
#info-card {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
#submitbtn {
  width: 120px;
  margin: auto;
  margin-top: 20px;
}
#artworks {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
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
  height: 485px;
  background-color: white;
}
.card-category {
  margin-top: 2px;
  padding-left: 20px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}
.card-title {
  padding-top: 20px;
  padding-left: 20px;
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
  color: #a08018;
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
  position: relative;
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
#auctions {
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgb(153, 153, 153)
  );
}
.container {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}
#main {
  text-transform: uppercase;
}
#hey {
  text-transform: uppercase;
}
h4 {
  font-weight: 700;
}
</style>