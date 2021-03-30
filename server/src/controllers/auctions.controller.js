const { Auction } = require("../../db/models/auction");
const { Artwork } = require("../../db/models/artwork");
const { User } = require("../../db/models/users-model-signup");
module.exports = {
  createAuction: async (req, res) => {
    try {
      const artworkData = await Auction.findOne({
        where: {
          artwork_id: req.body.artwork_id,
          artist_id: req.body.artist_id,
        },
      });
      if (artworkData) {
        res.send("finished the auction");
      } else {
        const auction = await Auction.create({
          artwork_id: req.body.artwork_id,
          artist_id: req.body.artist_id,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          startPrice:req.body.startPrice,
        });

        res.send("created");
      }
    } catch (err) {
      res.send(err);
    }
  },
  getAllauctions: async function (req, res) {
    try {
      const data = await Auction.findAll({});
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  },
};

