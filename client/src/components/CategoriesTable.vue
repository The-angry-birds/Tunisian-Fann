ureWebpack: {<template>
  <div id="app">
    <AdminNavBar></AdminNavBar>
    <CategoryCard v-bind:categories="categories"></CategoryCard>

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
            <tr v-for="category in categories" :key="category.name">
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
                  tile
                  color="#8CA9D3"
                  v-on:click="updateCategory(category.id)"
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
                            <label for="category-name" ù>Category Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="category-name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="category-description">
                              Description</label
                            >
                            <textarea
                              class="form-control"
                              id="category-description"
                              rows="3"
                            ></textarea>
                          </div>
                          <template>
                            <v-file-input
                              accept="image/*"
                              label="File input"
                            ></v-file-input>
                          </template>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <v-btn
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
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#myTrashModal"
                  tile
                  color="#F26659"
                  ><v-icon left> mdi-delete </v-icon>Trash</v-btn
                >

                <div class="modal fade" id="myTrashModal" role="dialog">
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
                          v-on:click="deleteCategory(category.id)"
                          ><v-icon left> mdi-delete </v-icon>Delete</v-btn
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-app>
  </div>
</template>

<script>
import AdminNavBar from "./AdminNavBar.vue";
import CategoryCard from "./CategoryCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      categories: [],

    };
  },
  components: {
    AdminNavBar,
    CategoryCard,
  },
  methods: {
    displayCategory() {
      axios.get("http://localhost:3000/categorys").then(({ data }) => {
        console.log(data);
        this.categories = data;
      });
    },
    //  delete category from db
    deleteCategory() {
      axios
        .delete(`http://localhost:3000/categorys`, this.category.id)
        .then((deleted) => {
          console.log(deleted);
        });
    },
    // update categorys from db
    updateCategory() {
      axios.put(`http://localhost:3000/categorys`).then((updated) => {
        console.log(updated);
      });
    },
  },
  mounted() {
    this.displayCategory();
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
