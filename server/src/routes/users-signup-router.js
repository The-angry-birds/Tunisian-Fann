const router = require("express").Router();
const UsersControllerSignUp = require("../controllers/users-signup-contoller.js");




router.post("/signup",UsersControllerSignUp.signup)
// router.post("/login")

module.exports = router;
