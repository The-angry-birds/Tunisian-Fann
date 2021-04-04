const router = require("express").Router();
const verifyController  = require("../controllers/auth.verify.controller.js");
router.post("/", verifyController.verifyToken);
module.exports = router;