const { Auction } = require("../../db/models/auction");
const { Artwork } = require("../../db/models/artwork");
const { User } = require("../../db/models/users-model-signup");
module.exports = {
  createAuction: async (req, res) => {
    try {
      console.log("title", req.body.id);
      // console.log("startDate", req.body.startDate);
      // console.log("endDate", req.body.endDate);
      // console.log("starting_price", req.body.starting_price);

      // if (artworkData) {
      //   res.send("finished the auction");
      // } else {
      const auction = await Auction.create({
        artwork_id: req.body.id,
        artist_id: req.body.artist_id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        starting_price: req.body.starting_price,
      });

      res.send("created");
      // }
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
  getOneAuction: async (req, res)=> {
    try {
      const auction = await Auction.findOne({
        where: { id:req.params.id },
      })
      res.send(auction);
  }catch (err) {
    console.log(err)
  }
}

};

