const router = require("express").Router();
const verifyToken = require("../../db/middleware/verifyToken");
const adminController = require("../controllers/admin-auth.controller");

router.post("/login", adminController.login);
router.get("/verify", verifyToken);

module.exports = router;