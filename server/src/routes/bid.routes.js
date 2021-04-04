const router = require("express").Router();
const bidControllers = require("../controllers/bids.controller.js");

router.post("/", bidControllers.postOneBid); 
router.get("/:id", bidControllers.getAllBidForoneAuction);
router.patch("/:id",bidControllers.TrackBidAuction)



module.exports = router;
