<template>
  <div>
    <NavBar />

    <div class="page-header header-filter"></div>
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
                  <h3 class="title">
                    <span class="particular">{{ getUser.firstName }}</span>

                    {{ getUser.lastName }}
                  </h3>
                  <div class="description text-center " v-if="data.description">
                    <p><!-- {{ data.description }} -->dkhsfhfshfhsdjh</p>
                  </div>
                  <form class="ui form  " id="artwork">
                    <h4 class="ui dividing header labels">
                      Update your information
                    </h4>
                    <div class="field">
                      <label class="labels">First name</label>
                      <input
                        type="text"
                        name="first-name"
                        placeholder="First name"
                        v-model="title"
                      />
                    </div>
                    <div class="field">
                      <label class="labels">Last name</label>
                      <input
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        v-model="url"
                      />
                    </div>

                    <div class="field">
                      <label class="labels">Biography</label>
                      <textarea v-model="description"></textarea>
                    </div>

                    <div id="create">
                      <button class="ui grey basic button">
                        SUBMIT
                      </button>
                    </div>
                  </form>
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
                </div>
              </div>
            </div>
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
        </div>
        <div class="displayed">
          <div class="tab-content tab-space">
            <div class="tab-pane active text-center gallery" id="studio">
              <div class="row">
                <div
                  class="col-md-3 ml-auto displayed"
                  v-for="(element, i) in artworks"
                  :key="i"
                >
                  <img :src="element.imageUrl" class="rounded artwork-image" />
                  <div class="centered">{{ element.nameArtwork }}</div>
                </div>
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
                </div>
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
          // console.log("===>", this.$data.imageUrl);
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
          this.artworks = data;
          console.log("======", this.artworks);
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
  computed: {
    getUser() {
      return this.$store.getters.getArist;
    },
  },
  //   beforeMount() {
  //     // this.getUser();
  //     this.getCategories();
  //     this.getArtworks(1);
  //   },
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
.col-md-3 {
  margin: 0 !important;
}

html * {
  -webkit-font-smoothing: antialiased;
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
  height: 10vh;
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
  background: #ffebcd;

  /* margin-top: 10%; */
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
  border-radius: 50% !important;
}

.img-fluid,
.img-thumbnail {
  max-width: 250px;
  max-height: 250px;
  margin-left: 30px;
  padding: 30px;

  /* height: auto; */
}

.title {
  margin-top: 0.5px;
  margin-bottom: 40px;
  min-height: 32px;
  color: black;
  font-weight: 700;
  font-size: 50px;
  font-family: "Roboto Slab", "Times New Roman", serif;
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

.profile-page .gallery {
  margin-top: 3.213rem;
  padding-bottom: 50px;
}

.profile-page .gallery img {
  width: 100%;
  margin-bottom: 2.142rem;
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

#artwork {
  padding: 20px;
}
#submit-image {
  margin-top: 20px;
}
.displayed {
  display: block;
  align-items: center;
}
.particular {
  text-transform: capitalize;
}
p {
  font-size: 14px;
  margin: 0 0 10px;
  color: black;
}
.profile-page .description {
  margin: 1.071rem auto 0;
  max-width: 600px;
  color: #999;
  font-weight: 300;
}
.labels {
  float: left;
}
</style>
