const { Artist } = require("../../db/models/artist.model.js");
const { User } = require("../../db/models/auth.user.model");
const config = require("../../db/configArtist");
const jwt = require("jsonwebtoken");

//this is a middleware that will get me the artist or the user
module.exports = {
  verifyToken: async (req, res) => {
    try {
      //getting the token from the request body
      const token = req.body.token;
      //generate the email out of the token
      const email = jwt.verify(token, config.secret).email;
      //finding the artist by email
      const artist = await Artist.findOne({
        where: { email: email },
      });
      //finding the guest by email
      const user = await User.findOne({ where: { email: email } });

      //returning an artist if the user is an artist
      if (artist) {
        res.send({ user: artist.dataValues, type: "artist" });
      } else if (user) {
        //returning a guest otherwise
        res.send({ user: user, type: "guest" });
      } else {
        res.send({ user: null });
      }
    } catch (e) {
      res.send(e);
    }
  },
};
