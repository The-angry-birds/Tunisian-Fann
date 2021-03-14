const { Admin } = require("../../db/models/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const config = require("../../db/config");
module.exports = {
  login: async (req, res) => {
    // these lines of codes are just for hashing the password in the database
  //   const salt = bcrypt.genSaltSync(saltRounds);
  //   const hash = bcrypt.hashSync(req.body.password, salt);
  //   const data = Admin.build({ email: req.body.email, password: hash });
  //   var that = await data.save();
  //   res.send(that);
  // }
    try {
      var admindata = req.body;
      const admin = await Admin.findOne({ where: { email: admindata.email } });
      if (admin) {
        var result = bcrypt.compareSync(admindata.password, admin.password);
        if (result) {
          var token = jwt.sign({ email: admindata.email }, config.secret, {
            expiresIn: "60s", // expires in 24 hours
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
  }
  //   signup: async (req, res) => {
  //     var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  //     try {
  //       const user = await Admin.create({
  //         email: req.body.email,
  //         password: hashedPassword,
  //       });
  //       if (user) {
  //         var token = jwt.sign({ email: req.body.email }, config.secret, {
  //           expiresIn: 86400, // expires in 24 hours
  //         });
  //         res.send({ auth: true, token: token });
  //       } else {
  //         res.send({
  //           message: "There was a problem registering the user",
  //           auth: false,
  //           token: null,
  //         });
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  // },
};
