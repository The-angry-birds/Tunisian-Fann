<template>
  <div>
    <h1 class="artworks-header">or buy one of our ARTWORKS</h1>
    <div class="container">
      <b-card
        img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/in-the-garden-artwork-by-bensalem-walid.png"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3 class="card-title">In The Garden</h3>
        <div class="card-by">
          by <a class="card-author" title="author">Bensalem Walid</a>
        </div>
      </b-card>
      <b-card
        img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/Kurt-artwork-by-bensalem-walid.png"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3 class="card-title">Kurt</h3>
        <div class="card-by">
          by <a class="card-author" title="author">Bensalem Walid</a>
        </div>
      </b-card>
      <b-card
        img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/queen-monroe-artwork-by-bensalem-walid-rect.png"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3 class="card-title">Queen Monroe</h3>
        <div class="card-by">
          by <a class="card-author" title="author">Bensalem Walid</a>
        </div>
      </b-card>
      <b-card
        img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/in-the-garden-artwork-by-bensalem-walid.png"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3 class="card-title">In The Garden</h3>
        <div class="card-by">
          by <a class="card-author" title="author">Bensalem Walid</a>
        </div>
      </b-card>
      <b-card
        img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/Kurt-artwork-by-bensalem-walid.png"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3 class="card-title">Kurt</h3>
        <div class="card-by">
          by <a class="card-author" title="author">Bensalem Walid</a>
        </div>
      </b-card>
      <b-card
        img-src="https://www.bensalemwalid.com/wp-content/uploads/2021/02/queen-monroe-artwork-by-bensalem-walid-rect.png"
        img-top
        class="mb-2"
      >
        <b-card-text class="card-category">Digital Paintings</b-card-text>
        <h3 class="card-title">Queen Monroe</h3>
        <div class="card-by">
          by <a class="card-author" title="author">Bensalem Walid</a>
        </div>
      </b-card>
      <button id="loadMore" class="nav-link dropdown-toggle">Load more</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.artworks-header {
  text-align: center;
  margin-top: 25px;
  color: #ad7d52;
  text-shadow: 1px 1px 3px #ad7d52;
}

.container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}

.mb-2 {
  margin: 22px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  width: 300px;
  height: 385px;
}

.card-category {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}

.card-title {
  margin-top: 5px;
  margin-bottom: 10px;
}

.card-by {
  font-size: 12px;
}

.card-author {
  font-weight: 600;
  text-decoration: none;
  color: #ad7d52;
}

img:hover {
  opacity: 0.5;
}

img {
  border-radius: 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

#loadMore {
  text-align: center;
  font-size: 20px;
  color: #ad7d52;
  text-shadow: 1px 1px 3px #ad7d52;
}

#loadMore:hover {
  color: #000000;
  text-shadow: 1px 1px 3px #000000;
}
</style>

