const router = require("express").Router();
const controllerArtist = require("../controllers/artist-controller.js");

router.get("/", controllerArtist.getArtist);
router.delete("/:id",controllerArtist.deleteArtist)
module.exports = router;
