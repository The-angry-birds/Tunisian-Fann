const router = require("express").Router();
const notificationControllers = require("../controllers/notification.controller");

router.post("/",notificationControllers.postNotification);
router.get("/:id",notificationControllers.getAllNotification);
module.exports = router;