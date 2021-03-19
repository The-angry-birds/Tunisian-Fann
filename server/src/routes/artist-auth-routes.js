const router = require("express").Router();

const artistController = require("../controllers/artist-auth.controller");

router.post("/signup", artistController.signup);
router.post("/login", artistController.login);
router.put("/upload/:id", artistController.upload);
module.exports = router;
