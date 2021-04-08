<template>
  <div class="aboutUs">
    <h1 class="aboutUs-header">About Us</h1>
    <img class="aboutUs-img" src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/soft-voices-artwork-by-bensalem-walid.png" alt="">
    
    <div class="aboutUs-body">
      <p>Welcome to Tunisian Fann, your number one source for fine art in Tunisia! Tunisian Fann envisions a future where everyone is touched by art. In order to achieve this , we’re expanding the art market to reach more artists and art around Tunisia. As the leading marketplace to discover, buy, and sell fine art, Tunisian Fann believes that the process of buying art should be as sensational as art itself. That’s why we’re dedicated to giving you the joyful, welcoming experience that connects collectors with the artists and artwork they love. Check out the artwork on display and start bidding today!</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  font-family: "Lexend", serif;
}

.aboutUs{
  text-align: center;
  margin-top: 100px;
}

.aboutUs-header {
  position: absolute;
  color: white;
  left: 40vw;
  top: 125vh;
}
.aboutUs-img {
  width: 60%;
  height: 70vh;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  object-fit: cover;
}
.aboutUs-body {
  position: absolute;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 50%;
  left: 40vw;
  top: 135vh;
  padding: 20px;
}

@media screen and (max-width: 640px) {
  .aboutUs-body {
  position: absolute;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 50%;
  left: 40vw;
  top: 135vh;
  padding: 20px;
}
}
</style>

