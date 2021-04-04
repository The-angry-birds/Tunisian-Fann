const router = require("express").Router();

const artworkController = require("../controllers/artworks.controller");

router.post("/", artworkController.create);
router.get("/id", artworkController.getAll);
router.delete("/:id", artworkController.deleteOne);
router.put("/:id", artworkController.updateArtwork);
router.get("/", artworkController.getAllartworks);
router.get("/:id",artworkController.getOneartwork)
router.get("/artist/:id",artworkController.getUserArtistartwork)



module.exports = router;
