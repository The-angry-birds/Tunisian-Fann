<template>
  <footer id="fh5co-footer" class="fh5co-bg" role="contentinfo">
    <div class="overlay"></div>
    <div class="container">
      <div class="row row-pb-md">
        <div class="col-md-4 fh5co-widget">
          <h3>A Little About Tunisian Fann</h3>
          <p>
            Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
            reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
          </p>
          <p><a class="btn" href="#">Join us</a></p>
        </div>
        <div class="col-md-8">
          <h3 class="classes-title">Classes</h3>
          <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="fh5co-footer-links">
              <li><a href="#">Example</a></li>
              <li><a href="#">Example</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="fh5co-footer-links">
              <li><a href="#">Example</a></li>
              <li><a href="#">Example</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="fh5co-footer-links">
              <li><a href="#">Example</a></li>
              <li><a href="#">Example</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row copyright">
        <div class="col-md-12 text-center">
          <p>
            <small class="block">&copy; 2021 | All Rights Reserved.</small>
            <small class="block">Powered by The Angry Birds</small>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Spectral", serif;
}
.fh5co-bg {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.fh5co-bg {
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;
  float: left;
}
.fh5co-bg .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

#fh5co-footer {
  margin-top: 2em;
  padding-top: 2em;
}
@media screen and (max-width: 768px) {
  #fh5co-footer {
    padding: 3em 0;
  }
}

#fh5co-footer {
  position: relative;
}
#fh5co-footer .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(240, 240, 240);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
#fh5co-footer h3 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: black;
}
#fh5co-footer .fh5co-footer-links {
  padding: 0;
  margin: 0;
}
#fh5co-footer .fh5co-footer-links li {
  padding: 0;
  margin: 0;
  list-style: none;
}
#fh5co-footer .fh5co-footer-links li a {
  color: black;
  text-decoration: none;
}
#fh5co-footer .fh5co-footer-links li a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  #fh5co-footer .fh5co-widget {
    text-align: left;
  }
}
#fh5co-footer .fh5co-widget h3 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#fh5co-footer .copyright .block {
  display: block;
}

.btn {
  color: rgb(0, 0, 0);
}

.classes-title {
  margin-left: 15px;
}
</style>