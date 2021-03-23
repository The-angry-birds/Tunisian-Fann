<template>
  <div class="notification">
    <table class="table">
      <div class="alert">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
          >&times;</span
        >
        <h3>Auction</h3>
        <span class="card__time">01 Days : 11 Hrs : 59 Min</span>
        <h3>
          <span class="card__category">Digital Paintings</span>
        </h3>

        <h2>
          <span class="card__by"
            >by
            <a href="#" class="card__author" title="author"
              >Bensalem Walid</a
            ></span
          >
          <span class="card__price">Start Price : 120,000Dt</span>
        </h2>
      </div>
    </table>
  </div>
</template>

<script>
export default {};
</script>
<style>
.alert {
  /* padding: 30px; */
  background-color: #304156;
  color: white;
  width: 100%;
  margin-top: 10px;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
.table {
  padding: 30px;
  border-collapse: collapse;
  width: 90%;

  left: 60px;
  height: 5px;
  margin-left: 70px;

  border: 1px solid #ddd;
  /* position:absolute */
}
.card__price{
  margin-left:900px
}
</style>
