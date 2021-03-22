const router = require("express").Router();
const controllerUsers = require("../controllers/users-controller.js");


router.get('/',controllerUsers.getUser)
router.patch('/:id',controllerUsers.editUser)
router.get('/getUserByToken',controllerUsers.getUserByToken)


module.exports = router;
