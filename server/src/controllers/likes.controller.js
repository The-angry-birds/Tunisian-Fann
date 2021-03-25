const { Likes } = require("../../db/models/likes");

module.exports = {
  setlike: async (req, res) => {
    try {
      const existingLike = await Likes.findOne({
        where: { artwork_id: req.body.artwork_id, user_id: req.body.user_id },
      });
      if (existingLike) {
        res.send("Already liked!");
      } else {
        const newLike = await Likes.create({
          artwork_id: req.body.artwork_id,
          user_id: req.body.user_id,
        });
        res.send("Liked!");
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
    getlikes: async (req, res) => {
    try {
      const findLikes = await Likes.findOne({ where: { id: req.params.id } });
      res.send(findLikes);
    } catch (err) {
      res.send(err);
    }
  }
};




