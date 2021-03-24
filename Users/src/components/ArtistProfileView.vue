<template>
  <div>
    <NavBar></NavBar>
    <div>
      <div class="row py-8 px-8">
        <div class="col-md-25 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    src="https://i.ibb.co/TkxhgdJ/nabil-elbir.jpg"
                    alt="#"
                    width="130"
                    class="rounded mb-2 img-thumbnail"
                  />
                </div>
                <div class="media-body mb-5 text-black">
                  <h4 class="mt-0 mb-0">Nabil Elbir</h4>
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
              <h5 class="mb-3">About</h5>
              <div class="p-4 rounded shadow-sm" id="info-card">
                <p class="font-italic mb-0">Related text</p>
                <p class="font-italic mb-0">Related text</p>
                <p class="font-italic mb-0">Related text</p>
              </div>
            </div>
            <div class="py-3 px-3">
              <h5 class="mb-3">Artworks</h5>
              <div
                class="p-4 rounded shadow-sm"
                id="artworks-cards"
                v-for="(artwork, i) in artworks"
                :key="i"
              >
                <div class="artwork-card">
                  <img class="card-img" v-bind:src="artwork.imageUrl" alt="#" />
                  <h3>{{ artwork.nameArtwork }}</h3>
                  <p>Digital Paintings</p>
                  <p>320 DT</p>
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
import NavBar from "./NavBar.vue";
import axios from "axios";
export default {
  data() {
    return {
      artworks: [],
    };
  },

  components: {
    NavBar,
  },
  methods: {
    getArtworks() {
      
      axios
        .get(`http://localhost:3000/api/artworks`)
        .then((res) => {
          this.artworks = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getArtworks();
  },
};
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
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
#artworks-cards {
  background-color: #fdf5e6;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}
.artwork-card {
  width: 300px;
  max-height: 380px;
  min-height: 380px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
}
.artwork-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-img {
  width: 100%;
  max-height: 240px;
  min-height: 240px;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 15px;
}
</style> 