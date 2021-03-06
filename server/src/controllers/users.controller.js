const { User } = require("../../db/models/auth.user.model");
const jwt = require("jsonwebtoken");
const config = require("../../db/configArtist");

exports.getUser = async function (req, res) {
  try {
    const data = await User.findAll({});
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
exports.editUser = async function (req, res) {
  try {
    const data = await User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        imageUrl: req.body.imageUrl,
      },
      { where: { id: req.params.id } }
    );
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
};

exports.getUserByToken = async (req, res) => {
  try {
    console.log("=====>", req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const email = jwt.verify(token, config.secret);
    const user = await User.findOne({
      where: { email: email.email },
    });
    res.send({ user: user });
  } catch (err) {
    res.send(err);
  }
};
exports.bannedUser = async function (req, res) {
  try {
    const bannedUser = await User.update(
      {
        banned: true,
      },
      { where: { id: req.params.id } }
    );
    res.send(bannedUser);
  } catch (err) {
    console.log(err);
  }
};
