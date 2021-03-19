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
      var token = jwt.sign({ email: req.body.email }, config.secret, {
        expiresIn: "4h",
      });
      const artist = await Artist.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        category: req.body.category,
      });
      if (artist) {
        res.send({
          user: artist,
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
            expiresIn: "60s",
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
  // findArtist: async (req, res) => {
  //   try {
  //     const artist = await Artist.findOne({
  //       where: { email: req.params.email },
  //     });
  //     res.send(artist);
  //   } catch (err) {
  //     res.send(err);
  //   }
  // },
  // findInfo: async (req, res) => {
  //   try {
  //     const artist = await Artist.create({
  //       firstName: req.body.firstName,
  //       lastName: req.body.lastName,
  //       email: req.body.email,
  //     });
  //   } catch (err) {}
  // },
  getUserData: async (req, res) => {
    try {
      // console.log("=====>", req.headers);
      const token = req.headers.authorization.split(" ")[1];
      const email = jwt.verify(token, config.secret);
      const user = await Artist.findOne({
        where: { email: email.email },
      });
      res.send(user);
    } catch (err) {
      res.send(err);
    }
  },
  upload: async (req, res) => {
    try {
      const user = await Artist.update(
        { imageUrl: req.body.image },

        { returning: true, where: { id: req.params.id } }
      );

      res.send("ok");
    } catch (err) {
      res.send(err);
    }
  },
};
