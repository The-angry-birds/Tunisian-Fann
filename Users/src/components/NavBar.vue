<template>
  <nav class="navbar navbar-expand-sm" id="navbar">
    <router-link to="/">
      <img
        class="navbar-logo"
        src="https://i.ibb.co/z4gFfMj/Tunisian-Fann-Logo.png"
        to
      />
    </router-link>

    <button>
      <router-link class="nav-btns first-nav-btn" to="/artists"
        >Artists</router-link
      >
    </button>

    <button>
      <router-link class="nav-btns" to="/artworks">Artworks</router-link>
    </button>

    <button>
      <router-link class="nav-btns" to="/auctions">Auctions</router-link>
    </button>

    <div v-if="authGuest && type === 'artist'" class="dropdown">
      <a
        id="dLabel"
        role="button"
        data-toggle="dropdown"
        data-target="#"
        href="/page.html"
      >
        <i class="glyphicon glyphicon-bell"></i>
      </a>

      <ul
        class="dropdown-menu notifications"
        role="menu"
        aria-labelledby="dLabel"
      >
        <div class="notification-heading">
          <h4 class="menu-title">Notifications</h4>
          <h4 class="menu-title pull-right">
            View all<i class="glyphicon glyphicon-circle-arrow-right"></i>
          </h4>   
        </div>
        <li   class="divider"></li>
        <div   v-for="(auc, i) in auctionArtists"
        :key="i"   class="notifications-wrapper">
          <a @click="pushNotifications(auc)" class="content" href="#">
            <div class="notification-item">
              <h4 class="item-title"></h4>
              <p class="item-info">{{auc.nameArtwork}} auction</p>
            </div>
          </a>
        <a class="content" href="#">
            <div class="notification-item">
              <h4 class="item-title"> artwork {{auc.nameArtwork}} reachs {{auc.currentBid}} TND go to check  </h4>
        
            </div>
        </a>
   
        </div>
        <li class="divider"></li>
        <div class="notification-footer">
          <h4 class="menu-title">
            View all<i class="glyphicon glyphicon-circle-arrow-right"></i>
          </h4>
        </div>
      </ul>
    </div>
    <div v-if="!authGuest" class="dropdown" id="nav-join">
      <button class="dropdown-toggle" type="button" data-toggle="dropdown">
        Join us
      </button>
      <ul class="dropdown-menu" id="dropdown-menu">
        <li>
          <button>
            <router-link class="as-btns" to="/join-as-artist"
              >As an artist</router-link
            >
          </button>
        </li>
        <li>
          <button>
            <router-link class="as-btns" to="/join-as-client"
              >As a client</router-link
            >
          </button>
        </li>
      </ul>
    </div>

    <div v-else class="dropdown" id="nav-join">
      <button class="dropdown-toggle" type="button" data-toggle="dropdown">
        Profile
      </button>
      <ul class="dropdown-menu" id="dropdown-menu">
        <li>
          <button v-if="type === 'guest'">
            <router-link class="as-btns" to="/user-profile"
              >Account</router-link
            >
          </button>
          <button v-else>
            <router-link class="as-btns" to="/artist-profile"
              >Account</router-link
            >
          </button>
        </li>
        <li>
          <button>
            <router-link is="a" class="as-btns" @click="handleClick()"
              >Logout</router-link
            >
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      artist: {},
      notification: [],
      auctions:{},
      auctionArtists:[]
    };
  },

  computed: {
    authGuest() {
      console.log("this.user", this.$store.getters.logged);
      return this.$store.getters.logged;
    },
  
    type() {
      return this.$store.getters.role;
    },
  },
  methods: {
    pushNotifications(auction) {
   this.$router.push({
        path: `/auction-details/${auction.id}`,
      });
    },
    handleClick() {
      console.log("logging out");
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    allbidden(array) {
      var uniqueArray = [];

      // Loop through array values
      for (var i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
        }
      }
      return uniqueArray;
    },

    get_arist() {
      const token = localStorage.getItem("token");
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .get("http://localhost:3000/api/auth/artists", headers)
        .then(({ data }) => {
          this.artist = data.user;
          console.log("the navbar artist after", this.artist.id);
        })
        .then(() => {
        setInterval(() =>{
          axios
            .get(`http://localhost:3000/api/auctions/${this.artist.id}`)
            .then(({ data }) => {
              console.log("======data", data);
              var myauctions = Object.values(data)[0];
              var myartworks = Object.values(data)[1];
              this.auctions = myauctions;
              //looping through the two arrays and assigning the object of the auction to the object of the artwork
              var mixdata = [];
              for (var i = 0; i < myauctions.length; i++) {
                for (var j = 0; j < myartworks.length; j++) {
                  if (myartworks[j].id == myauctions[i].artwork_id) {
                    var myObj = Object.assign(myartworks[j], myauctions[i]);
                    mixdata.push(myObj);
                  }
                }
              }
         
              this.auctionArtists = mixdata;
              console.log("this is the all auctiobn ",this.auctionArtists)
            });
        },2000  )  
        }); 
    },

    userType() {
      return this.$store.getters.role;
    },
    handleScroll() {
      if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 0";
        document.getElementById("navbar").style.backgroundColor = "#fff";
        document.getElementById("navbar").style.boxShadow =
          "0 1px 10px 5px rgb(92, 91, 90, .1)";
        document.getElementById("dropdown-menu").style.backgroundColor = "#fff";
      }
      if (document.documentElement.scrollTop == 0) {
        document.getElementById("navbar").style.padding = "30px 0";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "0 0 0";
        document.getElementById("dropdown-menu").style.backgroundColor = "#fff";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.get_arist();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.get_arist();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800;900&family=Lexend:wght@100;300;400;500;600;700;800&display=swap");
* {
  padding: 0;
  margin: 0;
}
.navbar {
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  border-radius: 0px;
  min-width: 100vw;
  position: fixed;
  top: 0;
  box-shadow: 0 0 0;
  padding-top: 30px;
  z-index: 10;
  transition: 0.4s;
}
#nav-join {
  font-family: "Lexend", monospace;
  align-items: center;
  color: #a08018;
  font-size: 18px;
  text-align: center;
}
#nav-join:hover {
  color: #000000;
}
.nav-btns {
  align-items: center;
  color: #a08018;
  font-family: "Lexend", monospace;
  font-size: 18px;
  margin-right: 5vw;
  margin-left: 5vw;
  text-decoration: none;
}
.nav-btns:hover {
  color: #000000;
}
.as-btns {
  font-family: "Lexend", monospace;
  margin-top: 10px;
  align-items: center;
  color: #a08018;
  display: flex;
  float: left;
  font-size: 16px;
  height: 100%;
  margin-left: 20px;
  text-decoration: none;
}
.as-btns:hover {
  color: #000000;
}
.navbar-logo {
  width: auto;
  color: #a08018;
  /* margin-left: 50%; */
  margin-left: 5vw;
  margin-right: 5vw;
}
.dropdown-menu {
  background-color: transparent !important;
  backdrop-filter: blur(10px) !important;
}
.dropdown {
  margin-left: 10vh;
  margin-right: 10px;
}
.glyphicon-bell {
  color: #a08018;
  text-decoration: none;
  font-size: 20px;
}
.glyphicon-bell:hover {
  animation: shake 0.5s;
  color: black;
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
.notifications {
  min-width: 420px;
  padding: 10px;
  font-family: "Lexend";
}
.notifications-wrapper {
  overflow: auto;
  max-height: 250px;
}
.menu-title {
  color: #a08018;
  font-size: 1rem;
  display: inline-block;
}
.glyphicon-circle-arrow-right {
  margin-left: 10px;
}
.notification-heading,
.notification-footer {
  padding: 2px 10px;
}
.dropdown-menu.divider {
  margin: 5px 0;
}
.item-title {
  font-size: 1rem;
  color: #000;
}
.notifications a.content {
  text-decoration: none;
  background: #ccc;
}
.notification-item {
  padding: 10px;
  margin: 5px;
  background: #ccc;
  border-radius: 4px;
}
.item-info {
  color: #a08018;
}

@media only screen and (max-width: 600px) {
  
}
</style>
