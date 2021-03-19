const router = require("express").Router({ mergeParams : true });
const UsersControllerSignUp = require("../controllers/auth-users-contoller.js");
router.post("/signup",UsersControllerSignUp.signup)
router.post("/login",UsersControllerSignUp.login)
router.get("/:email",UsersControllerSignUp.findUser)


module.exports = router;
