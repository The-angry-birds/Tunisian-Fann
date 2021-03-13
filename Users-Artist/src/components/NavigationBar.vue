<template>
  <div>
  <div class="navigationBar fixed-top">
    <img
      class="logo"
      src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-2-3.png"
      alt="#"
    />
  </div>
  </div>
  
  
</template>

<script>
export default {};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.navigationBar {
  background-color: #f0eff4;
  height: 50px;
  width: 100%;
  box-shadow: 0px 0px 10px #404040;
}

.logo {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  /* CHECK with the real logo */
  left: 45%;     
  padding: 5px 
}


</style>