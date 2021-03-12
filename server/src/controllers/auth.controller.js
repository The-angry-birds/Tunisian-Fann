const { Admin } = require("../../db/models/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../db/config");
module.exports = {
  login: async (req, res) => {
    try {
      var admindata = req.body;
      const admin = await Admin.findOne({ where: { email: admindata.email } });
      if (admin) {
        // bcrypt.compare(admindata.password, admin.password).then((result) => {
        if (admindata.password === admin.password) {
          var token = jwt.sign({ email: admindata.email }, config.secret, {
            expiresIn: 86400, // expires in 24 hours
          });
          res.send({ message: "success", auth: true, token: token });
        } else {
          res.send({ message: "wrong password", auth: false, token: null });
        }
        // });
      } else {
        res.send({ message: "admin not found", auth: false, token: null });
      }
    } catch (err) {
      console.error(err);
    }
  },
  signup: async (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    try {
      const user = await Admin.create({
        email: req.body.email,
        password: hashedPassword,
      });
      if (user) {
        var token = jwt.sign({ email: req.body.email }, config.secret, {
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
      console.error(err);
    }
  },
};
