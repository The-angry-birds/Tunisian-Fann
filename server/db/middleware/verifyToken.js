const jwt = require("jsonwebtoken");
const config = require("../config");
verifyToken = (req, res, next) => {
  let email = req.body.email;
  let user = { email };
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: "No token provided.",
    });
  } else {
    try {
      var t = jwt.verify(token, config.secret);

      var newtoken = jwt.sign(user, config.secret);
      res.send({ auth: true, token: newtoken });
    } catch (err) {
      res.send(err);
    }
  }

  next();
};

module.exports = verifyToken;
