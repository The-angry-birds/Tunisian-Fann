const router = require("express").Router();
const controllerUsers = require("../controllers/users.controller");


router.get('/',controllerUsers.getUser)
router.patch('/:id',controllerUsers.editUser)
router.get('/getUserByToken',controllerUsers.getUserByToken)    
router.put('/:id',controllerUsers.bannedUser)    



module.exports = router;
