
const { User } = require("../../db/models/users-model-signup");
const config = require("../../db/configUsers");
const jwt = require("jsonwebtoken");
// exports.getUser = async function (req, res) {
//   try {
//     const data = await User.findOne({ where: {token: req.params.token } });
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
exports.getUser = async (req, res) => {
  try {
    // console.log("=====>", req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const email = await jwt.verify(token, config.secret);
    const user = await User.findOne({
      where: { email: email.email },
    });
    console.log("user ===>", user.dataValues);
    res.send(user.dataValues);
  } catch (err) {
    res.send(err);
  }
};

 