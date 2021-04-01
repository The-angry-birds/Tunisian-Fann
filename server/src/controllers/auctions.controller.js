const { Auction } = require("../../db/models/auction");
const { Artwork } = require("../../db/models/artwork");

module.exports = {
  createAuction: async (req, res) => {
    try {
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
  //this function is to get the auctions of all the artists
  getAllauctions: async function (req, res) {
    try {
      const auctions = await Auction.findAll({
        raw: true,
      });
      const artworks = await Artwork.findAll({
        raw: true,
      });
      var artworksArray = Object.values(artworks);
      var auctionsArray = Object.values(auctions);
      var data = [];

      for (var j = 0; j < auctionsArray.length; j++) {
        if (artworksArray.id === auctionsArray.artwork_id) {
          var obj = Object.assign(artworksArray[j], auctionsArray[j]);
          data.push(obj);
        }
      }
      console.log("data", data);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  },

  //this function is to get all the artworks of that artist and the auctions of that specific artist.
  getAuctionByArtistId: async (req, res) => {
    try {
      const data = await Auction.findAll({
        where: { artist_id: req.params.artist_id },
        attributes: [
          "id",
          "startDate",
          "endDate",
          "starting_price",
          "artwork_id",
          "artist_id",
        ],
        raw: true,
      });
      const artwork = await Artwork.findAll({
        where: { artist_id: req.params.artist_id },
      });
      res.send({ data: data, artwork: artwork });
    } catch (err) {
      res.send(err);
    }
  },
  getArtworkWithAuction: async (req, res) => {
    try {
      const artwork = await Auction.findOne({
        where: {
          artist_id: req.params.artist_id,
          artwork_id: req.params.artwork_id,
        },
      });
      res.send(artwork);
    } catch (err) {
      console.log(err);
    }
  },
};
