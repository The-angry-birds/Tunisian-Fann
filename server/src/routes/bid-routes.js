const router = require("express").Router();
const bidControllers = require("../controllers/bid-controllers.js");

router.post("/", bidControllers.postOneBid);
router.get("/:id", bidControllers.getAllBidForoneAuction);

module.exports = router;
