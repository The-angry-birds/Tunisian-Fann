const Router = require("express").Router();
const verifyToken = require("../../db/middleware/verifyToken");
const controller = require("../controllers/auth.controller.js");

Router.post("/login", controller.login);
Router.post("/register", controller.signup);
Router.get("/verify", verifyToken, controller.verify);

module.exports = Router;
