const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const artistAuthSchema = (sequelize, type) => {
  const artistAuth = sequelize.define(
    "artists",
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
      imageUrl: type.STRING,
      telNumber: type.INTEGER,
      line1: type.STRING,
      line2: type.STRING,
      postcode: type.INTEGER,
      city: type.STRING,
      country: type.STRING,
      accept: {
        type: type.BOOLEAN,
        defaultValue: false,
      },
      banned: {
        type: type.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
  return artistAuth;
};

let Artist = artistAuthSchema(sequelize, Sequelize);
module.exports = { Artist };
