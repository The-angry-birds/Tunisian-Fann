const router = require("express").Router();

const adminController = require("../controllers/auth-admin-controller.js");

// router.post("/signup", adminController.signup);
router.post("/login", adminController.login);

module.exports = router;
