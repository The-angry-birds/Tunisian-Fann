const { Auction } = require("../../db/models/auction");
const { Artwork } = require("../../db/models/artwork");
const { Artist } = require("../../db/models/artist");
const { category } = require("../../db/models/categories.model");
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
        currentBid: null,
        currentWinner: null,
        expired: null,
      });

      res.send("created");
      // }
    } catch (err) {
      res.send(err);
    }
  },
  //this function is to get the auctions of all the artists
  getAllauctions: async (req, res) => {
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
        for (var i = 0; i < artworksArray.length; i++)
          if (auctionsArray[j].artwork_id === artworksArray[i].id) {
            var obj = Object.assign(artworksArray[i], auctionsArray[j]);
            data.push(obj);
          }
      }
      // console.log("data", data);

      for (let i = 0; i < data.length; i++) {
        Artist.findOne({
          where: { id: data[i].artist_id },
          raw: true,
        }).then((artist) => {
          data[i].artist = artist;
          category
            .findOne({
              where: { id: data[i].category_id },
              raw: true,
            })
            .then((categoryData) => {
              data[i].category = categoryData;
              // console.log(auction);
              console.log("=========== DATA AFTER CHANGE ===========", data);
              if (i == data.length - 1) {
                console.log("======= sending back data ======");
                res.send(data);
                return;
              }
            })
            .catch((error) => {
              console.error(error);
              throw error;
            });
        });
      }
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
          "currentBid",
          "currentWinner",
          "expired",
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
      const artwork = await findAll({
        include: { model: Artwork, required: true },
        where: { artist_id: req.params.id },
      });
      res.send(artwork);
    } catch (err) {
      console.log(err);
    }
  },
};
