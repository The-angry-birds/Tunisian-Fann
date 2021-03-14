<template>
  <v-app-bar color="#8CA9D3" dense dark>
    <v-menu right bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-toolbar-title>Admin Control Panel</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-bell-ring</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title
            ><v-icon>mdi-bell</v-icon> Notification {{ n }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <div>
      <v-btn icon @click.prevent="handleClick()">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </div>
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
  font-family: "Neuton", serif;
}
h1 {
  text-align: center;
}

</style>
