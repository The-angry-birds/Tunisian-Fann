const express = require("express");
const Router = require("express").Router();

const controller = require("../controllers/controller.js");

Router.post("/", controller.register);
module.exports = Router;
