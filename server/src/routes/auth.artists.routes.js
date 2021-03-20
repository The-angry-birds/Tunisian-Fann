const router = require("express").Router();

const artistController = require("../controllers/auth-artist-controller");

router.post("/signup", artistController.signup);
router.post("/login", artistController.login);
router.patch("/upload/:id", artistController.upload);
router.get("/", artistController.getUserData);
module.exports = router;
