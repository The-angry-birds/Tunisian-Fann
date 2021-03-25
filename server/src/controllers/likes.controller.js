const { Likes } = require("../../db/models/likes");

module.exports = {
  setlike: async (req, res) => {
    try {
      const existingLike = await Likes.findOne({
        where: { artwork_id: req.body.artwork_id, userId: req.body.userId },
      });
      console.log(
        "🚀 ~ file: likes.controller.js ~ line 11 ~ setlike: ~ existingLike",
        existingLike
      );
      if (existingLike) {
        res.send("Nooooop");
      } else {
        const newLike = await Likes.create({
          artwork_id: req.body.artwork_id,
          userId: req.body.userId,
        });
        console.log("🚀 newLike", newLike);
        res.send("yaaaaas!!!");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
