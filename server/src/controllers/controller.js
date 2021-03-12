const { Admin } = require("../../db/index.js");
module.exports.register = async (req, res) => {
  try {
    const data = await Admin.create(req.body);
    res.send("hello");
  } catch (err) {
    res.send(err);
  }
};
