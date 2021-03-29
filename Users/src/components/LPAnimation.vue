<template>
  <header class="header">
    <div class="text-box">
      <h1 class="heading-primary">
        <img
          class="logo"
          src="https://i.ibb.co/z4gFfMj/Tunisian-Fann-Logo.png"
          alt="Logo"
        />

        <span class="heading-primary-sub">Where we value ART</span>
        <hr />
      </h1>
      <a href="#" class="btn btn-header"><span>Discover our auctions </span></a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lexend", serif;
}

header {
  height: 100vh;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url("../assets/header-bg.jpg");
  background-size: cover;
  background-position: bottom left;
  clip-path: polygon(topleft, topright, bottomright, bottomleft);
  /* clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%); */
  position: relative;
  padding-top: 50px;
  padding-bottom: 10em;
}

.logo {
  height: 6rem;
  animation: moveInLeft 1s ease-out;
}

.heading-primary {
  color: #ececec;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 5rem;
}

.heading-primary-sub {
  font-family: "Lexend", sans-serif;
  margin-top: 2em;
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.7rem;
  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation: moveInRight 1s ease-out;
}

.text-box {
  margin-top: 250px;
  margin-left: 900px;
  transform: translate(-50%, -50%);
  text-align: right;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

/** 
 * Button Styling
 */

.btn-header {
  display: inline-block;
  padding: 0.2em 0.5em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  position: relative;
  font-size: 1.2rem;
  transition: 0.1s;
  /* text-shadow: 0px 1px 1px #808080; */
  color: #a08018;
}

/* .btn-ani {
  animation: moveInBottom 1.5s ease-in 0.5s;
  animation-fill-mode: backwards;
} */

.btn-header:hover {
  /* transform: translateY(-2px); */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
  background-color: transparent;
  transition: 0.1s;
}

.btn:after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  /* transition: all 0.7s; */
}

@keyframes moveInBottom {
  0% {
    transform: translateY(10rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.btn-header span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn-header span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn-header:hover span {
  padding-right: 25px;
}

.btn-header:hover span:after {
  opacity: 1;
  right: 0;
}

/** 
 * Button Styling
 */
</style>


