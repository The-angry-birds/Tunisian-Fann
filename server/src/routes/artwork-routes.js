const router = require("express").Router();

const artworkController = require("../controllers/artwork-controller.js");

router.post("/", artworkController.create);
module.exports = router;
