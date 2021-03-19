const routerArtist = require("express").Router();

const artistController = require("../controllers/artist-auth.controller");

routerArtist.get("/", artistController.getUserData);
module.exports = routerArtist;
