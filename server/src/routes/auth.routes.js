const router = require("express").Router();
const verifyToken = require("../../db/middleware/verifyToken");
const controller = require("../controllers/auth.controller.js");

router.post("/login", controller.login);
// Router.post("/register", controller.signup);
router.get("/verify", verifyToken);

module.exports = router;
