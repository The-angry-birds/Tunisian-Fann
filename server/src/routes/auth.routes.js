const Router = require("express").Router();
const verifyToken = require("../../db/middleware/verifyToken");
const controller = require("../controllers/auth.controller.js");

Router.post("/login", verifyToken, controller.login);
Router.post("/register", controller.signup);
Router.get("/token",);
module.exports = Router;
