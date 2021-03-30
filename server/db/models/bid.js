const Sequelize = require("sequelize");
const { sequelize } = require("../index");
const { Auction } = require("./auction");
const { User} = require("./users-model-signup");
const Bids = (sequelize, type) => {
  const bid = sequelize.define(
    "bid",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bidValue: type.INTEGER,

      user_id: {
        type: type.INTEGER,
        allowNull: false,
      },
      auction_id: {
        type: type.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return bid;
};

let Bid = Bids(sequelize, Sequelize);

Bid.hasMany(User ,{ foreignKey: "user_id", as: "userBid" });

Auction.hasMany(Bid, { foreignKey:"auction_id", as: "bidauction" });

module.exports = { Bid };
