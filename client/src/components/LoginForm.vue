<template>
  <div id="app">
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" id="inspire">
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
                <v-btn
                  class="btn"
                  tile
                  color="#8CA9D3"
                  @click.prevent="handleSubmit()"
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
// import AdminNavBar from "./AdminNavBar.vue";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "App",
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          if (response.data.message === "success") {
            localStorage.setItem("token", response.data.token);
            this.$router.push("/main");
          } else if (response.data.message === "wrong password") {
            swal("Oops!", "Wrong Password!", "error");
          } else {
            swal("Oops!", "Wrong Email!", "error");
          }
        });
    },
  },
  components: {},
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
