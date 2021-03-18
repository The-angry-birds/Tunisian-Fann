const router = require("express").Router();
const controllerUsers = require("../controllers/users-controller.js");

router.get('/',controllerUsers.getUser)


module.exports = router;
