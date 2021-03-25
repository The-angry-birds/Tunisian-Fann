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
};
</script>

<style scoped></style>
