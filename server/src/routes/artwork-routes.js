const router = require("express").Router();

const artworkController = require("../controllers/artwork-controller.js");

router.post("/", artworkController.create);
router.get("/id", artworkController.getAll);
router.get("/", artworkController.getAllartworks)



router.delete("/:id", artworkController.deleteOne);
router.put("/:id", artworkController.updateArtwork);



module.exports = router;
