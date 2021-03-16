<template>
  <b-navbar class="navigation" type="white">
    <b-navbar-nav>
      <img
        class="nav-logo"
        src="https://i.pinimg.com/originals/32/3e/02/323e02791f3dfb353927386dfaec81d9.png"
      />
      <div>
        <b-dropdown text="Join us" class="m-2" right>
          <b-dropdown-item-button><router-link to="/join-as-client" >As a client</router-link></b-dropdown-item-button>
          <b-dropdown-item-button><router-link to="/join-as-artist">As an artist</router-link></b-dropdown-item-button>
        </b-dropdown>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
}

.navigation {
  border-radius: 0;
  height: 8vh;
  background-color: white;
}

.nav-logo {
  height: 8vh;
  margin-left: 10px;
  padding-top: 3px;
  padding-bottom: 1px;
}
</style>