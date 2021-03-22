<template>
  <div>
    <NavBar />
    <!-- <nav
      class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "
      color-on-scroll="100"
      id="sectionsNav"
    > -->
    <div class="container">
      <div class="navbar-translate">
        <!-- <a
            class="navbar-brand"
            href="https://demos.creative-tim.com/material-kit/index.html"
            target="_blank"
            >Material Kit
          </a> -->
        <!-- <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > -->
        <!-- <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button> -->
      </div>

      <div class="collapse navbar-collapse">
        <!-- <ul class="navbar-nav ml-auto">
          <li class="dropdown nav-item">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons">apps</i> Components
            </a>
            <div class="dropdown-menu dropdown-with-icons component">
              <a href="../index.html" class="dropdown-item">
                <i class="material-icons">layers</i> All Components
              </a>

              <a
                href="https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html"
                class="dropdown-item"
              >
                <i class="material-icons">content_paste</i> Documentation
              </a>
            </div>
          </li> -->
        <!-- <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                <i class="material-icons">cloud_download</i> Download
              </a>
            </li> -->
        <!-- <li class="nav-item">
              <a
                class="nav-link"
                href="https://twitter.com/CreativeTim"
                target="_blank"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </li> -->
        <!-- <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i class="fa fa-facebook-square"></i>
              </a>
            </li> -->
        <!-- <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </li> -->
        <!-- </ul> -->
      </div>
    </div>
    <!-- </nav> -->

    <div
      class="page-header header-filter"
      data-parallax="true"
      style="background-image:url('http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png');"
    ></div>
    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile">
                <div class="avatar" v-if="data.imageUrl">
                  <img
                    :src="data.imageUrl"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ data.firstName.toUpperCase() }}</h3>
                  <input
                    class="ui button"
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                  />
                  <div>
                    <button
                      id="submit-image"
                      class="ui grey basic button"
                      @click.prevent="onsubmit()"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <h6>Designer</h6>
                  <!-- <a
                    href="#pablo"
                    class="btn btn-just-icon btn-link btn-dribbble"
                    ><i class="fa fa-dribbble"></i
                  ></a>
                  <a
                    href="#pablo"
                    class="btn btn-just-icon btn-link btn-twitter"
                    ><i class="fa fa-twitter"></i
                  ></a>
                  <a
                    href="#pablo"
                    class="btn btn-just-icon btn-link btn-pinterest"
                    ><i class="fa fa-pinterest"></i
                  ></a> -->
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center" v-if="data.description">
            <p>
              {{ data.description }}
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile-tabs">
                <ul
                  class="nav nav-pills nav-pills-icons justify-content-center"
                  role="tablist"
                >
                  <li class="nav-item" @click="getArtworks(categories[0].id)">
                    <a
                      class="nav-link active"
                      href="#studio"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="material-icons">camera</i>
                      {{ categories[0].name }}
                    </a>
                  </li>
                  <li class="nav-item" @click="getArtworks(categories[1].id)">
                    <a
                      class="nav-link"
                      href="#works"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="material-icons">palette</i>
                      {{ categories[1].name }}
                    </a>
                  </li>
                  <li class="nav-item" @click="getArtworks(categories[2].id)">
                    <a
                      class="nav-link"
                      href="#favorite"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="material-icons">favorite</i>
                      {{ categories[2].name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="tab-content tab-space">
            <div class="tab-pane active text-center gallery" id="studio">
              <div class="row">
                <div
                  class="col-md-3 ml-auto"
                  v-for="(element, i) in artworks"
                  :key="i"
                >
                  <img
                    :src="artworks[i].imageUrl"
                    class="rounded artwork-image"
                  />
                </div>
                <!-- <div class="centered">Centered gfhggkhlh</div> -->
              </div>
            </div>
            <div class="tab-pane text-center gallery" id="works">
              <div class="row">
                <div
                  class="col-md-3 ml-auto"
                  v-for="(element, i) in artworks"
                  :key="i"
                >
                  <img
                    :src="artworks[i].imageUrl"
                    class="rounded artwork-image"
                  />
                </div>
              </div>
            </div>
            <div class="tab-pane text-center gallery" id="favorite">
              <div class="row">
                <div
                  class="col-md-3 ml-auto"
                  v-for="(element, i) in artworks"
                  :key="i"
                >
                  <img
                    :src="artworks[i].imageUrl"
                    class="rounded artwork-image"
                  />
                  <!-- <img
                    src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80"
                    class="rounded"
                  /> -->
                </div>
                <!-- <div class="col-md-3 mr-auto">
                  <img
                    src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80"
                    class="rounded"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                    class="rounded"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                    class="rounded"
                  />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form class="ui form" id="artwork">
          <h4 class="ui dividing header">Fill your artwork</h4>
          <div class="field">
            <label>Title</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              v-model="title"
            />
          </div>
          <div class="field">
            <label>Url</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              v-model="url"
            />
          </div>
          <div class="field">
            <label>Price</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              v-model="price"
            />
          </div>
          <div class="field">
            <label>Description</label>
            <textarea v-model="description"></textarea>
          </div>
          <select class="ui dropdown" v-model="name">
            <option value="" selected>Category</option>

            <option v-for="category in categories" :key="category.id">
              {{ category.name }}</option
            >
          </select>
          <div id="create">
            <button
              class="ui grey basic button"
              @click.prevent="handleSubmit()"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="footer text-center ">
      <p>Hello there</p>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import noUiSlider from "nouislider";
import NavBar from "./NavBar.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      data: [],
      imageUrl: "",
      title: "",
      url: "",
      price: null,
      description: "",
      name: "",
      state: false,
      categories: [],
      artworks: [],
    };
  },
  components: {
    NavBar,
  },
  methods: {
    getUser() {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/auth/artists", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          this.$data.data = data;
          console.log("iiiiiii", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      // Change the src attribute of the image to path
      const image = new FormData();
      image.append("file", this.file);
      image.append("upload_preset", "d4oqyy96");
      axios
        .post("https://api.cloudinary.com/v1_1/dwpdokwag/image/upload", image)
        .then(({ data }) => {
          console.log("imageId", data.url);
          this.$data.imageUrl = data.url;
          console.log("===>", this.$data.imageUrl);
        })
        .catch((err) => console.log(err));
    },
    onsubmit() {
      if (this.imageUrl) {
        axios
          .patch(
            "http://localhost:3000/api/auth/artists/upload/" +
              this.$data.data.id,
            {
              image: this.$data.imageUrl,
            }
          )
          .then(({ data }) => {
            console.log("===", data);
          });
      }
    },
    handleSubmit() {
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
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          }).catch((err) => {
            console.log(err);
          });
        });
    },
    getArtworks(id) {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/artworks/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          console.log("this is my dataQQQQQQQQQ", data);
          this.$data.artworks = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCategories() {
      axios.get("http://localhost:3000/api/categories").then(({ data }) => {
        this.categories = data;
        console.log("====", this.categories);
      });
    },
  },

  beforeMount() {
    this.getUser();
    this.getCategories();
    this.getArtworks(1);
  },
};
$(function($) {
  var big_image;

  $(document).ready(function() {
    BrowserDetect.init();

    // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
    $("body").bootstrapMaterialDesign();

    var window_width = $(window).width();

    var $navbar = $(".navbar[color-on-scroll]");
    $navbar.attr("color-on-scroll") || 500;

    $(".navbar").find(".navbar-collapse");

    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    // Activate Popovers
    $('[data-toggle="popover"]').popover();

    if ($(".navbar-color-on-scroll").length != 0) {
      $(window).on("scroll", materialKit.checkScrollForTransparentNavbar);
    }

    materialKit.checkScrollForTransparentNavbar();

    if (window_width >= 768) {
      big_image = $('.page-header[data-parallax="true"]');
      if (big_image.length != 0) {
        $(window).on("scroll", materialKit.checkScrollForParallax);
      }
    }
  });

  $(document).on("click", ".navbar-toggler", function() {
    var $toggle = $(this);

    if (materialKit.misc.navbar_menu_visible == 1) {
      $("html").removeClass("nav-open");
      materialKit.misc.navbar_menu_visible = 0;
      $("#bodyClick").remove();
      setTimeout(function() {
        $toggle.removeClass("toggled");
      }, 550);

      $("html").removeClass("nav-open-absolute");
    } else {
      setTimeout(function() {
        $toggle.addClass("toggled");
      }, 580);

      var div = '<div id="bodyClick"></div>';
      $(div)
        .appendTo("body")
        .click(function() {
          $("html").removeClass("nav-open");

          if ($("nav").hasClass("navbar-absolute")) {
            $("html").removeClass("nav-open-absolute");
          }
          materialKit.misc.navbar_menu_visible = 0;
          $("#bodyClick").remove();
          setTimeout(function() {
            $toggle.removeClass("toggled");
          }, 550);
        });

      if ($("nav").hasClass("navbar-absolute")) {
        $("html").addClass("nav-open-absolute");
      }

      $("html").addClass("nav-open");
      materialKit.misc.navbar_menu_visible = 1;
    }
  });

  var materialKit = {
    misc: {
      navbar_menu_visible: 0,
      window_width: 0,
      transparent: true,
      fixedTop: false,
      navbar_initialized: false,
      isWindow: document.documentMode || /Edge/.test(navigator.userAgent),
    },

    initFormExtendedDatetimepickers: function() {
      $(".datetimepicker").datetimepicker({
        icons: {
          time: "fa fa-clock-o",
          date: "fa fa-calendar",
          up: "fa fa-chevron-up",
          down: "fa fa-chevron-down",
          previous: "fa fa-chevron-left",
          next: "fa fa-chevron-right",
          today: "fa fa-screenshot",
          clear: "fa fa-trash",
          close: "fa fa-remove",
        },
      });
    },

    initSliders: function() {
      // Sliders for demo purpose
      var slider = document.getElementById("sliderRegular");

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100,
        },
      });

      var slider2 = document.getElementById("sliderDouble");

      noUiSlider.create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100,
        },
      });
    },

    checkScrollForParallax: function() {
      var oVal = $(window).scrollTop() / 3;
      big_image.css({
        transform: "translate3d(0," + oVal + "px,0)",
        "-webkit-transform": "translate3d(0," + oVal + "px,0)",
        "-ms-transform": "translate3d(0," + oVal + "px,0)",
        "-o-transform": "translate3d(0," + oVal + "px,0)",
      });
    },

    checkScrollForTransparentNavbar: debounce(function() {
      var scroll_distance = 10;
      if ($(document).scrollTop() > scroll_distance) {
        if (materialKit.misc.transparent) {
          materialKit.misc.transparent = false;
          $(".navbar-color-on-scroll").removeClass("navbar-transparent");
        }
      } else {
        if (!materialKit.misc.transparent) {
          materialKit.misc.transparent = true;
          $(".navbar-color-on-scroll").addClass("navbar-transparent");
        }
      }
    }, 17),
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  var BrowserDetect = {
    init: function() {
      this.browser = this.searchString(this.dataBrowser) || "Other";
      this.version =
        this.searchVersion(navigator.userAgent) ||
        this.searchVersion(navigator.appVersion) ||
        "Unknown";
    },
    searchString: function(data) {
      for (var i = 0; i < data.length; i++) {
        var dataString = data[i].string;
        this.versionSearchString = data[i].subString;

        if (dataString.indexOf(data[i].subString) !== -1) {
          return data[i].identity;
        }
      }
    },
    searchVersion: function(dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index === -1) {
        return;
      }

      var rv = dataString.indexOf("rv:");
      if (this.versionSearchString === "Trident" && rv !== -1) {
        return parseFloat(dataString.substring(rv + 3));
      } else {
        return parseFloat(
          dataString.substring(index + this.versionSearchString.length + 1)
        );
      }
    },

    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome",
      },
      {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
      },
      {
        string: navigator.userAgent,
        subString: "Trident",
        identity: "Explorer",
      },
      {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox",
      },
      {
        string: navigator.userAgent,
        subString: "Safari",
        identity: "Safari",
      },
      {
        string: navigator.userAgent,
        subString: "Opera",
        identity: "Opera",
      },
    ],
  };
});
</script>

<style scoped>
html * {
  -webkit-font-smoothing: antialiased;
}

.h6,
h6 {
  font-size: 0.75rem !important;
  font-weight: 500;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5em;
  text-transform: uppercase;
}

.name h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.navbar {
  border: 0;
  border-radius: 3px;
  padding: 0.625rem 0;
  margin-bottom: 20px;
  color: #555;
  background-color: #fff !important;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.12),
    0 7px 10px -5px rgba(0, 0, 0, 0.15) !important;
  z-index: 1000 !important;
  transition: all 150ms ease 0s;
}

.navbar.navbar-transparent {
  z-index: 1030;
  background-color: transparent !important;
  box-shadow: none !important;
  padding-top: 25px;
  color: #fff;
}

.navbar .navbar-brand {
  position: relative;
  color: inherit;
  height: 50px;
  font-size: 1.125rem;
  line-height: 30px;
  padding: 0.625rem 0;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

.navbar .navbar-nav .nav-item .nav-link:not(.btn) .material-icons {
  margin-top: -7px;
  top: 3px;
  position: relative;
  margin-right: 3px;
}

.navbar .navbar-nav .nav-item .nav-link .material-icons {
  font-size: 1.25rem;
  max-width: 24px;
  margin-top: -1.1em;
}

.navbar .navbar-nav .nav-item .nav-link .fa,
.navbar .navbar-nav .nav-item .nav-link .material-icons {
  font-size: 1.25rem;
  max-width: 24px;
  margin-top: 0px;
}

.navbar .navbar-nav .nav-item .nav-link {
  position: relative;
  color: inherit;
  padding: 0.9375rem;
  font-weight: 400;
  font-size: 12px;
  border-radius: 3px;
  line-height: 20px;
}

a .material-icons {
  vertical-align: middle;
}

.fixed-top {
  position: fixed;
  z-index: 1030;
  left: 0;
  right: 0;
}

.profile-page .page-header {
  height: 380px;
  background-position: center;
}

.page-header {
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
}

.header-filter:after,
.header-filter:before {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
}

.header-filter::before {
  background: rgba(211, 177, 68, 0.582);

  margin-top: 10%;
}

.main-raised {
  margin: -60px 30px 0;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.main {
  background: #fff;
  position: relative;
  z-index: 3;
}

.profile-page .profile {
  text-align: center;
}

.profile-page .profile img {
  /* max-width: 160px; */
  width: 100%;
  margin: 0 auto;
  -webkit-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
  -o-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

.img-raised {
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.rounded-circle {
  border-radius: 80% !important;
}

.img-fluid,
.img-thumbnail {
  max-width: 80%;
  max-height: 80%;
  /* height: auto; */
}

.title {
  margin-top: 10px;
  margin-bottom: 40px;
  min-height: 32px;
  color: black;
  font-weight: 700;
  font-size: 50px;
  font-family: "Roboto Slab", "Times New Roman", serif;
}

.profile-page .description {
  margin: 1.071rem auto 0;
  max-width: 600px;
  color: #999;
  font-weight: 300;
}

p {
  font-size: 14px;
  margin: 0 0 10px;
}

.profile-page .profile-tabs {
  margin-top: 4.284rem;
}

.nav-pills,
.nav-tabs {
  border: 0;
  border-radius: 3px;
  padding: 0 15px;
}

.nav .nav-item {
  position: relative;
  margin: 0 2px;
}

.nav-pills.nav-pills-icons .nav-item .nav-link {
  border-radius: 4px;
}

.nav-pills .nav-item .nav-link.active {
  color: #fff;
  background-color: rgb(56, 56, 146);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgb(56, 56, 146);
}

.nav-pills .nav-item .nav-link {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  min-width: 100px;
  color: #555;
  transition: all 0.3s;
  border-radius: 30px;
  padding: 10px 15px;
  text-align: center;
}

.nav-pills .nav-item .nav-link:not(.active):hover {
  background-color: rgba(200, 200, 200, 0.2);
}

.nav-pills .nav-item i {
  display: block;
  font-size: 30px;
  padding: 15px 0;
}

.tab-space {
  padding: 20px 0 50px;
}

.profile-page .gallery {
  margin-top: 3.213rem;
  padding-bottom: 50px;
}

.profile-page .gallery img {
  width: 100%;
  margin-bottom: 2.142rem;
}

.profile-page .profile .name {
  margin-top: -80px;
}

img.rounded {
  border-radius: 6px !important;
}

.tab-content > .active {
  display: block;
}

/*buttons*/
.btn {
  position: relative;
  padding: 12px 30px;
  margin: 0.3125rem 1px;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.428571;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
  border: 0;
  border-radius: 0.2rem;
  outline: 0;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: box-shadow, transform;
}

.btn.btn-just-icon {
  font-size: 20px;
  height: 41px;
  min-width: 41px;
  width: 41px;
  padding: 0;
  overflow: hidden;
  position: relative;
  line-height: 41px;
}

.btn.btn-just-icon fa {
  margin-top: 0;
  position: absolute;
  width: 100%;
  transform: none;
  left: 0;
  top: 0;
  height: 100%;
  line-height: 41px;
  font-size: 20px;
}
.btn.btn-link {
  background-color: transparent;
  color: #999;
}

/* dropdown */

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 11rem !important;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-menu.show {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-menu .dropdown-item:focus,
.dropdown-menu .dropdown-item:hover,
.dropdown-menu a:active,
.dropdown-menu a:focus,
.dropdown-menu a:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(156, 39, 176, 0.4);
  background-color: #9c27b0;
  color: #fff;
}
.show .dropdown-toggle:after {
  transform: rotate(180deg);
}

.dropdown-toggle:after {
  will-change: transform;
  transition: transform 0.15s linear;
}

.dropdown-menu .dropdown-item,
.dropdown-menu li > a {
  position: relative;
  width: auto;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  color: #333;
  font-weight: 400;
  text-decoration: none;
  font-size: 0.8125rem;
  border-radius: 0.125rem;
  margin: 0 0.3125rem;
  transition: all 0.15s linear;
  min-width: 7rem;
  padding: 0.625rem 1.25rem;
  min-height: 1rem !important;
  overflow: hidden;
  line-height: 1.428571;
  text-overflow: ellipsis;
  word-wrap: break-word;
}

.dropdown-menu.dropdown-with-icons .dropdown-item {
  padding: 0.75rem 1.25rem 0.75rem 0.75rem;
}

.dropdown-menu.dropdown-with-icons .dropdown-item .material-icons {
  vertical-align: middle;
  font-size: 24px;
  position: relative;
  margin-top: -4px;
  top: 1px;
  margin-right: 12px;
  opacity: 0.5;
}

/* footer */

footer {
  margin-top: 10px;
  color: rgb(85, 85, 85);
  padding: 25px;
  font-weight: 300;
}
.footer p {
  margin-bottom: 0;
  font-size: 14px;
  margin: 0 0 10px;
  font-weight: 300;
}
footer p a {
  color: #555;
  font-weight: 400;
}

footer p a:hover {
  color: #9f26aa;
  text-decoration: none;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  position: relative;
  text-align: center;
  color: white;
}
.component {
  margin-top: 10%;
}
#create {
  margin-top: 20px;
}
/* .name {
  margin-bottom: 100px;
} */
#artwork {
  padding: 20px;
}
#submit-image {
  margin-top: 20px;
}
</style>
