const router = require("express").Router();

const artistController = require("../controllers/auth-artist-controller");
router.get("/", artistController.getUserData);
router.post("/signup", artistController.signup);
router.post("/login", artistController.login);
router.patch("/upload/:id", artistController.upload);
router.post("/verify", artistController.verifyToken);
router.put("/:id", artistController.updateInfo);
module.exports = router;
