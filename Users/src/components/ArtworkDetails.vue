<template>
  <div>
    <div class="artwork-cover-img">
      <img class="artwork-img" v-bind:src="oneArt.imageUrl" alt="" />
    </div>
    <div class="artist-name">
      <p class="artist-name-body">
        Artwork made by
        <a href="#"> {{ artist.firstName }} {{ artist.lastName }} </a>
      </p>
    </div>
    <div class="artwork-body">
      <div class="left-side">
        <h1 class="artwork-name" id="main">{{ oneArt.nameArtwork }}</h1>
        <h4>Description</h4>
        <p>
          {{ oneArt.description }}
        </p>
      </div>
      <div class="right-side">
        <div class="price">
          <h5>Price</h5>
          <h1>{{ oneArt.price }} dt</h1>
        </div>
        <button class="buy-btn" @click="payment">Buy now</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      artwork_id: null,
      oneArt: {},
      artist: {},
      users: {},
    };
  },
  methods: {
    getArtwork() {
      this.artwork_id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/api/artworks/${this.artwork_id}`)
        .then(({ data }) => {
          this.oneArt = data;
          console.log("this.is artwork", data);
        })
        .then(() => {
          axios
            .get(`http://localhost:3000/api/artists/${this.oneArt.artist_id}`)
            .then(({ data }) => {
              console.log("this.is artist", data);
              this.artist = data;
            });
        });
    },
    getuser() {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/users/getUserByToken", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          console.log(" this is user idDDDDDDDDDDDDDDDDDDDDDDDD", data.user.id);
          this.user_id = data.user.id;
          this.user = data.user;
          console.log(data.user.email);
        });
    },
    payment() {
      console.log("===================", this.user);
      const token = localStorage.getItem("token");
      console.log({ token });
      if (token == null) {
        this.$router.push("/join-as-client");
      } else {
        const createPayment = {
          email: this.user.email,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          amount: this.oneArt.price,
        };
        axios
          .post("http://localhost:3000/payments/init-payment", createPayment)
          .then((res) => {
            console.log(res);
            window.open(res.data.payUrl);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.getArtwork();
    console.log("this.oneArt", this.artwork_id);
    this.getuser();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  font-family: "Lexend", serif;
}

.artwork-cover-img {
  height: 80vh;
  width: 100%;
  background-color: white;
  text-align: center;
  padding-top: 120px;
}

.artwork-img {
  height: 90%;
  text-align: center;
  transition: 0.5s;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
}

.artwork-img:hover {
  height: 98%;
}

.artist-name {
  width: 100%;
  height: 50px;
  line-height: 25px;
  padding: 15px;
}

.artist-name-body {
  margin-left: 5%;
}

.artwork-body {
  display: flex;
  flex-wrap: nowrap;
  background-color: white;
}

.left-side {
  background-color: white;
  width: 50%;
  margin-top: 0px;
  margin-left: 20px;
  margin-top: 20px;
  padding-top: 0px;
  padding-left: 20px;
}

.right-side {
  background-color: white;
  width: 50%;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  height: 100%;
}

.price {
  padding: 10px;
  width: 39%;
}

.buy-btn {
  align-items: flex-start;
  background-color: #000000;
  border-color: #1a1a1a;
  border-radius: 15px;
  border-style: solid;
  border-width: 2px;
  color: #ffffff;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  gap: normal;
  padding: 16px 24px;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  transition: 0.4s;
}

.buy-btn:hover {
  background-color: white;
  color: #1a1a1a;
}
#main {
  text-transform: uppercase;
}
</style>
