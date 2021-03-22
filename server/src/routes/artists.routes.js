const router = require("express").Router();
const controllerArtist = require("../controllers/artists-controller.js");

router.get("/", controllerArtist.getArtist);
router.delete("/:id", controllerArtist.deleteArtist);
module.exports = router;
