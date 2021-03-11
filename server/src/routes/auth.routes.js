const Router = require("express").Router();

const controller = require("../controllers/auth.controller.js");

Router.post("/login", controller.login);

module.exports = Router;
