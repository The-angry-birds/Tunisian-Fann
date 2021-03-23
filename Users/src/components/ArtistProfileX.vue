<template>
  <div>
    <NavBar></NavBar>
    <div>
      <div class="row py-8 px-8">
        <div class="col-md-25 mx-auto">
          <!-- Profile widget -->
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="#"
                    width="130"
                    class="rounded mb-2 img-thumbnail"
                  /><a href="#" class="btn btn-outline-dark btn-sm btn-block"
                    >Edit profile</a
                  >
                </div>
                <div class="media-body mb-5 text-black">
                  <h4 class="mt-0 mb-0">Mark Williams</h4>
                  <p class="small mb-4">
                    <i class="fas fa-map-marker-alt mr-2"></i>New York
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
                <p class="font-italic mb-0">Web Developer</p>
                <p class="font-italic mb-0">Lives in New York</p>
                <p class="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div class="py-3 px-3">
              <h5 class="mb-3">Artworks</h5>
              <div class="p-4 rounded shadow-sm" id="info-card">
                <div class="artwork-card">
                  <img
                    class="card-img"
                    src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/cry-baby-artwork-by-bensalem-walid.png"
                    alt="#"
                  />
                  <h3>Cry Baby</h3>
                  <p>Digital Paitings</p>
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
export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    NavBar,
  },
  methods: {},
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

.artwork-card {
  max-width: 240px;
  min-width: 240px;
  max-height: 400px;
  min-height: 400px;
  border: solid 1px black;
  
}
.card-img {
  width: 100%;
  max-height: 240px;
  min-height: 240px;
  object-fit: cover;
  
}
</style>