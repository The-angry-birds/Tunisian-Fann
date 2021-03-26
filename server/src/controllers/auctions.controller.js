const { Auction } = require("../../db/models/auction");
const { Artwork } = require("../../db/models/artwork");



module.exports = {
  createAuction: async (req, res) => {
    try {
     
      const ArtworkData = await Artwork.findOne({
        where: { artWork_id: req.body.artWork_id },
      });

      const auction = await Auction.create({
        artWork_id: req.body.artWork_id,
        startDate: req.body.startDate,
        startTime: req.body.startTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
      });
      console.log("==================", auction);
      res.send(auction);
    } catch (err) {
      res.send(err);
    }
  },
  getAllauctions : async function (req, res) {
    try {
      const data = await Auction.findAll({});
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  }
};
