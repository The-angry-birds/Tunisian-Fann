const { Admin } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    try {
      var admindata = req.body;
      const admin = await Admin.findOne({ where: { email: admindata.email } });
      if (admin) {
        bcrypt.compare(admindata.password, admin.password).then((result) => {
          if (result) {
            res.send("success");
          } else {
            res.send("wrong password");
          }
        });
      } else {
        res.send("admin not found");
      }
    } catch (err) {
      console.error(err);
    }
  },
};
