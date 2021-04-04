const Sequelize = require("sequelize");
const { sequelize } = require("../index");
const { Artwork } = require("./artwork.model");
const { Artist } = require("./artist.model");

const auction = (sequelize, type) => {
  const auctions = sequelize.define(
    "auction",

    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      artwork_id: {
        type: type.INTEGER,
        allowNull: false,
      },

      startDate: {
        type: type.DATE,
        required: false,
      },
      artist_id: {
        type: type.INTEGER,
        allowNull: false,
      },
      endDate: {
        type: type.STRING,
        required: false,
      },
      starting_price: type.INTEGER,
      currentBid:type.INTEGER,
      currentWinner:type.INTEGER,
      expired:type.BOOLEAN
    },

    { timestamps: false }
  );

  return auctions;
};
const Auction = auction(sequelize, Sequelize);
Artwork.hasMany(Auction, { foreignKey: "artwork_id", as: "artwork" });
Artist.hasMany(Auction, { foreignKey: "artist_id", as: "artists" });
module.exports = { Auction };


