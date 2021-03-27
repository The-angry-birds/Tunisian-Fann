const Sequelize = require("sequelize");
const { sequelize } = require("../index");
const { Artwork } = require("./artwork");
const { Artist } = require("./artist");

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
    },

    { timestamps: true }
  );

  return auctions;
};
const Auction = auction(sequelize, Sequelize);
Artwork.hasMany(Auction, { foreignKey: "artwork_id", as: "artwork" });
Artist.hasMany(Auction, { foreignKey: "artist_id", as: "artists" });
module.exports = { Auction };

module.exports = { Auction };
