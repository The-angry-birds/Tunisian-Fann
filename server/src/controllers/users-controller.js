const { User } = require("../../db/models/users-model-signup");

exports.getUser = async function (req, res) {
    try {
      const data = await User.findOne();
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };