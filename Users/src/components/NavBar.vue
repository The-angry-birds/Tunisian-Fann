<template>
  <nav class="navbar navbar-expand-sm">
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

    <div v-if="!authGuest" class="dropdown" id="nav-join">
      <button class="dropdown-toggle" type="button" data-toggle="dropdown">
        Join us
      </button>
      <ul class="dropdown-menu">
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
          <button>
            <router-link class="as-btns" to="/user-profile"
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
      console.log("logged: s", this.$store.getters.logged);
      return this.$store.getters.logged;
    },
    userType() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    handleClick() {
      console.log("logging out");
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.navbar {
  background-color: white;
  height: 50px;
  border-bottom: 1px solid rgb(187, 187, 187);
  border-radius: 0px;
  min-width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
#nav-join {
  align-items: center;
  color: #ad7d52;
  display: flex;
  position: fixed;
  float: right;
  font-family: "Spectral", serif;
  font-size: 16px;
  margin-left: 80%;
  font-weight: bold;
}
#nav-join:hover {
  color: #000000;
}
.nav-btns {
  align-items: center;
  color: #ad7d52;
  display: flex;
  float: left;
  font-family: "Spectral", serif;
  font-size: 16px;
  height: 100%;
  margin-left: 20px;
  top: 2px;
  font-weight: bold;
  text-decoration: none;
}
.nav-btns:hover {
  color: #000000;
}
.as-btns {
  margin-top: 10px;
  align-items: center;
  color: #ad7d52;
  display: flex;
  float: left;
  font-family: "Spectral", serif;
  font-size: 16px;
  height: 100%;
  margin-left: 20px;
  padding: 0 20px;
  top: 2px;
  font-weight: bold;
  text-decoration: none;
}
.as-btns:hover {
  color: #000000;
}
.navbar-logo {
  height: 100%;
  margin-left: 15%;
  color: #ad7d52;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
