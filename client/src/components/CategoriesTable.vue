ureWebpack: {<template>
  <div id="app">
    <AdminNavBar></AdminNavBar>
    <CategoryCard :categories="categories"></CategoryCard>

    <v-app id="inspire">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" width="10%">Category</th>
              <th class="text-left" width="10%">Number of artists</th>
              <th class="text-left" width="30%">Description</th>
              <th class="text-left" width="30%">Image URL</th>
              <th class="text-left" width="20%">Controls</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, i) in categories" :key="i">
              <td>{{ category.name }}</td>
              <td>{{ 0 }}</td>
              <td>{{ category.description }}</td>
              <td>{{ category.ImageUrl }}</td>
              <td>
                <v-btn
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#myEditModal"
                  @click="setCurrentId(category.id)"
                  tile
                  color="#8CA9D3"
                  ><v-icon left> mdi-pencil </v-icon>Edit</v-btn
                >
                <div class="modal fade" id="myEditModal" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                        <h4 class="modal-title edit-title">CATEGORY EDIT</h4>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="category-name">Category Name</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="dataInput.name"
                              id="category-name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="category-description">
                              Description</label
                            >
                            <textarea
                              v-model="dataInput.description"
                              class="form-control"
                              id="category-description"
                              rows="3"
                            ></textarea>
                          </div>
                          <!-- <template>
                            <v-file-input
                              v-model="dataInput.ImageUrl"
                              accept="image/*"
                              label="File input"
                            ></v-file-input>
                          </template> -->
                        </form>
                      </div>
                      <div class="modal-footer">
                        <v-btn
                          @click.prevent="updateCategory(currentId)"
                          type="button"
                          class="btn"
                          data-toggle="modal"
                          tile
                          color="#8CA9D3"
                          ><v-icon left> mdi-pencil </v-icon>Submit</v-btn
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <v-btn
                 @click="setCurrentId(category.id)"
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#myTrashModal"
                  tile
                  color="#F26659"
                  ><v-icon left> mdi-delete </v-icon>Trash</v-btn
                >
              </td>
            </tr>
          </tbody>
          <div class="modal fade" id="myTrashModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title warning-title">WARNING</h4>
                </div>
                <div class="modal-body">
                  <p>Are you sure you want to delete this category ?</p>
                </div>
                <div class="modal-footer">
                  <v-btn
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    tile
                    color="#F26659"
                    @click.prevent="deleteCategory(currentId)"
                    ><v-icon left> mdi-delete </v-icon>Delete</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </template>
      </v-simple-table>
    </v-app>
  </div>
</template>

<script>
import AdminNavBar from "./AdminNavBar.vue";
import CategoryCard from "./CategoryCard.vue";
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      currentId: null,
      dataInput: {},
      categories: [],
    };
  },
  components: {
    AdminNavBar,
    CategoryCard,
  },
  methods: {
    setCurrentId(id) {
      this.currentId = id
    },
    verify() {
      const token = localStorage.getItem("token");
      const header = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .get("http://localhost:3000/api/auth/verify", header)
        .then(({ data }) => {
          if (data.token === undefined) {
            localStorage.removeItem("token");
            this.$router.push("/");
            swal("Oops!", "you should login ", "error");
          } else {
            localStorage.setItem("token", data.token);
          }
        })
        .catch((err) => {
          this.$router.push("/");

          console.log(err);
        });
    },
    displayCategory() {
      axios.get("http://localhost:3000/categorys").then(({ data }) => {
        this.categories = data;
      });
    },
    //  delete category from db
    deleteCategory(id) {
      axios.delete(`http://localhost:3000/categorys/${id}`).then(() => {
        this.displayCategory();
      });
    },
    // update categorys from db
    updateCategory(id) {
      console.log("==>", id);
      axios
        .put(`http://localhost:3000/categorys/${id}`, this.dataInput)
        .then((updated) => {
          console.log(updated);
        })
        .then(() => {
          this.displayCategory();
        });
    },
  },
  mounted() {
    this.displayCategory();
  },
  beforeMount() {
    this.verify();
  },
};
</script>

<style scoped>
#app {
  width: 100%;
}

.btn {
  margin: 3px;
}

.warning-title {
  color: #f26659;
}

.edit-title {
  color: #8ca9d3;
}
</style>
