const { User } = require("../../db/models/users-model-signup");
const configUsers = require("../../db/configUsers.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  signup: async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
      });
      if (user) {
        var token = jwt.sign({ email: req.body.email }, configUsers.secret, {
          expiresIn: 86400, // expires in 24 hours
        });
        res.send({ auth: true, token: token });
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
      const user = await User.findOne({
        where: { email: email },
      });
      if (user) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        console.log(hash);

        var result = bcrypt.compareSync(password, user.password);

        if (result) {
          var token = jwt.sign({ email }, configUsers.secret, {
            expiresIn: "1h",
          });
          res.send({ message: "success", auth: true, token: token });
        }
        res.send({ message: "wrrong password", auth: false, token: null });
      } else {
        res.send({ message: "user not found", auth: false, token: null });
      }
    } catch (err) {
      res.send(err);
    }
  },
  findUser: async (req, res) => {
    console.log("req", req.params);
    try {
      const query = await User.findOne({
        where: { email: req.params.email },
      }).then((data) => {
        res.send(data);
      });
    } catch (err) {
      res.send(err);
    }
  },
};
