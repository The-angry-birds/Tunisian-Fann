<template>
  <div>
    <NavBar></NavBar>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    NavBar,
  },
  mounted() {
    console.log(this.$store.state.currentUser)
  }
};
</script>

<style scoped></style>
