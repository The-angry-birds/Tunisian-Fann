const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken.js");
const adminController = require("../controllers/auth-admin-controller");

router.post("/login", adminController.login);
router.get("/verify", verifyToken);

module.exports = router;
