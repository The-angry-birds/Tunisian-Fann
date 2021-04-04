const router = require("express").Router();
const controllerArtist = require("../controllers/artists.controller.js");

router.get("/", controllerArtist.getArtist);
router.get("/:id",controllerArtist.getbanned)
router.put("/:id",controllerArtist.bannedArtist)
router.put("/accept/:id/",controllerArtist.acceptArtist)

module.exports = router;






