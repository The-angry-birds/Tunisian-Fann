<template>
  <header class="header">
    <div class="logo-box">
      <img
        class="logo"
        src="https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg"
        alt="Logo"
      />
    </div>
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">ART</span>
        <span class="heading-primary-sub">for a special experience</span>
      </h1>
      <a href="#" class="btn btn-white">Discover our auctions</a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Spectral", serif;
}

header {
  height: 90vh;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.1)
    ),
    url(https://wallpaperaccess.com/full/1373056.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(topleft, topright, bottomright, bottomleft);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
  margin-top: 50px;
}

.logo-box {
  position: absolute;
  top: 4rem;
  left: 4rem;
}

.logo {
  height: 3.5rem;
  animation: moveInRight 1s ease-out;
}

.heading-primary {
  color: #ececec;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
}

.heading-primary-main {
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}

.heading-primary-sub {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation: moveInRight 1s ease-out;
}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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

.btn {
  display: inline-block;
  padding: 0.4rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all 0.2s;
  position: relative;
  font-size: 1.2rem;
  text-shadow: 0px 1px 1px #808080;
}

.btn-white {
  background-color: #fff;
  color: #000000;
}

.btn-ani {
  animation: moveInBottom 1.5s ease-in 0.5s;
  animation-fill-mode: backwards;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
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
  transition: all 0.7s;
}

.btn-white:after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.5) scaleY(1.5);
  opacity: 0;
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
</style>


