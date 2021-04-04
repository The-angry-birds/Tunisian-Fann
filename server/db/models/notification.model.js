const Sequelize = require("sequelize");
const {sequelize } = require("../index");
const { Auction } =require("./auction.model.js")
const {Artist}=require("./artist.model.js")

const notificationSchema = (sequelize, type) => {
    const notification = sequelize.define(
      "notification",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        auction_id:{
            type: type.INTEGER,
            allowNull: false,
        },
        artist_id:{
            type: type.INTEGER,
            allowNull: false,
        },
        

  
   
      },
      { timestamps: false }
    );
    return notification;
  };
  let Notification = notificationSchema(sequelize, Sequelize);
  Notification.hasMany( Auction ,{ foreignKey: "Auction_id", as: "notificationAuction" });
  Notification.hasMany( Artist ,{ foreignKey: "artist_id", as: "notificationArtist" });

  module.exports = { Notification };

