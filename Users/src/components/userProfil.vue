<template>
  <div>
    <NavBar></NavBar>

    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="profile-nav col-md-3">
          <div class="panel">
            <div class="user-heading round">
              <a>
                <img
                  src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"
                  alt=""
                />
              </a>
              <input type="file" name="file" id="file" multiple /><br />
              <h1>{{ data.firstName }}</h1>
              <p>{{ data.email }}</p>
            </div>

            <ul class="nav nav-pills nav-stacked">
              <li class="active">
                <a> <i class="fa fa-user"></i> Profile</a>
              </li>
              <li>
                <a @click="renderInput()">
                  <i class="fa fa-calendar"></i>your product<span
                    class="label label-warning pull-right r-activity"
                    >9</span
                  ></a
                >
              </li>
              <li>
                <a> <i class="fa fa-edit"></i>recent bidding</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="profile-info col-md-9">
          <div class="panel">
            <footer class="panel-footer">
              <button
                class="btn btn-warning pull-right"
                @click.prevent="handleClick()"
              >
                logout
              </button>
              <ul class="nav nav-pills">
                <li>
                  <a><i class="fa fa-map-marker"></i></a>
                </li>
                <li>
                  <a><i class="fa fa-camera"></i></a>
                </li>
                <li>
                  <a><i class=" fa fa-film"></i></a>
                </li>
                <li>
                  <a class="list-group-item"
                    ><i class="fa fa-cog fa-fw" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </footer>
          </div>
          <div class="panel">
            <div class="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div class="row">
                <div class="bio-row">
                  <p><span>First Name</span>{{ data.firstName }}</p>
                </div>
                <div class="bio-row">
                  <p><span>Last Name </span>{{ data.lastName }}</p>
                </div>
                <div class="bio-row">
                  <p><span>Country </span>{{ data.lastName }}</p>
                </div>
                <div class="bio-row">
                  <p><span>Email</span>{{ data.email }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
      
       
            <div class="row">
              <b-card
                img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/Kurt-artwork-by-bensalem-walid.png"
                img-top
                class="mb-2"
              >
                <b-card-text class="card-category"
                  >Digital Paintings</b-card-text
                >
                <h3 class="card-title">Kurt</h3>
                <div class="card-by">
                  by <a class="card-author" title="author">Bensalem Walid</a>
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      imageURL: "",
      show: false,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    renderInput() {
      this.show = !this.show;
      console.log(this.show);
    },
    displayUser() {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/users/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.$data.data = res.data;
          console.log("iiiiiii", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  beforeMount() {
    this.displayUser();
  },
};
</script>

<style scoped>
body {
  color: #797979;
  background: #f1f2f7;
  font-family: "Spectral", "serif";
  padding: 0px !important;
  margin: 0px !important;
  font-size: 13px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}
.profile-nav,
.profile-info {
  margin-top: 30px;
}
.profile-nav .user-heading {
  background: #ad7d52;
  color: #fff;
  border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  padding: 30px;
  text-align: center;
}
.profile-nav .user-heading.round a {
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
}
.profile-nav .user-heading a img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
.profile-nav .user-heading h1 {
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 5px;
}
.profile-nav .user-heading p {
  font-size: 12px;
}
.profile-nav ul {
  margin-top: 1px;
}
.profile-nav ul > li {
  border-bottom: 1px solid #f0e68c;
  margin-top: 0;
  line-height: 30px;
}
.bio-graph-heading {
  font-family: "Spectral", serif;
}
h1,
p,
li {
  font-family: "Spectral", serif;
}
.active {
  width: 100%;
}
.profile-nav ul > li:last-child {
  border-bottom: none;
}
.profile-nav ul > li > a {
  border-radius: 0;
  -webkit-border-radius: 0;
  color: #89817f;
  border-left: 5px solid #fff;
}
.profile-nav ul > li > a:hover,
.profile-nav ul > li > a:focus,
.profile-nav ul li.active a {
  background: #f8f7f5 !important;
  border-left: 5px solid #fbc02d;
  color: #89817f !important;
}
.profile-nav ul > li:last-child > a:last-child {
  border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
}
.profile-nav ul > li > a > i {
  font-size: 16px;
  padding-right: 10px;
  color: #bcb3aa;
}
.r-activity {
  margin: 6px 0 0;
  font-size: 12px;
}
.p-text-area,
.p-text-area:focus {
  border: none;
  font-weight: 300;
  box-shadow: none;
  color: #c3c3c3;
  font-size: 16px;
}
.profile-info .panel-footer {
  background-color: #f8f7f5;
  border-top: 1px solid #e7ebee;
}
.profile-info .panel-footer ul li a {
  color: #7a7a7a;
}
.bio-graph-heading {
  background: #fbc02d;
  color: #fff;
  text-align: center;
  font-style: italic;
  padding: 40px 110px;
  border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  font-size: 16px;
  font-weight: 300;
}
.bio-graph-info {
  color: #89817e;
}
.bio-graph-info h1 {
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 20px;
}
.bio-row {
  width: 50%;
  float: left;
  margin-bottom: 10px;
  padding: 0 15px;
  font-family: "Spectral", serif;
}
.bio-row p span {
  width: 100px;
  display: inline-block;
}
.bio-chart,
.bio-desk {
  float: left;
}
.bio-chart {
  width: 40%;
}
.bio-desk {
  width: 60%;
}
.bio-desk h4 {
  font-size: 15px;
  font-weight: 400;
}
.bio-desk h4.terques {
  color: #4cc5cd;
}
.bio-desk h4.red {
  color: #e26b7f;
}
.bio-desk h4.green {
  color: #97be4b;
}
.bio-desk h4.purple {
  color: #caa3da;
}
.file-pos {
  margin: 6px 0 10px 0;
}
.profile-activity h5 {
  font-weight: 300;
  margin-top: 0;
  color: #c3c3c3;
}
.summary-head {
  background: #ee7272;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #ee7272;
}
.summary-head h4 {
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.summary-head p {
  color: rgba(255, 255, 255, 0.6);
}
ul.summary-list {
  display: inline-block;
  padding-left: 0;
  width: 100%;
  margin-bottom: 0;
}
ul.summary-list > li {
  display: inline-block;
  width: 19.5%;
  text-align: center;
}
ul.summary-list > li > a > i {
  display: block;
  font-size: 18px;
  padding-bottom: 5px;
}
ul.summary-list > li > a {
  padding: 10px 0;
  display: inline-block;
  color: #818181;
}
ul.summary-list > li {
  border-right: 1px solid #eaeaea;
}
ul.summary-list > li:last-child {
  border-right: none;
}
.activity {
  width: 100%;
  float: left;
  margin-bottom: 10px;
}
.activity.alt {
  width: 100%;
  float: right;
  margin-bottom: 10px;
}
.activity span {
  float: left;
}
.activity.alt span {
  float: right;
}
.activity span,
.activity.alt span {
  width: 45px;
  height: 45px;
  line-height: 45px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background: #eee;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.activity.terques span {
  background: #8dd7d6;
}
.activity.terques h4 {
  color: #8dd7d6;
}
.activity.purple span {
  background: #b984dc;
}
.activity.purple h4 {
  color: #b984dc;
}
.activity.blue span {
  background: #90b4e6;
}
.activity.blue h4 {
  color: #90b4e6;
}
.activity.green span {
  background: #aec785;
}
.activity.green h4 {
  color: #aec785;
}
.activity h4 {
  margin-top: 0;
  font-size: 16px;
}
.activity p {
  margin-bottom: 0;
  font-size: 13px;
}
.activity .activity-desk i,
.activity.alt .activity-desk i {
  float: left;
  font-size: 18px;
  margin-right: 10px;
  color: #bebebe;
}
.activity .activity-desk {
  margin-left: 70px;
  position: relative;
}
.artworks-header {
  text-align: center;
  margin-top: 25px;
  color: #ad7d52;
  text-shadow: 1px 1px 3px #ad7d52;
}
.container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}
.mb-2 {
  margin: 22px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  width: 300px;
  height: 385px;
}
.card-category {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}
.card-title {
  margin-top: 5px;
  margin-bottom: 10px;
}
.card-by {
  font-size: 12px;
}
.card-author {
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
}
img:hover {
  opacity: 0.5;
}
img {
  border-radius: 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
#loadMore {
  text-align: center;
  font-size: 20px;
  color: #ad7d52;
  text-shadow: 1px 1px 3px #ad7d52;
}
#loadMore:hover {
  color: #000000;
  text-shadow: 1px 1px 3px #000000;
}
.activity.alt .activity-desk {
  margin-right: 70px;
  position: relative;
}
.activity.alt .activity-desk .panel {
  float: right;
  position: relative;
}
.activity-desk .panel {
  background: #f4f4f4;
  display: inline-block;
}
.activity .activity-desk .arrow {
  border-right: 8px solid #f4f4f4 !important;
}
.activity .activity-desk .arrow {
  border-bottom: 8px solid transparent;
  border-top: 8px solid transparent;
  display: block;
  height: 0;
  left: -7px;
  position: absolute;
  top: 13px;
  width: 0;
}
.activity-desk .arrow-alt {
  border-left: 8px solid #f4f4f4 !important;
}
.activity-desk .arrow-alt {
  border-bottom: 8px solid transparent;
  border-top: 8px solid transparent;
  display: block;
  height: 0;
  right: -7px;
  position: absolute;
  top: 13px;
  width: 0;
}
.activity-desk .album {
  display: inline-block;
  margin-top: 10px;
}
.activity-desk .album a {
  margin-right: 10px;
}
.activity-desk .album a:last-child {
  margin-right: 0px;
}
</style>