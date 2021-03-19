const { Artist } = require("../../db/models/artist.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const config = require("../../db/configArtist");

module.exports = {
  signup: async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const artist = await Artist.create({
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        category: req.body.category,
      });
      if (artist) {
        var token = jwt.sign({ email: req.body.email }, config.secret, {
          expiresIn: 86400, // expires in 24 hours
        });
        res.send({
          message: "congrats you are registred",
          auth: true,
          token: token,
        });
      } else {
        res.send({
          message: "There was a problem registering the user",
          auth: false,
          token: null,
        });
      }
    } catch (err) {
      res.send(err);
    }
  },

  login: async (req, res) => {
    try {
      var { email, password } = req.body;
      const artist = await Artist.findOne({
        where: { email: email },
      });
      if (artist) {
        var result = bcrypt.compareSync(password, artist.password);
        if (result) {
          var token = jwt.sign({ email: email }, config.secret, {
            expiresIn: "10s", // expires in 24 hours
          });

          res.send({ message: "success", auth: true, token: token });
        } else {
          res.send({ message: "wrong password", auth: false, token: null });
        }
      } else {
        res.send({ message: "user not found", auth: false, token: null });
      }
    } catch (err) {
      res.send(err);
    }
  },
};
