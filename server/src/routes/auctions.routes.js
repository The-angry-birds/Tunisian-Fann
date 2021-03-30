const router = require("express").Router();

const controllerAuction = require("../controllers/auctions.controller")


router.get("/", controllerAuction.getAllauctions);
router.post("/",controllerAuction.createAuction)
router.get("/:id",controllerAuction.getOneAuction)





module.exports = router;
