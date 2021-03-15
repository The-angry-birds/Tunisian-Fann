const router = require("express").Router();
const verifyToken = require("../../db/middleware/verifyToken");
const adminController = require("../controllers/admin-auth.controller");

router.post("/login", controller.login);
// Router.post("/register", controller.signup);
router.get("/verify", verifyToken);

module.exports = router;
