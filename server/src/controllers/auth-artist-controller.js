const { Artist } = require("../../db/models/artist.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const config = require("../../db/configArtist");

module.exports = {
  signup: async (req, res) => {
    console.log("jhjkjkeee")
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
        imageUrl:req.body.imageUrl,
        description:req.body.description
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
            expiresIn: "4h",
          });

          res.send({ message: "success", auth: true, token: token,user:artist });
        } else {
          res.send({ message: "wrong password", auth: false, token: null,user:null });
        }
      } else {
        res.send({ message: "user not found", auth: false, token: null,user :null});
      }
    } catch (err) {
      res.send(err);
    }
  },

  getUserData: async (req, res) => {
    try {
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
  updateInfo: async (req, res) => {
    try {
      const update = await Artist.update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          description: req.body.description,
        },
        { where: { id: req.params.id } }
      );
      console.log("====", update);
      res.send("changed");
    } catch (err) {
      res.send(err);
    }
  },
  verifyToken: async (req, res) => {
    try {

      const token = req.body.token
      console.log("============",token, config.secret);
      const {email} = jwt.verify(token, config.secret);
      console.log(email);
      const {dataValues} = await Artist.findOne({
        where: { email },
      });
      res.json({auth: true, artist: dataValues})
    } catch (e) {
      res.send(e);
    }
  }
};
