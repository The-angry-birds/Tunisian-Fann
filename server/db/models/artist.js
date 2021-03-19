const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const artistAuthSchema = (sequelize, type) => {
  const artistAuth = sequelize.define(
    "artist",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: type.STRING,
      lastName: type.STRING,
      email: type.STRING,
      password: type.STRING,
      description: type.STRING,
      category: type.STRING,
      imageUrl: type.STRING,
    },
    { timestamps: false }
  );
  return artistAuth;
};

let Artist = artistAuthSchema(sequelize, Sequelize);
module.exports = { Artist };
