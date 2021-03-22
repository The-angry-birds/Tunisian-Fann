const router = require("express").Router();
const controllerArtist = require("../controllers/artists-controller.js");

router.get("/", controllerArtist.getArtist);
router.get("/:id", controllerArtist.getbanned);
router.put("/:id", controllerArtist.bannedArtist);

module.exports = router;
