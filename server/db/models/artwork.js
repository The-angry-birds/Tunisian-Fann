const Sequelize = require("sequelize");
const { sequelize } = require("../index");
const { Artist } = require("./artist");
const { category } = require("./categories.model.js");

const myArtwork = (sequelize, type) => {
  const artwork = sequelize.define(
    "artwork",

    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      artist_id: {
        type: type.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: type.INTEGER,
        allowNull: false,
      },
      nameArtwork: type.STRING,
      description: type.STRING,
      imageUrl: type.STRING,
      price: type.INTEGER,
    },

    { timestamps: false }
  );

  return artwork;
};
let Artwork = myArtwork(sequelize, Sequelize);
category.hasMany(Artwork, { foreignKey: "category_id", as: "categoryArtwork" });
Artist.hasMany(Artwork, { foreignKey: "artist_id", as: "artistArtWork" });

module.exports = { Artwork };