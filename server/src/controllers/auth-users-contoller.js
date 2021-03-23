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
      var token = jwt.sign({ email: req.body.email }, configUsers.secret, {
        expiresIn: 86400, 
      });
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        token: token,
      });
      if (user) {
        var token = jwt.sign({ email: req.body.email }, configUsers.secret, {
          expiresIn: 86400,
        });
        res.send({ user:user, auth: true, token: token });
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
        var result = await bcrypt.compareSync(password, user.password);
        if (result) {
          var token = jwt.sign({ email }, configUsers.secret, {
            expiresIn: "1h",
          });
          res.send({  user:user,message: "success", auth: true, token: token });
        } else {
          res.send({ message: "wrong password", auth: false, token: null });
        }
      } else {
        r 
      }
    } catch (err) {
      res.send(err);
    }
  },
  findUser: async (req, res) => {
    console.log("req=====>", req.params);
    try {
      const query = await User.findOne({
        where: { token: req.params.email },
      }).then((data) => {
        res.send(data);
      });
    } catch (err) {
      res.send(err);
    }
  },
};