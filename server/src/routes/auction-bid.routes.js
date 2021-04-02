
const router = require("express").Router();
const controllerauction=require("../controllers/auction-bid-controller.js");
router.get("/:id",controllerauction.getoneauction)
module.exports = router;