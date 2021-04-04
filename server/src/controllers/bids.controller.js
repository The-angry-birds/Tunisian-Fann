const { Auction } = require("../../db/models/auction.model");

const { Bid } = require("../../db/models/bid.model");
const { User } = require("../../db/models/auth.user.model");

module.exports = {
  postOneBid: async (req, res) => {
    try {
      const auction = await Auction.findOne({
        where: { id: req.body.auction_id },
      });
      const user = await User.findOne({ where: { id: req.body.user_id } });
      if (user && auction) {
        const bid = await Bid.create({
          bidValue: req.body.bidValue,
          user_id: user.id,
          auction_id: auction.id,
        });
        res.send("bid created");
      } else {
        res.send("check user id or auction id  ");
      }
    } catch (err) {
      console.log(err);
    }
  },
  TrackBidAuction: async (req, res) => {
    try {
      const bid = await Auction.update(
        {
           currentWinner: req.body.currentWinner,
           currentBid: req.body.currentBid,
           expired:req.body.expired
        },
        { where: { id: req.params.id } }
      );
      res.send("update bidder");
    } catch (err) {
      console.log(err);
    }
  },
  getAllBidForoneAuction: async (req, res) => {
    try {
      const bid = await Bid.findAll({
        where: { auction_id: req.params.id },
      });
      res.send(bid);
    } catch (err) {
      console.log(err);
    }
  }
};
