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
export default {};
</script>

<style scoped>
* {
  font-family: Verdana, sans-serif;
}
h1 {
  text-align: center;
}
</style>
