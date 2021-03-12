<template>
  <div id="app">
    <AdminNavBar></AdminNavBar>
    <CategoryCard></CategoryCard>

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
            <tr v-for="item in categories" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.numberOfArtists }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.imageUrl }}</td>
              <td>
                <v-btn
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#myEditModal"
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
                          <div class="form-group">
                            <label for="category-imgurl">Image URL</label>
                            <input
                              type="text"
                              class="form-control"
                              id="category-imgurl"
                            />
                          </div>
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

export default {
  data() {
    return {
      categories: [
        {
          name: "Paintings",
          numberOfArtists: 159,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageUrl:
            "https://www.theartist.me/wp-content/uploads/2017/08/the-lover-by-rene.jpg",
        },
        {
          name: "Digital Paintings",
          numberOfArtists: 170,
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          imageUrl:
            "https://community.wacom.com/eu/wp-content/uploads/2019/03/Andrea-Stangoni-890x400.jpg",
        },
        {
          name: "Sculptures",
          numberOfArtists: 98,
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageUrl:
            "https://iadsb.tmgrup.com.tr/92b0ce/1200/627/0/42/1000/564?u=https://idsb.tmgrup.com.tr/2019/12/08/1575799266963.jpg",
        },
      ],
    };
  },
  components: {
    AdminNavBar,
    CategoryCard,
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
