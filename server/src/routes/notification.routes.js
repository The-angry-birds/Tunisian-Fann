const router = require("express").Router();
const notificationControllers = require("../controllers/notificationsArtist-controller.js");

router.post("/",notificationControllers.postNotification);
router.get("/:id",notificationControllers.getAllNotification);
module.exports = router;