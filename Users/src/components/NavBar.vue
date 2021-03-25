<template>
  <nav class="navbar navbar-expand-sm">
    <img
      class="navbar-logo"
      src="https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg"
    />

    <div v-if="status() ===''" class="dropdown" id="nav-join">
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
 
    <div v-if="status()==='success'" class="dropdown" id="nav-join">
     Profile
      <button
        class="dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      ></button>
      <ul class="dropdown-menu">
        <li>
          <router-link  to="/user-profile"
            ><button class="as-btns">
              Account
            </button>
          </router-link>
        </li>
        <li>
          <router-link  to="/join-as-client">
            <button  @click="handleClick()"   class="as-btns">
              Logout 
            </button>
          </router-link>
        </li>
      </ul>
    </div>
   
  </nav>
</template>

<script>
export default {
  methods: {
    status() {
      console.log("ahahahahah", this.$store.getters.authStatususer);
      return this.$store.getters.authStatususer;
    },
           handleClick() {
    this.$store.dispatch('logout')
      this.$router.push("/");
    },
  },

  computed: {
    info() {
      return this.$store.getters.getuser;
    }
 
  },

  mounted() {
    this.status()
  },
  }
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

.as-btns {
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
