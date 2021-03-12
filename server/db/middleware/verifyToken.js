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
  }

  jwt.verify(token, config.secret, (err, user) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: "Fail to Authentication. Error -> " + err,
      });
    }
    req.user = user;

    next();
  });
};

module.exports = verifyToken;
