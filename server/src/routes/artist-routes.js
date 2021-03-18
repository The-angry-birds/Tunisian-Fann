const router = require("express").Router();
const controllerArtist = require("../controllers/artist-controller.js");

router.get("/", controllerArtist.getArtist);

module.exports = router;
