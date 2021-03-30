<template>
  <div class="aboutUs">
    <h1 class="aboutUs-header">About Us</h1>
    <img class="aboutUs-img" src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/soft-voices-artwork-by-bensalem-walid.png" alt="">
    
    <div class="aboutUs-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et arcu
      eget eros semper tempus eget ac nisl. Praesent euismod ligula ligula, quis
      dignissim nunc vestibulum eu. Duis placerat, erat eget blandit lacinia,
      arcu dolor dapibus quam, nec fermentum elit turpis eget leo. Proin
      condimentum metus id massa mollis sodales. Morbi nec nulla sapien. Nam
      ullamcorper gravida justo, ut fringilla ante blandit id. Phasellus vel
      rutrum arcu.</p>
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
  left: 50vw;
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
  width: 500px;
  left: 50vw;
  top: 135vh;
  padding: 20px;
}
</style>

