<template>
  <div id="app">
    <AdminNavBar></AdminNavBar>

    <v-app
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      id="inspire"
    >
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">Admin Login</h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Sign in with your e-mail adress and password:</p>
                <v-form>
                  <v-text-field
                    outline
                    label="E-mail Adress"
                    type="text"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-spacer></v-spacer>
                <v-btn class="btn" tile color="#8CA9D3"
                  ><v-icon left> mdi-checkbox-marked-circle </v-icon
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm12 md6 offset-md3> </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AdminNavBar from "./AdminNavBar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    AdminNavBar,
  },
};
</script>

<style scoped>
.v-card {
  margin-top: 50px;
}
.v-btn .v-card {
  border-radius: 4px;
}
.v-card__title {
  text-transform: uppercase;
}
</style>
