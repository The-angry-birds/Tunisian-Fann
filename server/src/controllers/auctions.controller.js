const { Auction } = require("../../db/models/auction");

exports.getAllauctions = async function (req, res) {
    try {
      const data = await Auction.findAll({});
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };