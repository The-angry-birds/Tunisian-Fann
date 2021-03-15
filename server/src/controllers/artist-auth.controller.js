const { Artist } = require("../../db/models/artist-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const config = require("../../db/config");

module.exports = {
  signup: async (req, res) => {
    const artist = await Artist.create({
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      category: req.body.category,
    });
  },
};
