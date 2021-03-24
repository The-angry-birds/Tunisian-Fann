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
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
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
</style> 