<template>
  <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Tunisian Fann</h5>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Services</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Auctions</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Artworks</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Join Us</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-instagram"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-google-plus"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#" target="_blank"><i class="fa fa-envelope"></i></a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
        >
          <p>
            <u
              ><a href="https://github.com/The-angry-birds"
                >The Angry Birds</a
              ></u
            >
          </p>
          <p class="h6" style="color: black">© All rights reserved.</p>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&display=swap");

section {
  margin-top: 30px;
  padding-top: 60px;
}
section .section-title {
  text-align: center;
  color: #000000;
  text-transform: uppercase;
}
.row {
  margin-top: -20px;
}
#footer {
  background: rgb(255, 255, 255) !important;
  box-shadow: 0px 4px 5px #888, 0px -4px 5px #888;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid black;
  color: black;
}
#footer a {
  color: #000000;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  color: #a08018;
  padding-right: 25px;
  padding-left: 25px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #000000;
}
#footer ul.social li a:hover {
  color: #000000;
}
#footer ul.quick-links li {
  padding: 3px 0;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
  padding: 3px 0;
  margin-left: 5px;
  font-weight: 700;
}
#footer ul.quick-links li a i {
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
  font-weight: 700;
  color: black;
}
@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
