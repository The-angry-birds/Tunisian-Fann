const Router = require("express").Router();

const controller = require("../controllers/admin.controller.js");

Router.post("/", controller.login);

module.exports = Router;
