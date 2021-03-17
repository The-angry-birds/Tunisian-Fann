<template>
  <nav class="navbar navbar-expand-sm">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav">
        <li class="nav-item">
          <img
            class="navbar-logo"
            src="https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg"
          />
        </li>
        <li id="nav-join" class="nav-item dropdown dmenu">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Join Us
          </button>
          <div id="joinUs" class="dropdown-menu sm-menu">
            <button>
              <router-link to="/join-as-client">As a client</router-link>
            </button>
            <button>
              <router-link to="/join-as-artist">As an artist</router-link>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>

* {
  padding: 0;
  margin: 0;
}

.navbar {
  background-color: white;
  height: 8vh;
  border-bottom: 1px solid rgb(145, 145, 145);
  border-radius: 0px;
  min-width: 100%;
}

button {
  align-items: center;
  color: #000000;
  display: flex;
  font-family: "Spectral", serif;
  font-size: 16px;
  height: 100%;
  margin-left: 20px;
  padding: 0 20px;
  top: 2px;
  text-decoration: none;
  font-weight: bold;
}

.navbar-logo {
  width: 50%;
  padding-left: 10px;
}

#nav-join {
  left: 210%;
}
</style>

