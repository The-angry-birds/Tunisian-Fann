<template>
  <v-app-bar color="#8CA9D3" dense dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Admin Control Panel</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <!-- //LOGOUT BUTTON -->

        <div id="logout">
          <v-btn depressed color="8DC" @click.prevent="handleClick()">
            LOGOUT
          </v-btn>
        </div>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  font-family: Verdana, sans-serif;
}
h1 {
  text-align: center;
}
#logout {
  float: right !important;
  /* margin-left: 1000px; */
}
</style>
