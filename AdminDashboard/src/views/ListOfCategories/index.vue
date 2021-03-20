<template>
  <div>
    <table class="table-categories">
      <thead>
        <tr>
          <th scope="col" width="5%">ID</th>
          <th scope="col" width="10%">Title</th>
          <th scope="col" width="5%">Artists</th>
          <th scope="col" width="30%">Description</th>
          <th scope="col" width="30%">Image URL</th>
          <th scope="col" width="20%">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, i) in categories.data" :key="i">
          <th scope="row">{{ category.id }}</th>
          <td>{{ category.name }}</td>
          <td>0</td>
          <td>{{ category.description }}</td>
          <td>{{ category.ImageUrl }}</td>
          <td>
            <button
              type="button"
              class="category-btns btn btn-primary"
              data-toggle="modal"
              data-target="#myEditModal"
              @click.prevent="changeCurrentcategory(category)"
            >
              Edit
            </button>
            <!-- Edit Modal -->
            <div id="myEditModal" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <!-- Edit Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title text-primary">Category Edit</h4>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="title-category">Title</label>
                        <input
                          class="form-control"
                          id="title-category"
                          placeholder="Title"
                          v-model="currentCategory.name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="description-category">Description</label>
                        <input
                          class="form-control"
                          id="description-category"
                          placeholder="Description"
                          v-model="currentCategory.description"
                        />
                      </div>
                      <div class="form-group">
                        <label for="imgUrl-category">Image URL</label>
                        <input
                          class="form-control"
                          id="imgUrl-category"
                          placeholder="Image URL"
                           v-model="currentCategory.ImageUrl"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      @click.prevent="updateCategory(category)"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="category-btns btn btn-danger"
              data-toggle="modal"
              data-target="#myDeleteModal"
            

            >
              Delete
            </button>
            <!-- Delete Modal -->
            <div id="myDeleteModal" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <!-- Delete Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title text-danger">WARNING</h4>
                  </div>
                  <div class="modal-body">
                    <p>Are you sure that you want to delete this category ?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"

                       @click.prevent="deleteCategory(category)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      currentId: null,
      dataInput: {},
      categories: [],
      name: "",
      description: "",
      ImageUrl: "",
      firstName: "",
      lastName: "",
      email: "",
      currentCategory: {}
    };
  },
  mounted() {
    this.displayCategory();
  },

  methods: {
     setCurrentId(category) {
    
      this.dataInput=category
    },
    changeCurrentcategory(category) {
      this.currentCategory = category
    },

    displayCategory() {
      axios.get("http://localhost:3000/api/categories").then((data) => {
        console.log("===================", data);
        this.categories = data;
      });
    },
    updateCategory(id,category) {
   
      axios
        .put(`http://localhost:3000/api/categories/${id}`,this.currentCategory)
        .then((updated) => {

          console.log(updated);
            this.displayCategory();
        })
      .catch((err)=>{console.log(err)})
    },
    deleteCategory(id) {
      axios.delete(`http://localhost:3000/api/categories/${id}`).then((res) => {
          this.displayCategory();
       console.log("deleted")
      });
    },
  },
};
</script>
<style>
.table-categories {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.category-btns {
  margin-left: 2px;
}
</style>
