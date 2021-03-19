<template>
  <header class="header">
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">Tunisian Fann</span>
        <span class="heading-primary-sub">for a special experience</span>
      </h1>
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
  height: 100vh;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.1)
    ),
    url(https://www.bensalemwalid.com/wp-content/uploads/2021/02/in-the-garden-artwork-by-bensalem-walid.png);
  background-size: cover;
  background-position: top;
  clip-path: polygon(topleft, topright, bottomright, bottomleft);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
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
