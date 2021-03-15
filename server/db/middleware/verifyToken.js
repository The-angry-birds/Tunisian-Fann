const jwt = require("jsonwebtoken");
const config = require("../config");
verifyToken = (req, res, next) => {
  try {
    let user = { email: "ines-piazzese.ines@gmail.com" };

    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];
    const t = jwt.verify(token, config.secret);
    const newtoken = jwt.sign(user, config.secret, { expiresIn: "10s" });

    res.send({ auth: true, token: newtoken });
  } catch (err) {
    res.send(err);
  }
};
// };

module.exports = verifyToken;
