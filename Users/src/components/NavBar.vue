<template>
  <nav class="navbar navbar-expand-sm" id="navbar">
    <img
      class="navbar-logo"
      src="https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg"
    />

    <button>
      <router-link class="nav-btns" to="/artists">Artists</router-link>
    </button>

    <button>
      <router-link class="nav-btns" to="/artworks">Artworks</router-link>
    </button>

    <button>
      <router-link class="nav-btns" to="/auctions">Auctions</router-link>
    </button>

    <div v-if="!authGuest" class="dropdown" id="nav-join">
      <button class="dropdown-toggle" type="button" data-toggle="dropdown">
        Join us
      </button>
      <ul class="dropdown-menu" id="dropdown-menu">
        <li>
          <button>
            <router-link class="as-btns" to="/join-as-artist"
              >As an artist</router-link
            >
          </button>
        </li>
        <li>
          <button>
            <router-link class="as-btns" to="/join-as-client"
              >As a client</router-link
            >
          </button>
        </li>
      </ul>
    </div>

    <div v-else class="dropdown" id="nav-join">
      Profile
      <button
        class="dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      ></button>
      <ul class="dropdown-menu">
        <li>
          <button v-if="type === 'guest'">
            <router-link class="as-btns" to="/user-profile"
              >Account</router-link
            >
          </button>
          <button v-else>
            <router-link class="as-btns" to="/artist-profile"
              >Account</router-link
            >
          </button>
        </li>
        <li>
          <button>
            <router-link is="a" class="as-btns" @click="handleClick()"
              >Logout</router-link
            >
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    authGuest() {
       console.log("this.user",this.$store.getters.logged)
      return this.$store.getters.logged;

    },
    type() {
      return this.$store.getters.role;
    },

  },

  methods: {
    handleClick() {
      console.log("logging out");
      this.$store.dispatch("logout");
      this.$router.push("/hello");
    },
    userType() {
      return this.$store.getters.role;
    },
    handleScroll() {
      if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 0";
        document.getElementById("navbar").style.backgroundColor = "#fff";
        document.getElementById("navbar").style.boxShadow =
          "0 1px 10px 5px rgb(92, 91, 90, .1)";
        document.getElementById("dropdown-menu").style.backgroundColor = "#fff";
      }
      if (document.documentElement.scrollTop == 0) {
        document.getElementById("navbar").style.padding = "30px 0";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "0 0 0";
        document.getElementById("dropdown-menu").style.backgroundColor = "#fff";
      }
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  padding: 0;
  margin: 0;
}
.navbar {
  background: transparent;
  border-radius: 0px;
  min-width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0 0 0;
  padding-top: 30px;
  z-index: 10;
  transition: 0.4s;
}
#nav-join {
  font-family: "Inconsolata", monospace;
  align-items: center;
  color: #a08018;
  display: flex;
  position: fixed;
  float: right;
  font-size: 18px;
  margin-left: 80%;
}
#nav-join:hover {
  color: #000000;
}
.nav-btns {
  align-items: center;
  color: #a08018;
  display: flex;
  float: left;
  font-family: "Inconsolata", monospace;
  font-size: 18px;
  height: 100%;
  margin-left: 80px;
  top: 2px;
  text-decoration: none;
}
.nav-btns:hover {
  color: #000000;
}
.as-btns {
  font-family: "Inconsolata", monospace;
  margin-top: 10px;
  align-items: center;
  color: #a08018;
  display: flex;
  float: left;
  font-size: 16px;
  height: 100%;
  margin-left: 20px;
  text-decoration: none;
}
.as-btns:hover {
  color: #000000;
}
.navbar-logo {
  height: 45px;
  width: auto;
  margin-left: 15%;
  color: #a08018;
  padding-top: 10px;
  padding-bottom: 10px;
}
.dropdown-menu {
  background-color: transparent !important;
  backdrop-filter: blur(10px) !important;
}
</style>
