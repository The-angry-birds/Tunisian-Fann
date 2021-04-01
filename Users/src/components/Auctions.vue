<template>
  <div>
    <div class="auctions-header"></div>
    <div  class="container">
      <SingleAuction
        v-for="(auction, i) in auctions"
        :key="i"
        :auction="auction"
      
      />
        <!-- :sharedData="sharedData" -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleAuction from "./SingleAuction";

export default {
  data() {
    return {
      artwork_id: "",
      auctions: {},
      auction: {},
    };
  },
  methods: {
    getAuctions() {
      axios.get("http://localhost:3000/api/auctions").then((res) => {
        console.log(res);
        this.auctions = res.data;
      });
    },
 
  },
  components: {
    SingleAuction,
  },
  mounted() {
    // this.sharedData()
    this.getAuctions();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

.auctions-header {
  margin-top: 120px;
}

.container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

</style>

