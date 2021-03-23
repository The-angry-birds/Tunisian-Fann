const { User } = require("../../db/models/users-model-signup");
const config = require("../../db/configUsers");
const jwt = require("jsonwebtoken");
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
    
        firstName: req.body.userName,
        lastName: req.body.lastName,
        email:req.body.email,
        
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
    // console.log("=====>", req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const verification = jwt.verify(token, config.secret);
    const user = await User.findOne({
      where: { email: verification.email },
    });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};
