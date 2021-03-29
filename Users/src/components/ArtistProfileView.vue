<template>
  <div>
    <div class="row py-8 px-8">
      <div class="col-md-20 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  src="https://apollo.imgix.net/content/uploads/2019/08/5d5c68a43f00005c005b1927.jpeg?auto=compress,format&w=900&h=600"
                  alt="..."
                  width="250"
                  class="rounded mb-2 img-thumbnail"
                />
              </div>
              <div class="media-body mb-5 text-black">
                <h4 class="mt-0 mb-0">Artist Artist</h4>
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
              <p class="font-italic mb-0">Artist biography</p>
            </div>
          </div>
          <!-- //ARTWORKS SECTION -->
          <div class="px-3 py-4">
            <h5 class="mb-4">Artworks</h5>
            <div class="p-4 rounded shadow-sm" id="artworks">
              <div class="card-container">
                <div class="container">
                  <!-- Top Navigation -->
                  <div class="content">
                    <div class="grid">
                      <figure class="effect-ravi">
                        <img
                          id="card-image"
                          src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/the-fallen-artwork-by-bensalem-walid.png"
                        />
                        <figcaption>
                          <div>
                            <h2 id="card-title">Refuge</h2>
                            <p id="card-desc">
                              Whatever whatever whatever whatever
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                      <figure class="effect-ravi">
                        <img
                          id="card-image"
                          src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/the-dancer-in-red-artwork-by-bensalem-walid.png"
                        />
                        <figcaption>
                          <div>
                            <h2 id="card-title">The Dancer In Red</h2>
                            <p id="card-desc">
                              Whatever whatever whatever whatever
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-3 py-4">
            <h5 class="mb-4">Auctions</h5>
            <div class="p-4 rounded shadow-sm" id="auctions">
              <SingleAuction/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleAuction from "./SingleAuction";

export default {

  components: {
    SingleAuction,
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


.grid {
  position: relative;
  margin: 0 auto;
  padding: 1em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
}
/* Common style */

.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 480px;
  max-width: 480px;
  max-height: 280px;
  width: 48%;
  background: #000000;
  text-align: center;
  cursor: pointer;
}

.grid figure #card-image {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */

.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure #card-title {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure #card-title {
  font-weight: 800;
}

.grid figure #card-title,
.grid figure #card-desc {
  margin: 0;
}

.grid figure #card-desc {
  letter-spacing: 1px;
  font-size: 68.5%;
}

figure.effect-ravi #card-image {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

figure.effect-ravi figcaption {
  text-align: left;
}

figure.effect-ravi figcaption > div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  height: 50%;
}

figure.effect-ravi #card-title,
figure.effect-ravi #card-desc {
  -webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
}

figure.effect-ravi #card-title {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-ravi #card-desc {
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

figure.effect-ravi:hover #card-image,
figure.effect-ravi:hover #card-desc {
  opacity: 1;
}

figure.effect-ravi:hover #card-image,
figure.effect-ravi:hover #card-title,
figure.effect-ravi:hover #card-desc {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-ravi:hover #card-desc {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}

@media screen and (max-width: 50em) {
  .content {
    padding: 0 10px;
    text-align: center;
  }
  .grid figure {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}

#auctions {
  background-color: #fdf5e6;
}

</style>
