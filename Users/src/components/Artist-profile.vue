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
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="..."
                    width="130"
                    class="rounded mb-2 img-thumbnail"
                  /><a href="#" class="btn btn-outline-dark btn-sm btn-block"
                    >Edit image</a
                  >
                </div>
                <div class="media-body mb-5 text-black">
                  <h4 class="mt-0 mb-0">{{ getArtist.firstName }}</h4>
                  <p class="small mb-4">
                    {{ getArtist.lastName }}
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
                <p class="font-italic mb-0">Web Developer</p>
                <p class="font-italic mb-0">Lives in New York</p>
                <p class="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div class="py-4 px-4">
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <h5 class="mb-0">Edit profile</h5>
                <a href="#" class="btn btn-link text-muted">submit</a>
              </div>
              <!-- <div class="row"> -->
              <form>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </form>
              <!-- </div> -->
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
    return {};
  },
  components: {
    NavBar,
  },
  methods: {},
  computed: {
    getArtist() {
      console.log(this.$store.state.artist);
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
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
</style>
