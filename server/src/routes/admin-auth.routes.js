const Router = require("express").Router();
const verifyToken = require("../../db/middleware/verifyToken");
const adminController = require("../controllers/admin-auth.controller");

Router.post("/login", adminController.login);
// Router.post("/register", controller.signup);
Router.get("/verify", verifyToken);

module.exports = Router;
