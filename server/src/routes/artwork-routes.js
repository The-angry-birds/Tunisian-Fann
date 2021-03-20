const router = require("express").Router();

const artworkController = require("../controllers/artwork-controller.js");

router.post("/", artworkController.create);

router.get("/:id", artworkController.getAll);
module.exports = router;
