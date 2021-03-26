const Sequelize = require("sequelize");
const { sequelize } = require("../index");
const { Artwork } = require("./artwork");



const auction = (sequelize, type) => {
  const auctions = sequelize.define(
    "auction",

    {
      virtuals: {
        type: type.VIRTUAL,
        case: { type: type.STRING, defaultValue: false },
        get() {
          return differenceInSeconds(this.startDate, new Date()) < 0;
        },
        get() {
          return differenceInSeconds(this.endDate, new Date()) < 0;
        },
      },

      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      startDate: {
        type: type.DATE,
        required: false,
      },
      startTime: {
        type: type.STRING,
        required: false,
      },
        startTime: {
        type: type.STRING,
        required: false,
      },

      artWork_id: {
        type: type.INTEGER,
        allowNull: false,
      },

      endDate: {
        type: type.DATE,
        required: false,
      },
      endTime: {
        type: type.DATE,
        required: false,
      },
      featured: {
        type: type.BOOLEAN,
        defaultValue: false,
      },
    },

    { timestamps: true }
  );

  return auctions;
};
const Auction = auction(sequelize, Sequelize);
Artwork.hasMany(Auction, { foreignKey: "artWork_id", as: "artwork" });
module.exports = { Auction };

// category.belongsToMany(Auction, {
//   foreignKey: "auction_id",
//   through: "artist_id",
//   as: "auctionCategory",
// });

// Auction.hasMany(Bid, { foreignKey: "bid_id", as: "bid" });
// Bid.hasOne(Auction, { foreignKey: "auction_id", as: "auction" });

// Artist.hasMany(Auction, { foreignKey: "auction_id", as: "auctionArtist" });

// usersLogin.hasMany(Auction, { foreignKey: "auction_id", as: "auctionUser" });

// Auction.isValidStartDate = function () {
//   return new Date() >= new Date(this.startDate);
// };
// Auction.addBid = function () {
//   if (!this.isValidStartDate()) {
//     throw new Error("Auction is yet to start, you cannot bid yet.");
//   }
// };
// Auction.minimumBid = function () {
//   return this.currentBid && this.currentBid.value
//     ? this.currentBid.value + 1
//     : this.startAmount;
// };

module.exports = { Auction };
