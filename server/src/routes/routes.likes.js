const router = require("express").Router({ mergeParams : true });
const likesController = require("../controllers/likes.controller");
 

router.post('/',likesController.setlike)



module.exports = router;
