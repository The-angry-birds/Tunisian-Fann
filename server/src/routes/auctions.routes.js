const router = require("express").Router();
const controllerAuction = require("../controllers/auctions.controller");
router.get("/:artist_id", controllerAuction.getAuctionByArtistId);
router.get("/", controllerAuction.getAllauctions);
router.post("/", controllerAuction.createAuction);
router.get("/artist/:id", controllerAuction.getArtworkWithAuction);


module.exports = router;
