<template>
  <div id="app">
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
                  <h3 class="headline">
                    Admin Login
                  </h3>
                  <v-flex>
                    <v-img
                      :alt="platformName"
                      class="ml-3"
                      contain
                      height="48px"
                      position="center right"
                      src="https://www.mobygames.com/images/i/12/25/1435075.png"
                    ></v-img>
                  </v-flex>
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
                <v-btn color="#F26659" flat> Forgot password? </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="#8CA9D3" flat="$vuetify.breakpoint.smAndUp">
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm12 md6 offset-md3>
           
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.v-btn .v-card {
  border-radius: 4px;
}
.v-card__title {
  text-transform: uppercase;
}
</style>