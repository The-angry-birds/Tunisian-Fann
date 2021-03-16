const router = require("express").Router();

const adminController = require("../controllers/artist-auth.controller");

router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
// router.get("/verify", verifyToken);

module.exports = router;
